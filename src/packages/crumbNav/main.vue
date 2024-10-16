<template>
    <div class="zrx-crumb-nav">
        <template v-if="menu.length < plainLength">
            <template v-for="(n, i) in menu">
                <button :class="['btn', path == n.path && 'selected']" :key="i" @click="onClick(n)" :title="n.label">
                    {{ n.label }}
                </button>
                <i class="icon svg-icon zrx-icon-right-angle" :selected="path == n.path" :key="'gap_' + i" v-if="i < menu.length - 1"></i>
            </template>
        </template>
        <template v-else>
            <button :class="['btn', path == menu[0].path && 'selected']" @click="onClick(menu[0])" :title="menu[0].label">
                {{ menu[0].label }}
            </button>
            <i class="icon svg-icon zrx-icon-right-angle"></i>
            <el-dropdown placement="bottom">
                <button class="btn"><i class="icon svg-icon zrx-icon-show-more"></i></button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :class="path == n.path && 'selected'" v-for="(n, i) in menu.slice(1, -1)" :key="i" :title="n.label" @click.native="onClick(n)">{{
                        n.label
                    }}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <i class="icon svg-icon zrx-icon-right-angle" :selected="menu.slice(1, -1).find(item => item.path == path)"></i>
            <button :class="['btn', path == menu[menu.length - 1].path && 'selected']" :title="menu[menu.length - 1].label" @click="onClick(menu[menu.length - 1])">
                {{ menu[menu.length - 1].label }}
            </button>
        </template>
    </div>
</template>

<script>
export default {
    name: 'zrxCrumbNav',
    props: {
        menu: {
            type: Array,
            default() {
                return []
            }
        },
        plainLength: {
            type: [String, Number],
            default: 4
        }
    },
    data() {
        return {
            externalDone: false
        }
    },
    methods: {
        onClick(menuObj) {
            if (this.$route.path == menuObj.path) {
                return this.$emit('tabClick', menuObj)
            }
            const from = JSON.parse(JSON.stringify(this.currentMenu))
            this.$emit('beforeSkip', { to: menuObj, from, next: this.handleSkip(menuObj) })
            if (!this.externalDone) {
                this.skip(menuObj)
            } else {
                this.externalDone = false
            }
            this.$emit('tabClick', menuObj)
        },
        handleSkip(menuObj) {
            return (next = true) => {
                this.externalDone = true
                if (next) {
                    this.skip(menuObj)
                }
            }
        },
        skip(menuObj) {
            this.$router.push({ path: menuObj.path })
        }
    },
    computed: {
        path() {
            return this?.$route?.path ?? ''
        },
        currentMenu() {
            return this.menu.find(m => m.path === this.path) ?? null
        }
    }
}
</script>
