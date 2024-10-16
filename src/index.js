import {
    Loading,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    MessageBox,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Tree,
    Alert,
    Notification,
    Slider,
    Icon,
    Upload,
    Spinner,
    Message,
    Steps,
    Step,
    Scrollbar,
    Collapse,
    CollapseItem,
    Cascader,
    Transfer,
    Image,
    InfiniteScroll,
    CascaderPanel,
    Drawer,
    Popconfirm
} from 'element-ui'
import zrxBarChart from './packages/barChart'
import zrxCrumbNav from './packages/crumbNav'
import zrxDateTimePicker from './packages/dateTimePicker'
import zrxDropTree from './packages/dropTree'
import zrxEmptyState from './packages/emptyState'
import ZrxIcon from './packages/icon'
import zrxMultipleSelect from './packages/multipleSelect'
import zrxNavigation from './packages/navigation'
import zrxPagination from './packages/pagination'
import zrxPassword from './packages/password'
import zrxProgress from './packages/progress'
import zrxRollNumber from './packages/rollNumber'
import zrxScore from './packages/score'
import zrxSearchBox from './packages/searchBox'
import zrxSpringBox from './packages/springBox'
import zrxStatus from './packages/status'
import zrxStep from './packages/step'
import zrxSteps from './packages/steps'
import zrxTabBar from './packages/tabBar'
import zrxTabContent from './packages/tabContent'
import zrxTableWidgets from './packages/tableWidgets'
import ZrxTandem from './packages/tandem'
import zrxTimePicker from './packages/timePicker'
import zrxTransfer from './packages/transfer'
import zrxUpload from './packages/upload'

// element样式
import 'element-ui/lib/theme-chalk/index.css'
// zrx-admin-ui-2.0重置样式
import './style/index.scss'

// 相关element组件
const components = [
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Tree,
    Alert,
    Slider,
    Icon,
    Upload,
    Spinner,
    Steps,
    Step,
    Scrollbar,
    Collapse,
    CollapseItem,
    Cascader,
    Transfer,
    Image,
    CascaderPanel,
    Drawer,
    Popconfirm,
    zrxBarChart,
    zrxCrumbNav,
    zrxDateTimePicker,
    zrxDropTree,
    zrxEmptyState,
    ZrxIcon,
    zrxMultipleSelect,
    zrxNavigation,
    zrxPagination,
    zrxPassword,
    zrxRollNumber,
    zrxScore,
    zrxSearchBox,
    zrxSpringBox,
    zrxStatus,
    zrxStep,
    zrxSteps,
    zrxTabBar,
    zrxTabContent,
    zrxTableWidgets,
    ZrxTandem,
    zrxTimePicker,
    zrxTransfer,
    zrxUpload
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue, opts = {}) {
    // 判断是否可以安装
    if (install.installed) return
    components.forEach(component => {
        Vue.component(component.name, component)
    })
    // element的组件相关注册
    Vue.use(zrxProgress)
    Vue.use(InfiniteScroll)
    Vue.use(Loading.directive)
    Vue.prototype.$ELEMENT = {
        size: opts.size || '',
        zIndex: opts.zIndex || 2000
    }
    Vue.prototype.$loading = Loading.service
    Vue.prototype.$msgbox = MessageBox
    Vue.prototype.$alert = MessageBox.alert
    Vue.prototype.$confirm = MessageBox.confirm
    Vue.prototype.$prompt = MessageBox.prompt
    Vue.prototype.$notify = Notification
    Vue.prototype.$message = Message
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    // element
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Tree,
    Alert,
    Slider,
    Icon,
    Upload,
    Spinner,
    Steps,
    Step,
    Scrollbar,
    Collapse,
    CollapseItem,
    Cascader,
    Transfer,
    Image,
    CascaderPanel,
    Drawer,
    Popconfirm,
    // 自定义
    zrxBarChart,
    zrxCrumbNav,
    zrxDateTimePicker,
    zrxDropTree,
    zrxEmptyState,
    ZrxIcon,
    zrxMultipleSelect,
    zrxNavigation,
    zrxPagination,
    zrxPassword,
    zrxRollNumber,
    zrxScore,
    zrxSearchBox,
    zrxSpringBox,
    zrxStatus,
    zrxStep,
    zrxSteps,
    zrxTabBar,
    zrxTabContent,
    zrxTableWidgets,
    ZrxTandem,
    zrxTimePicker,
    zrxTransfer,
    zrxUpload,
    // 非直接注册
    InfiniteScroll,
    MessageBox,
    Notification,
    Message,
    zrxProgress
}

export default {
    install,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Tree,
    Alert,
    Slider,
    Icon,
    Upload,
    Spinner,
    Steps,
    Step,
    Scrollbar,
    Collapse,
    CollapseItem,
    Cascader,
    Transfer,
    Image,
    CascaderPanel,
    Drawer,
    Popconfirm,
    zrxBarChart,
    zrxCrumbNav,
    zrxDateTimePicker,
    zrxDropTree,
    zrxEmptyState,
    ZrxIcon,
    zrxMultipleSelect,
    zrxNavigation,
    zrxPagination,
    zrxPassword,
    zrxRollNumber,
    zrxScore,
    zrxSearchBox,
    zrxSpringBox,
    zrxStatus,
    zrxStep,
    zrxSteps,
    zrxTabBar,
    zrxTabContent,
    zrxTableWidgets,
    ZrxTandem,
    zrxTimePicker,
    zrxTransfer,
    zrxUpload,
    InfiniteScroll,
    MessageBox,
    Notification,
    Message,
    zrxProgress
}
