<template>
    <div style="max-width:100%;">
        <div v-for="item in getListData" :key="item.id" @click="onDetail(item.id)" style="max-width:100%">
            <img :src="item.litpic" style="width:100%">
        </div>
        <div @click="loadMore">加载</div>
        <div class="popContainer" v-if="preShow" @close-detail="closeDetail">
            <detail :picList="picIdList"></detail>
        </div>
    </div>
</template>

<script>
import { getList, getDetail } from '../api/index';
import Detail from './detail';

export default {
    components: {
        Detail,
    },
    computed: {
        getListData() {
            return this.listData;
        }
    },
    data() {
        return {
            page: 1,
            listData: [],
            preShow: false,
            detailData: {},
            picIdList: []
        }
    },
    created() {
        getList(
            {
                "m_mid": "687640",
                "action": "Sort",
                "key": "252f112a354734f8d61589f018ebfbd9",
                "controller": "archives",
                "bid": 1,
                "page": this.page
            }
        ).then(
            res => {
                this.listData = res.entries_s;
                this.page += 1;
            }
        )
    },
    methods: {
        closeDetail() {
            this.preShow = false;
        },
        onDetail(id) {
            this.preShow = true;
            getDetail(
                {
                    "controller": "archives",
                    "action": "getArchiveD",
                    "key": "252f112a354734f8d61589f018ebfbd9",
                    "token": "252f112a354734f8d61589f018ebfbd9",
                    "aid": id,
                }
            ).then(
                res => {
                    this.detailData = res;
                    this.picIdList = []
                    for (let i = 1; i <= parseInt(res.source); i++) {
                        if (i < 10) {
                            this.picIdList.push({'msrc':res.cdn + res.shorttitle + '/00' + i + '.rosi',
                            'src':res.cdn + res.shorttitle + '/00' + i + '.rosi',
                            'w':200,
                            'h':200});
                        } else if (i < 100) {
                            this.picIdList.push({'msrc':res.cdn + res.shorttitle + '/0' + i + '.rosi',
                            'src':res.cdn + res.shorttitle + '/0' + i + '.rosi',
                            'w':200,
                            'h':200});
                        } else {
                            this.picIdList.push({'msrc':res.cdn + res.shorttitle + '/' + i + '.rosi',
                            'src':res.cdn + res.shorttitle + '/' + i + '.rosi',
                            'w':200,
                            'h':200});
                        }
                    }
                    console.log(this.picIdList)
                }
            )
        },
        loadMore() {
            getList(
                {
                    "m_mid": "687640",
                    "action": "Sort",
                    "key": "252f112a354734f8d61589f018ebfbd9",
                    "controller": "archives",
                    "bid": 1,
                    "page": this.page
                }
            ).then(
                res => {
                    this.listData = this.listData.concat(res.entries_s);
                    this.page += 1;
                }
            )
        }
    }
}
</script>

<style scoped>
.popContainer{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,1);
    z-index: 999;
}

</style>
