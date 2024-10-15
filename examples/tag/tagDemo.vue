<template>
    <div class="tag-demo">
        <div class="m-demo-row">
            <h2 class="title">基础用法</h2>
            <div class="flex-bar">
                <el-tag class="large white">white</el-tag>
                <el-tag class="large grey">grey</el-tag>
                <el-tag class="large blue">blue</el-tag>
                <el-tag class="large green">green</el-tag>
                <el-tag class="large orange">orange</el-tag>
                <el-tag class="large red">red</el-tag>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">可移除标签</h2>
            <div class="flex-bar">
                <el-tag class="is-closable white" closable>mySql</el-tag>
                <el-tag class="is-closable grey" closable>oracle</el-tag>
                <el-tag class="is-closable blue" closable>mongoDB</el-tag>
                <el-tag class="is-closable green" closable>kafka</el-tag>
                <el-tag class="is-closable orange" closable>rabbitMq</el-tag>
                <el-tag class="is-closable red" closable>sqlSever</el-tag>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">不同尺寸</h2>
            <div class="flex-bar">
                <el-tag class="small grey">small tag</el-tag>
                <el-tag class="middle grey">middle tag</el-tag>
                <el-tag class="large grey">large tag</el-tag>
            </div>
        </div>
    </div>
</template>
