<template>
    <div class="button-demo">
        <div class="m-demo-row">
            <h2 class="title">主要按钮</h2>
            <div class="flex-bar">
                <el-button type="primary">主要按钮</el-button>
                <el-button type="primary" icon="svg-icon zrx-icon-download">下载</el-button>
                <el-button type="primary" icon="svg-icon zrx-icon-magnifier">搜索用户</el-button>
                <el-button type="primary" round icon="svg-icon zrx-icon-magnifier"></el-button>
                <el-button type="primary" circle icon="svg-icon zrx-icon-magnifier"></el-button>
                <el-button type="primary"><i class="svg-icon zrx-icon-down-angle"></i><span>内嵌</span></el-button>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">次要按钮</h2>
            <div class="flex-bar">
                <el-button>次要按钮</el-button>
                <el-button icon="svg-icon zrx-icon-download">下载</el-button>
                <el-button icon="svg-icon zrx-icon-add">添加</el-button>
                <el-button round icon="svg-icon zrx-icon-magnifier"></el-button>
                <el-button circle icon="svg-icon zrx-icon-magnifier"></el-button>
                <el-button><i class="svg-icon zrx-icon-down-angle"></i><span>内嵌</span></el-button>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">危险按钮</h2>
            <div class="flex-bar">
                <el-button type="danger">危险按钮</el-button>
                <el-button type="danger" icon="svg-icon zrx-icon-download">下载</el-button>
                <el-button type="danger" icon="svg-icon zrx-icon-magnifier">搜索用户</el-button>
                <el-button type="danger" round icon="svg-icon zrx-icon-magnifier"></el-button>
                <el-button type="danger" circle icon="svg-icon zrx-icon-magnifier"></el-button>
                <el-button type="danger"><i class="svg-icon zrx-icon-down-angle"></i><span>内嵌</span></el-button>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">幽灵按钮</h2>
            <div class="flex-bar">
                <el-button type="ghost">幽灵按钮</el-button>
                <el-button type="ghost" icon="svg-icon zrx-icon-download">下载</el-button>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">文字按钮</h2>
            <div class="flex-bar">
                <el-button type="text">文字按钮</el-button>
                <el-button type="text" icon="svg-icon zrx-icon-download">下载</el-button>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">失效按钮</h2>
            <div class="flex-bar">
                <el-button type="primary" disabled>主要按钮</el-button>
                <el-button type="primary" icon="svg-icon zrx-icon-download" disabled>下载</el-button>
                <el-button disabled>次要按钮</el-button>
                <el-button disabled icon="svg-icon zrx-icon-download">下载</el-button>
                <el-button disabled type="ghost">幽灵按钮</el-button>
                <el-button disabled type="ghost" icon="svg-icon zrx-icon-download">下载</el-button>
                <el-button disabled type="text">文字按钮</el-button>
                <el-button disabled type="text" icon="svg-icon zrx-icon-download">下载</el-button>
                <el-button disabled round icon="svg-icon zrx-icon-magnifier"></el-button>
                <el-button disabled circle icon="svg-icon zrx-icon-magnifier"></el-button>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">操作按钮</h2>
            <div class="flex-bar">
                <el-dropdown>
                    <el-button type="primary">下载<i class="svg-icon zrx-icon-down-angle"></i></el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>PDF</el-dropdown-item>
                        <el-dropdown-item>CSV</el-dropdown-item>
                        <el-dropdown-item>Excel</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <el-button>下载<i class="svg-icon zrx-icon-down-angle"></i></el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>PDF</el-dropdown-item>
                        <el-dropdown-item>CSV</el-dropdown-item>
                        <el-dropdown-item>Excel</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'buttonDemo'
}
</script>
