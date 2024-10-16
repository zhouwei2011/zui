<template>
    <div class="adapt-grid" :style="computedLayout">
        <div class="grid-item" v-for="index in 48" :key="index" :style="computedColumn(index)"></div>
    </div>
</template>

<script>
export default {
    name: 'adapt-grid',
    data() {
        return {
            columnGap: 16,
            pagePadding: 24, // 页面边距
            leftSize: 240, // 侧边导航宽度
            contentWidth: 1200,
            columnWidth: 0,
            columnCount: 0,
            span: 4
        }
    },
    computed: {
        computedColumnCount() {
            return Math.floor(this.columnCount / this.span)
        },
        computedLayout() {
            const { columnWidth, columnCount } = this.calcLayout(this.contentWidth)
            return `column-gap: ${this.columnGap}px;grid-template-columns: repeat(${columnCount}, ${columnWidth}px);width: ${this.contentWidth}px`
        },
        computedColumn() {
            return index => {
                let row = Math.floor(index / this.computedColumnCount) + 1
                let column = index % this.computedColumnCount
                // 正好除尽，则row - 1； e.g：第二十个元素在computedColumnCount为20，余数为0，但是grid-row为 1 / 2；
                if (column == 0) {
                    row = row - 1
                    column = this.computedColumnCount
                }
                column = column * this.span + 1
                return `grid-column: ${column - this.span} / ${column}; grid-row: ${row} / ${row + 1}`
            }
        }
    },
    mounted() {
        this.leftSize = document.querySelector('.m-left-side').clientWidth
        this.calcContentWidth()
        this.calcLayout(this.contentWidth)
        window.onresize = () => {
            this.calcContentWidth()
        }
    },
    methods: {
        calcContentWidth() {
            // 内容部分真实宽度
            this.contentWidth = window.screen.width - (this.leftSize + 2 * this.pagePadding)
        },
        detectZoom() {
            let ratio = 0,
                screen = window.screen,
                ua = navigator.userAgent.toLowerCase()

            if (window.devicePixelRatio !== undefined) {
                ratio = window.devicePixelRatio
            } else if (~ua.indexOf('msie')) {
                if (screen.deviceXDPI && screen.logicalXDPI) {
                    ratio = screen.deviceXDPI / screen.logicalXDPI
                }
            } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
                ratio = window.outerWidth / window.innerWidth
            }

            if (ratio) {
                ratio = Math.round(ratio * 100)
            }
            return ratio
        },
        // 根据实际宽度计算组件的栅格数
        // 如果内容部分为984px - 2 * pagePadding，则栅格数为12列，每列63px，列间距为16px；
        // 如果内容部分为1200px - 2 * pagePadding，则栅格数为16列，每列57px，列间距为16px；
        // contentWidth = columnWidth * columnCount + columnGap * (columnCount - 1)
        calcLayout(contentWidth) {
            let columnWidth, columnCount
            if (contentWidth <= 984 - 2 * this.pagePadding) {
                columnWidth = 63
                columnCount = (contentWidth + this.columnGap) / (columnWidth + this.columnGap)
            } else if (contentWidth < 1200 - 2 * this.pagePadding) {
                columnCount = 12
                columnWidth = (contentWidth + this.columnGap) / columnCount - this.columnGap
            } else {
                // 1440尺寸以上
                columnWidth = 57
                columnCount = (contentWidth + this.columnGap) / (columnWidth + this.columnGap)
            }

            columnCount = Math.floor(columnCount)

            this.columnWidth = columnWidth
            this.columnCount = columnCount
            return { columnWidth, columnCount }
        }
    }
}
</script>

<style scoped lang="scss">
.adapt-grid {
    display: inline-grid;
    min-height: 300px;
    grid-template-rows: repeat(auto-fill, 30px);
    row-gap: 30px;

    .grid-item {
        height: 30px;
        background: $primary;
    }
}
</style>
