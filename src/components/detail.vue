<template>
    <div class="detail-wrapper" style="width:100%;">
        <ul ref="detailUl" class="detail-ul" @touchstart="touchStart" @touchend="touchEnd">
            <li v-for="item in picList" :key="item.id">
                <div class="img-index">{{ imgIndex }} / {{ picList.length }}</div>
                <img :src="item.src" class="detail-img">
                <div @click="closeDetail" class="close-detail">关闭</div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        picList: {
            type: Array
        }
    },
    data() {
        return {
            detailData: {},
            picIdList: [],
            startX: 0,
            endX: 0,
            imgIndex: 1,
        }
    },
    methods: {
        closeDetail(e) {
            this.$emit("close-detail", e);
        },
        touchStart(event) {
            this.startX = event.changedTouches[0].clientX;
        },
        touchEnd(event) {
            this.endX = event.changedTouches[0].clientX;
            if (this.endX < this.startX-100) {
                if  (this.imgIndex < this.picList.length) {
                    this.$refs.detailUl.style.left = (-(this.imgIndex) * 100) + 'vw';
                    this.imgIndex += 1;
                } else {
                    alert('没有更多了');
                }
            } else if (this.endX > this.startX+100) {
                if (this.imgIndex > 1) {
                    this.$refs.detailUl.style.left = (-(this.imgIndex - 2) * 100) + 'vw';
                    this.imgIndex -= 1;
                } else {
                    alert('已经是第一张了');
                }
            }
        }
    }
}
</script>

<style scoped>
detail-wrapper {
    overflow: hidden;
    position: relative;
}
.detail-ul {
    display: flex;
    padding: 0;
    margin: 0;
    position: absolute;
    left: 0;
    transition: left 1s;
}
ul > li {
    width: 100vw;
    list-style: none;
}
.img-index {
    color: white;
    position: fixed;
    top: 0;
    left: 48%;
}
.detail-img {
    width: 100vw;
    height: 100vh;
    object-fit: contain;
}
.close-detail {
    position: fixed;
    top: 0;
    left: 1vw;
    color: white;
}
</style>
