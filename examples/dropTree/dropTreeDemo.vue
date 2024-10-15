<template>
    <div class="drop-tree-demo">
        <div class="m-demo-row">
            <h2 class="title">基础用法</h2>
            <p class="subtitle">基础的下拉树展示</p>
            <div class="gallery">
                <zrx-drop-tree :data="treeData1" :props="{ id: 'id', label: 'name', children: 'children' }" v-model="value1"></zrx-drop-tree>
            </div>
            <div class="gallery">
                <zrx-drop-tree :data="treeData1" :props="{ id: 'id', label: 'name', children: 'children' }" v-model="value1"></zrx-drop-tree>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">多选</h2>
            <div class="gallery">
                <zrx-drop-tree :data="treeData" v-model="value2" filterable multiple :popper-append-to-body="false" clearable></zrx-drop-tree>
            </div>
            <div class="describe">单选模式时，不显示勾选框。多选模式时，自动显示勾选框。默认单选。</div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">横向滚动</h2>
            <div class="gallery">
                <zrx-drop-tree :data="treeData" v-model="value3" horizontal></zrx-drop-tree>
            </div>
            <div class="describe">设置横向滚动时，下拉框超长，出现滚动条；未设置时，显示“...”。</div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">文本显示</h2>
            <p class="subtitle">以文本的形式显示选中内容</p>
            <div class="gallery">
                <zrx-drop-tree :data="treeData" v-model="value4" multiple text-show-style="text"></zrx-drop-tree>
            </div>
            <div class="describe">未设置选中形式时，若为单选模式则显示文本，多选模式则显示标签。</div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">禁用</h2>
            <div class="gallery">
                <zrx-drop-tree :data="treeData" v-model="value5" disabled multiple clearable></zrx-drop-tree>
            </div>
        </div>

        <div class="m-demo-row">
            <h2 class="title">插入组件内</h2>
            <p class="subtitle">将下拉框插入至组件内</p>
            <div class="gallery">
                <zrx-drop-tree :data="treeData" v-model="value6" :popper-append-to-body="false"></zrx-drop-tree>
            </div>
            <div class="describe">
                当遇到滚动时的显示问题时，可将下拉框插入至组件的容器内。若此时出现下拉框被遮挡的问题，则可设置"popper-append-to"指定被插入元素。注意被插入元素一般是滚动元素，且需设置"position:
                relative"
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">远程搜索</h2>
            <div class="gallery">
                <zrx-drop-tree :data="data" v-model="value7" remote filterable multiple @remoteMethod="remoteMethod" @checkChange="checkChange" clearable></zrx-drop-tree>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dropTreeDemo',
    data() {
        return {
            treeData1: [
                {
                    id: '1',
                    parentId: '0',
                    sort: 0,
                    children: [
                        {
                            id: '8817697eb28b459ea6c17b191dea6938',
                            parentId: '1',
                            sort: 0,
                            children: [],
                            name: 'nzfz',
                            isDefault: '1',
                            isRead: '1',
                            isWrite: '1',
                            userId: null,
                            temps: null
                        }
                    ],
                    name: '内置分组',
                    isDefault: '1',
                    isRead: '1',
                    isWrite: '1',
                    userId: null,
                    temps: null
                },
                {
                    id: '63613d0529ad4a7483f12d56bc2b7e21',
                    parentId: '0',
                    sort: 1,
                    children: [
                        {
                            id: '2de0fe31884d4e38881ef41029a74228',
                            parentId: '63613d0529ad4a7483f12d56bc2b7e21',
                            sort: 0,
                            children: [
                                {
                                    id: '04b55e266abe4c29b89beedd7380bab1',
                                    parentId: '2de0fe31884d4e38881ef41029a74228',
                                    sort: 0,
                                    children: [],
                                    name: '全局表单',
                                    isDefault: '0',
                                    isRead: '1',
                                    isWrite: '1',
                                    userId: null,
                                    temps: null
                                },
                                {
                                    id: '96e52986d89642c58b64ffed7f27b9c9',
                                    parentId: '2de0fe31884d4e38881ef41029a74228',
                                    sort: 1,
                                    children: [],
                                    name: '环节表单',
                                    isDefault: '0',
                                    isRead: '1',
                                    isWrite: '1',
                                    userId: null,
                                    temps: null
                                }
                            ],
                            name: '工单流转',
                            isDefault: '0',
                            isRead: '1',
                            isWrite: '1',
                            userId: null,
                            temps: null
                        }
                    ],
                    name: 'iot云平台',
                    isDefault: '0',
                    isRead: '1',
                    isWrite: '1',
                    userId: null,
                    temps: null
                },
                {
                    id: 'eab84aae5a554097b2551556b77a7512',
                    parentId: '0',
                    sort: 2,
                    children: [
                        {
                            id: 'fa485a8da3fd44f4bfd025469936dad0',
                            parentId: 'eab84aae5a554097b2551556b77a7512',
                            sort: 0,
                            children: [],
                            name: '10235',
                            isDefault: '0',
                            isRead: '1',
                            isWrite: '1',
                            userId: null,
                            temps: null
                        },
                        {
                            id: '6905c7746e6c4e25a7f8d0412d992a5f',
                            parentId: 'eab84aae5a554097b2551556b77a7512',
                            sort: 1,
                            children: [],
                            name: '、',
                            isDefault: '0',
                            isRead: '1',
                            isWrite: '1',
                            userId: null,
                            temps: null
                        }
                    ],
                    name: '10235',
                    isDefault: '0',
                    isRead: '1',
                    isWrite: '1',
                    userId: null,
                    temps: null
                },
                {
                    id: '7af6d55b192f44e4814e799d71f321e8',
                    parentId: '0',
                    sort: 3,
                    children: [
                        {
                            id: '3e212e91b26d4aae883e948d12ab8a62',
                            parentId: '7af6d55b192f44e4814e799d71f321e8',
                            sort: 0,
                            children: [],
                            name: '10235',
                            isDefault: '0',
                            isRead: '1',
                            isWrite: '1',
                            userId: null,
                            temps: null
                        }
                    ],
                    name: '10235_1',
                    isDefault: '0',
                    isRead: '1',
                    isWrite: '1',
                    userId: null,
                    temps: null
                },
                {
                    id: '3cc32339881e4512ae7581e7baaf9e5b',
                    parentId: '0',
                    sort: 4,
                    children: [],
                    name: '10228',
                    isDefault: '0',
                    isRead: '1',
                    isWrite: '1',
                    userId: null,
                    temps: null
                },
                {
                    id: '8d1939fcaeec44308a36e8cd25cce806',
                    parentId: '0',
                    sort: 5,
                    children: [],
                    name: '102281',
                    isDefault: '0',
                    isRead: '1',
                    isWrite: '1',
                    userId: null,
                    temps: null
                },
                {
                    id: '51282a9534aa4093b271782fd08074b4',
                    parentId: '0',
                    sort: 6,
                    children: [
                        {
                            id: 'b7a2203b83c54a65901347f46673ae79',
                            parentId: '51282a9534aa4093b271782fd08074b4',
                            sort: 0,
                            children: [],
                            name: '10237',
                            isDefault: '0',
                            isRead: '1',
                            isWrite: '1',
                            userId: null,
                            temps: null
                        }
                    ],
                    name: '10237',
                    isDefault: '0',
                    isRead: '1',
                    isWrite: '1',
                    userId: null,
                    temps: null
                },
                {
                    id: '3800863813f84320b9b23313bf37b502',
                    parentId: '0',
                    sort: 8,
                    children: [],
                    name: 'sort8',
                    isDefault: '0',
                    isRead: '1',
                    isWrite: '1',
                    userId: null,
                    temps: null
                },
                {
                    id: 'aa7878a6d882408d8e21958381d67768',
                    parentId: '0',
                    sort: 9,
                    children: [],
                    name: 'sort91111111',
                    isDefault: '0',
                    isRead: '1',
                    isWrite: '1',
                    userId: null,
                    temps: null
                },
                {
                    id: '39edc79ad18240078f7b842b1b7b2c8d',
                    parentId: '0',
                    sort: 10,
                    children: [
                        {
                            id: '3a3219c7289f4550adcdb86f52201fbc',
                            parentId: '39edc79ad18240078f7b842b1b7b2c8d',
                            sort: 0,
                            children: [],
                            name: '333444',
                            isDefault: '0',
                            isRead: '1',
                            isWrite: '1',
                            userId: null,
                            temps: null
                        }
                    ],
                    name: '222',
                    isDefault: '0',
                    isRead: '1',
                    isWrite: '1',
                    userId: null,
                    temps: null
                },
                {
                    id: '43966e7b32c940e58d254fcacb32e3dd',
                    parentId: '0',
                    sort: 11,
                    children: [
                        {
                            id: 'db7785c5ac8f488b828b66de16f8182c',
                            parentId: '43966e7b32c940e58d254fcacb32e3dd',
                            sort: 0,
                            children: [
                                {
                                    id: 'e4cb9a4b3fff4667941adb246fffb41a',
                                    parentId: 'db7785c5ac8f488b828b66de16f8182c',
                                    sort: 0,
                                    children: [],
                                    name: '字典2',
                                    isDefault: '0',
                                    isRead: '1',
                                    isWrite: '1',
                                    userId: null,
                                    temps: null
                                },
                                {
                                    id: '6d87614aff104037b25ae52cc734bbea',
                                    parentId: 'db7785c5ac8f488b828b66de16f8182c',
                                    sort: 1,
                                    children: [],
                                    name: '字典3',
                                    isDefault: '0',
                                    isRead: '1',
                                    isWrite: '1',
                                    userId: null,
                                    temps: null
                                }
                            ],
                            name: '字典1',
                            isDefault: '0',
                            isRead: '1',
                            isWrite: '1',
                            userId: null,
                            temps: null
                        }
                    ],
                    name: '字典',
                    isDefault: '0',
                    isRead: '1',
                    isWrite: '1',
                    userId: null,
                    temps: null
                },
                {
                    id: 'd283cae73cd34e619d5bf38bd8893997',
                    parentId: '0',
                    sort: 12,
                    children: [],
                    name: '10086',
                    isDefault: '0',
                    isRead: '1',
                    isWrite: '1',
                    userId: null,
                    temps: null
                },
                {
                    id: '5ad124bb0c5b4fe980141b5524a9d675',
                    parentId: '0',
                    sort: 13,
                    children: [],
                    name: '10137',
                    isDefault: '0',
                    isRead: '1',
                    isWrite: '1',
                    userId: null,
                    temps: null
                }
            ],
            treeData: [
                {
                    label: '一级 1',
                    id: '1',
                    children: [
                        {
                            label: '二级 1-1',
                            id: '1-1',
                            children: [
                                {
                                    id: '1-1-1',
                                    label: '三级 1-1-1'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '2',
                    label: '一级 2',
                    children: [
                        {
                            id: '2-1',
                            label: '二级 2-1',
                            children: [
                                {
                                    id: '2-1-1',
                                    label: '三级 2-1-1'
                                }
                            ]
                        },
                        {
                            id: '2-2',
                            label: '二级 2-2',
                            children: [
                                {
                                    id: '2-2-1',
                                    label: '三级 2-2-1'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '3',
                    label: '一级 3',
                    children: [
                        {
                            id: '3-1',
                            label: '二级 3-1',
                            children: [
                                {
                                    id: '3-1-1',
                                    label: '三级 3-1-1'
                                }
                            ]
                        },
                        {
                            id: '3-2',
                            label: '二级 3-2',
                            children: [
                                {
                                    id: '3-2-1',
                                    label: '三级 3-2-1，这是一段很长的文字这是一段很长的文字'
                                }
                            ]
                        }
                    ]
                }
            ],
            data: [
                {
                    label: '一级 1',
                    id: '1',
                    children: [
                        {
                            label: '二级 1-1',
                            id: '1-1',
                            children: [
                                {
                                    id: '1-1-1',
                                    label: '三级 1-1-1'
                                }
                            ]
                        }
                    ]
                }
            ],
            value1: ['2-1'],
            value2: ['2-1-1', '2-2-1'],
            value3: [],
            value4: ['3-1', '1-1', '1-1-1', '2', '2-1'],
            value5: ['3-1-1', '2-1'],
            value6: [],
            value7: []
        }
    },
    methods: {
        remoteMethod(text) {
            if (!text) {
                this.data = [
                    {
                        label: '一级 1',
                        id: '1',
                        children: [
                            {
                                label: '二级 1-1',
                                id: '1-1',
                                children: [
                                    {
                                        id: '1-1-1',
                                        label: '三级 1-1-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            } else {
                //
                this.data = [
                    {
                        label: '远程搜索',
                        id: 'yuanchengsousuo'
                    }
                ]
            }
        },
        checkChange(node) {
            console.log('checkChange', node?.label)
        }
    }
}
</script>

<style lang="scss" scoped>
.drop-tree-demo {
    position: relative;
}
</style>
