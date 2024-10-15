---
title: Form 表单
---

# Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据

### 横向表单

<div class="m-block">
    <ClientOnly>
        <el-form :model="formData1" :rules="rules" ref="form1">
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
            <el-form-item prop="timestamp">
                <span class="label" required>开始时间</span>
                <zrx-time-picker v-model="formData1.timestamp" placeholder="请选择"></zrx-time-picker>
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
            <el-form-item prop="form">
                <span class="label" required>活动形式</span>
                <el-input type="textarea" v-model="formData1.form" :maxlength="128" show-word-limit></el-input>
            </el-form-item>
        </el-form>
    </ClientOnly>
    <p class="m-btns-row">
        <el-button type="primary" @click="submitForm('form1')">提交</el-button>
        <el-button @click="resetForm('form1')">重置</el-button>
    </p>
</div>

::: details 示例代码

```html
<el-form :model="formData1" :rules="rules" ref="form1">
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
    <el-form-item prop="timestamp">
        <span class="label" required>开始时间</span>
        <zrx-time-picker v-model="formData1.timestamp" placeholder="请选择"></zrx-time-picker>
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
    <el-form-item prop="form">
        <span class="label" required>活动形式</span>
        <el-input type="textarea" v-model="formData1.form" :maxlength="128" show-word-limit></el-input>
    </el-form-item>
</el-form>
<p class="m-btns-row">
    <el-button type="primary" @click="submitForm('form1')">提交</el-button>
    <el-button @click="resetForm('form1')">重置</el-button>
</p>
<script>
export default {
    data() {
        return {
            formData1: {
                name: '',
                region: '',
                timeRange: [],
                timestamp: null,
                delivery: false,
                type: [],
                resource: '',
                department: ['d966b79460be4734a78d6f53d4037e84'],
                area: [5, 3],
                form: ''
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
            },
            rules: {
                name: [
                    { required: true, message: '请输入', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [{ required: true, message: '请选择', trigger: ['change', 'blur'] }],
                timeRange: [{ type: 'array', required: true, message: '请选择', trigger: ['change', 'blur'] }],
                timestamp: {required: true, message: '请选择', trigger: ['change', 'blur']},
                type: [{ type: 'array', required: true, message: '请选择', trigger: ['change', 'blur'] }],
                resource: [{ required: true, message: '请选择', trigger: ['change', 'blur'] }],
                form: [{ required: true, message: '请输入', trigger: 'blur' }],
                department: [{ type: 'array', required: true, message: '请输入', trigger: ['change', 'blur'] }],
                area: [{ type: 'array', required: true, message: '请选择', trigger: ['change', 'blur'] }]
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
        }
    }
}
</script>
```

:::

### 纵向表单

<div class="m-block">
    <ClientOnly>
        <el-form class="intandem" :model="formData2" :rules="rules" ref="form2" style="--label-width:100px;">
            <el-form-item prop="name">
                <span class="label" required>活动名称 :</span>
                <el-input v-model="formData2.name"></el-input>
            </el-form-item>
            <el-form-item prop="region">
                <span class="label" required>活动区域 :</span>
                <el-select v-model="formData2.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="timeRange">
                <span class="label" required>活动时间 :</span>
                <zrx-date-time-picker v-model="formData2.timeRange" type="daterange" format="yyyy/MM/dd HH:mm:ss"></zrx-date-time-picker>
            </el-form-item>
            <el-form-item prop="timestamp">
                <span class="label" required>开始时间 :</span>
                <zrx-time-picker v-model="formData2.timestamp" placeholder="请选择"></zrx-time-picker>
            </el-form-item>
            <el-form-item prop="delivery">
                <span class="label">即时配送 :</span>
                <el-switch type="primary" v-model="formData2.delivery"></el-switch>
            </el-form-item>
            <el-form-item prop="type">
                <span class="label" required>活动性质 :</span>
                <el-checkbox-group v-model="formData2.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item prop="resource">
                <span class="label" required>特殊资源 :</span>
                <el-radio-group v-model="formData2.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item prop="form">
                <span class="label" required>活动形式 :</span>
                <el-input type="textarea" v-model="formData2.form"></el-input>
            </el-form-item>
            <el-form-item prop="fileList">
                <span class="label" required>选择文件 :</span>
                <div>
                    <zrx-upload
                        :multiple="true"
                        :limit="limit"
                        :file-list="formData2.fileList"
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
            </el-form-item>
        </el-form>
    </ClientOnly>
    <p class="m-btns-row" style="padding-left:100px;">
        <el-button type="primary" @click="submitForm('form2')">提交</el-button>
        <el-button @click="resetForm('form2')">重置</el-button>
    </p>
