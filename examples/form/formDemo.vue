<template>
    <div class="form-demo">
        <!-- 自适应排列表单 -->
        <el-form :model="formData1" :rules="rules" ref="form1" class="zrx-grid-form">
            <el-form-item prop="name">
                <span class="label" required>活动名称</span>
                <el-input v-model="formData1.name"></el-input>
            </el-form-item>
            <el-form-item prop="region">
                <span class="label" required>活动区域</span>
                <el-select v-model="formData1.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="timeRange">
                <span class="label" required>活动时间</span>
                <zrx-date-time-picker v-model="formData1.timeRange" type="daterange" format="yyyy/MM/dd"></zrx-date-time-picker>
            </el-form-item>
            <el-form-item prop="delivery">
                <span class="label">即时配送</span>
                <el-switch type="primary" v-model="formData1.delivery"></el-switch>
            </el-form-item>
            <el-form-item prop="type">
                <span class="label" required>活动性质</span>
                <el-checkbox-group v-model="formData1.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item prop="resource">
                <span class="label" required>特殊资源</span>
                <el-radio-group v-model="formData1.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item prop="department">
                <span class="label" required>所属部门</span>
                <zrx-drop-tree :data="treeObj.data" :props="treeObj.props" v-model="formData1.department"></zrx-drop-tree>
            </el-form-item>
            <el-form-item prop="area">
                <span class="label" required>所属区划</span>
                <zrx-multiple-select v-model="formData1.area" :option="regionObj.option"></zrx-multiple-select>
            </el-form-item>
            <el-form-item prop="desc">
                <span class="label" required>活动形式</span>
                <el-input type="textarea" v-model="formData1.desc" :maxlength="128" show-word-limit></el-input>
            </el-form-item>

            <p class="btns">
                <el-button type="primary" @click="submitForm('form1')">立即创建</el-button>
                <el-button @click="resetForm('form1')">重置</el-button>
            </p>
        </el-form>
        <!-- 纵向布局表单 -->
        <el-form class="intandem zrx-grid-form" :model="formData2" :rules="rules" ref="form2">
            <el-form-item prop="name">
                <span class="label" required>活动名称</span>
                <el-input v-model="formData2.name"></el-input>
            </el-form-item>
            <el-form-item prop="region">
                <span class="label" required>活动区域</span>
                <el-select v-model="formData2.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item required>
                <span class="label" required>活动时间</span>
                <zrx-date-time-picker v-model="formData2.timeRange" type="daterange" format="yyyy/MM/dd HH:mm:ss"></zrx-date-time-picker>
            </el-form-item>
            <el-form-item prop="delivery">
                <span class="label">即时配送</span>
                <el-switch type="primary" v-model="formData2.delivery"></el-switch>
            </el-form-item>
            <el-form-item prop="type">
                <span class="label" required>活动性质</span>
                <el-checkbox-group v-model="formData2.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item prop="resource">
                <span class="label" required>特殊资源</span>
                <el-radio-group v-model="formData2.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item prop="desc">
                <span class="label" required>活动形式</span>
                <el-input type="textarea" v-model="formData2.desc"></el-input>
            </el-form-item>

            <el-form-item prop="file" class="mt20">
                <span class="label" required>选择文件</span>
                <!-- upload-type="file" -->
                <div>
                    <zrx-upload
                        :multiple="true"
                        :limit="limit"
                        :file-list="fileList"
                        list-type="picture-card"
                        upload-type="image"
                        :action="fileUploadUrl"
                        accept=".png,.jpg,.jpeg,.svg"
                        :on-error="handleUploadError"
                        :on-success="handleUploadSuccess"
                        @beforeUpload="beforeUpload"
                        @onExceed="onExceed"
                    ></zrx-upload>
                </div>
                <p class="btns">
                    <el-button type="primary" @click="submitForm('form2')">立即创建</el-button>
                    <el-button @click="resetForm('form2')">重置</el-button>
                </p>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'formDemo',
    data() {
        return {
            limit: 3,

            fileList: [
                {
                    name: 'animation_bg_1544207568866508800.jpg',
                    url: 'http://10.10.120.211:31900/zrx-gce-event-coordinative/20220705/animation_bg_1544207568866508800.jpg',
                    uid: 1657002749164,
                    status: 'success'
                },
                {
                    name: 'animation_bg_1544207568866508800.jpg',
                    url: 'http://10.10.120.211:31900/zrx-gce-event-coordinative/20220705/animation_bg_1544207568866508800.jpg',
                    uid: 16570027491144164,
                    status: 'success'
                }
            ],

            fileServerUrl: 'http://10.10.120.211:31900/zrx-gce-event-coordinative',
            fileUploadUrl: 'http://10.10.120.211:32499/gce-filestorage/oss/upload/zrx-gce-event-coordinative',
            fileSize: 50,
            sizeUnit: 'KB',

            formData1: {
                name: '',
                region: '',
                timeRange: [],
                delivery: false,
                type: [],
                resource: '',
                department: ['d966b79460be4734a78d6f53d4037e84'],
                area: [5, 3],
                desc: ''
            },
            formData2: {
                name: '',
                region: '',
                timeRange: [],
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [{ required: true, message: '请选择', trigger: ['change', 'blur'] }],
                timeRange: [{ type: 'array', required: true, message: '请选择', trigger: ['change', 'blur'] }],
                type: [{ type: 'array', required: true, message: '请选择', trigger: ['change', 'blur'] }],
                resource: [{ required: true, message: '请选择', trigger: ['change', 'blur'] }],
                desc: [{ required: true, message: '请输入', trigger: 'blur' }],
                department: [{ type: 'array', required: true, message: '请输入', trigger: ['change', 'blur'] }],
                area: [{ type: 'array', required: true, message: '请选择', trigger: ['change', 'blur'] }]
            },
            treeObj: {
                data: [
                    {
                        id: '0',
                        parentId: null,
                        children: [
                            {
                                id: '5bbfb0fb33e6432aa499f5ddb801163b',
                                parentId: '0',
                                children: [],
                                name: '一级节点1',
                                sort: 0,
                                disabled: true
                            },
                            {
                                id: 'd966b79460be4734a78d6f53d4037e84',
                                parentId: '0',
                                children: [],
                                name: '一级节点2',
                                sort: 2
                            },
                            {
                                id: 'b169cbd13e154d53b199afb1dceeaeee',
                                parentId: '0',
                                children: [],
                                name: '一级节点3',
                                sort: 3
                            },
                            {
                                id: 'aa946ffcf7bb4b03821dee3c75aa4ea2',
                                parentId: '0',
                                children: [
                                    {
                                        id: 'd7f354df24bb4166be3c09b20561ad8e',
                                        parentId: 'aa946ffcf7bb4b03821dee3c75aa4ea2',
                                        children: [
                                            {
                                                id: '11112f1d487945a097a0ba5ff1f21273',
                                                parentId: 'd7f354df24bb4166be3c09b20561ad8b',
                                                children: [],
                                                name: '三级节点1',
                                                sort: 0
                                            },
                                            {
                                                id: '11112f1d487945a097a0ba5ff1f21273',
                                                parentId: 'd7f354df24bb4166be3c09b20561ad8f',
                                                children: [],
                                                name: '三级节点2',
                                                sort: 1
                                            },
                                            {
                                                id: '11112f1d487945a097a0ba5ff1f21273',
                                                parentId: 'd7f354df24bb4166be3c09b20561ad8g',
                                                children: [],
                                                name: '三级节点3',
                                                sort: 2
                                            },
                                            {
                                                id: '11112f1d487945a097a0ba5ff1f21273',
                                                parentId: 'd7f354df24bb4166be3c09b20561ad8h',
                                                children: [],
                                                name: '三级节点4',
                                                sort: 3
                                            },
                                            {
                                                id: '11112f1d487945a097a0ba5ff1f21273',
                                                parentId: 'd7f354df24bb4166be3c09b20561ad8i',
                                                children: [],
                                                name: '三级节点6',
                                                sort: 5
                                            }
                                        ],
                                        name: '二级节点1',
                                        sort: 0
                                    }
                                ],
                                name: '一级节点4',
                                sort: 4
                            }
                        ],
                        name: '全部',
                        sort: 0
                    }
                ],
                props: {
                    label: 'name',
                    value: 'id'
                }
            },
            regionObj: {
                option: [
                    {
                        label: '下拉选项1',
                        value: 1
                    },
                    {
                        label: '下拉选项2',
                        value: 2
                    },
                    {
                        label: '下拉选项3',
                        value: 3
                    },
                    {
                        label: '下拉选项4',
                        value: 4
                    },
                    {
                        label: '下拉选项5',
                        value: 5
                    }
                ]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    console.log('submit!')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields()
        },

        handleUploadSuccess(response, file, fileList) {
            this.fileList.push({
                url: this.fileServerUrl + response.data.link,
                name: response.data.fileName + '.' + response.data.fileSuffix
            })
        },
        // 上传失败回调
        handleUploadError(err, file, fileList) {},
        beforeUpload(file, isExceed, isUnAchieved) {
            if (isExceed) {
                this.$message.warning(`文件大小不能超过${this.fileSize}${this.sizeUnit}!`)
            } else if (isUnAchieved) {
                this.$message.warning('文件为空!')
            }
        },
        onExceed(isExceed) {
            if (isExceed) {
                this.$message.warning('超过文件上传的最大个数!')
            }
        }
    }
}
</script>
<style lang="scss">
.form-demo {
    .mb30 {
        display: flex;
        margin-bottom: 30px;
    }
    .mt20 {
        margin-top: 20px;
    }
    .btns {
        margin-top: 30px;
    }
}
</style>