</div>

::: details 示例代码

```html
<el-form class="intandem" :model="formData2" :rules="rules" ref="form2" style="--label-width:100px;">
    <el-form-item prop="name">
        <span class="label" required>活动名称 :</span>
        <el-input v-model="formData2.name"></el-input>
    </el-form-item>
    <el-form-item prop="region">
        <span class="label" required>活动区域 :</span>
        <el-select v-model="formData2.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item prop="timeRange">
        <span class="label" required>活动时间 :</span>
        <zrx-date-time-picker v-model="formData2.timeRange" type="daterange" format="yyyy/MM/dd HH:mm:ss"></zrx-date-time-picker>
    </el-form-item>
    <el-form-item prop="timestamp">
        <span class="label" required>开始时间 :</span>
        <zrx-time-picker v-model="formData2.timestamp" placeholder="请选择"></zrx-time-picker>
    </el-form-item>
    <el-form-item prop="delivery">
        <span class="label">即时配送 :</span>
        <el-switch type="primary" v-model="formData2.delivery"></el-switch>
    </el-form-item>
    <el-form-item prop="type">
        <span class="label" required>活动性质 :</span>
        <el-checkbox-group v-model="formData2.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
    </el-form-item>
    <el-form-item prop="resource">
        <span class="label" required>特殊资源 :</span>
        <el-radio-group v-model="formData2.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
    </el-form-item>
    <el-form-item prop="form">
        <span class="label" required>活动形式 :</span>
        <el-input type="textarea" v-model="formData2.form"></el-input>
    </el-form-item>
    <el-form-item prop="fileList">
        <span class="label" required>选择文件 :</span>
        <div>
            <zrx-upload
                :multiple="true"
                :limit="limit"
                :file-list="formData2.fileList"
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
    </el-form-item>
</el-form>
<p class="m-btns-row">
    <el-button type="primary" @click="submitForm('form2')">提交</el-button>
    <el-button @click="resetForm('form2')">重置</el-button>
</p>
<script>
export default {
    data() {
        return {
            limit: 3,
            fileServerUrl: 'http://10.10.120.211:31900/zrx-gce-event-coordinative',
            fileUploadUrl: 'http://10.10.120.211:32499/gce-filestorage/oss/upload/zrx-gce-event-coordinative',
            fileSize: 50,
            sizeUnit: 'KB',
            formData2: {
                name: '',
                region: '',
                timeRange: [],
                timestamp: null,
                delivery: false,
                type: [],
                resource: '',
                form: '',
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
                ]
            },
            rules: {
                name: [
                    { required: true, message: '请输入', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [{ required: true, message: '请选择', trigger: ['change', 'blur'] }],
                timeRange: [{ type: 'array', required: true, message: '请选择', trigger: ['change', 'blur'] }],
                timestamp: {required: true, message: '请选择', trigger: ['change', 'blur']},
                type: [{ type: 'array', required: true, message: '请选择', trigger: ['change', 'blur'] }],
                resource: [{ required: true, message: '请选择', trigger: ['change', 'blur'] }],
                form: [{ required: true, message: '请输入', trigger: 'blur' }],
                department: [{ type: 'array', required: true, message: '请输入', trigger: ['change', 'blur'] }],
                area: [{ type: 'array', required: true, message: '请选择', trigger: ['change', 'blur'] }],
                fileList: [{ type: 'array', required: true, message: '请选择', trigger: ['blur'] }]
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
            this.formData2.fileList.push({
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
```

:::

### 链接

[https://element.eleme.io/#/zh-CN/component/form](https://element.eleme.io/#/zh-CN/component/form)

### Form Attributes

| 参数                      | 说明                                                                                   | 类型    | 可选值                | 默认值 |
| ------------------------- | -------------------------------------------------------------------------------------- | ------- | --------------------- | ------ |
| `model`                   | 表单数据对象                                                                           | object  | —                     | —      |
| `rules`                   | 表单验证规则                                                                           | object  | —                     | —      |
| `inline`                  | 行内表单模式                                                                           | boolean | —                     | false  |
| `label-position`          | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width`                | string  | right/left/top        | right  |
| `label-width`             | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持`auto` | string  | —                     | —      |
| `label-suffix`            | 表单域标签的后缀                                                                       | string  | —                     | —      |
| `hide-required-asterisk`  | 是否隐藏必填字段的标签旁边的红色星号                                                   | boolean | —                     | false  |
| `show-message`            | 是否显示校验错误信息                                                                   | boolean | —                     | true   |
| `show-message`            | 是否以行内形式展示校验信息                                                             | boolean | —                     | false  |
| `status-icon`             | 是否在输入框中显示校验结果反馈图标                                                     | boolean | —                     | false  |
| `validate-on-rule-change` | 是否在`rules`属性改变后立即触发一次验证                                                | boolean | —                     | true   |
| `size`                    | 用于控制该表单内组件的尺寸                                                             | string  | medium / small / mini | —      |
| `disabled`                | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效      | boolean | —                     | false  |

### Form Methods

| 方法名称        | 说明                                                                                                                                                                 | 参数                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `validate`      | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object)) |
| `validateField` | 对部分表单字段进行校验的方法                                                                                                                                         | Function(props: array                         | string, callback: Function(errorMessage: string)) |
| `resetFields`   | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                                                                                                           | —                                             |
| `clearValidate` | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果                                                             | Function(props: array                         | string)                                           |

### Form Events

| 事件名称   | 说明                   | 回调参数                                                   |
| ---------- | ---------------------- | ---------------------------------------------------------- |
| `validate` | 任一表单项被校验后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |

### Form-Item Attributes

| 参数             | 说明                                                                         | 类型    | 可选值                          | 默认值 |
| ---------------- | ---------------------------------------------------------------------------- | ------- | ------------------------------- | ------ |
| `prop`           | 表单域 `model` 字段，在使用 `validate`、`resetFields` 方法的情况下，该属性是必填的 | string  | 传入 Form 组件的`model`中的字段 | —      |
| `label`          | 标签文本                                                                     | string  | —                               | —      |
| `label-width`    | 表单域标签的的宽度，例如 '50px'。支持`auto`                                  | string  | —                               | —      |
| `required`       | 是否必填，如不设置，则会根据校验规则自动生成                                 | boolean | —                               | false  |
| `rules`          | 表单验证规则                                                                 | object  | —                               | —      |
| `error`          | 表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息    | string  | —                               | —      |
| `show-message`   | 是否显示校验错误信息                                                         | boolean | —                               | true   |
| `inline-message` | 以行内形式展示校验信息                                                       | boolean | —                               | false  |
| `size`           | 用于控制该表单域下组件的尺寸                                                 | string  | medium / small / mini           | —      |

### Form-Item Methods

| 方法名称        | 说明                                                 | 参数 |
| --------------- | ---------------------------------------------------- | ---- |
| `resetField`    | 对该表单项进行重置，将其值重置为初始值并移除校验结果 | —    |
| `clearValidate` | 移除该表单项的校验结果                               | —    |

<div>
    <contributor :maintainer="['agua']" :members="['agua', 'gbb', 'zw', 'cmd']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            limit: 3,
            fileServerUrl: 'http://10.10.120.211:31900/zrx-gce-event-coordinative',
            fileUploadUrl: 'http://10.10.120.211:32499/gce-filestorage/oss/upload/zrx-gce-event-coordinative',
            fileSize: 50,
            sizeUnit: 'KB',
            formData1: {
                name: '',
                region: '',
                timeRange: [],
                timestamp: null,
                delivery: false,
                type: [],
                resource: '',
                department: ['d966b79460be4734a78d6f53d4037e84'],
                area: [5, 3],
                form: ''
            },
            formData2: {
                name: '',
                region: '',
                timeRange: [],
                timestamp: null,
                delivery: false,
                type: [],
                resource: '',
                form: '',
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
                ]
            },
            rules: {
                name: [
                    { required: true, message: '请输入', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [{ required: true, message: '请选择', trigger: ['change', 'blur'] }],
                timeRange: [{ type: 'array', required: true, message: '请选择', trigger: ['change', 'blur'] }],
                timestamp: {required: true, message: '请选择', trigger: ['change', 'blur']},
                type: [{ type: 'array', required: true, message: '请选择', trigger: ['change', 'blur'] }],
                resource: [{ required: true, message: '请选择', trigger: ['change', 'blur'] }],
                form: [{ required: true, message: '请输入', trigger: 'blur' }],
                department: [{ type: 'array', required: true, message: '请输入', trigger: ['change', 'blur'] }],
                area: [{ type: 'array', required: true, message: '请选择', trigger: ['change', 'blur'] }],
                fileList: [{ type: 'array', required: true, message: '请选择', trigger: ['blur'] }]
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
            this.formData2.fileList.push({
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
