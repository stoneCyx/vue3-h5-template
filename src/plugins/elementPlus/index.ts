import { App } from "vue";
import {
    ElTag,
    ElAffix,
    ElSkeleton,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElScrollbar,
    ElSubMenu,
    ElButton,
    ElCol,
    ElRow,
    ElSpace,
    ElDivider,
    ElCard,
    ElDropdown,
    ElDialog,
    ElMenu,
    ElMenuItem,
    ElDropdownItem,
    ElDropdownMenu,
    ElIcon,
    ElInput,
    ElForm,
    ElFormItem,
    ElLoading,
    ElPopover,
    ElPopper,
    ElTooltip,
    ElDrawer,
    ElPagination,
    ElAlert,
    ElRadioButton,
    ElRadioGroup,
    ElDescriptions,
    ElDescriptionsItem
} from "element-plus";

const components = [
    ElTag,
    ElAffix,
    ElSkeleton,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElScrollbar,
    ElSubMenu,
    ElButton,
    ElCol,
    ElRow,
    ElSpace,
    ElDivider,
    ElCard,
    ElDropdown,
    ElDialog,
    ElMenu,
    ElMenuItem,
    ElDropdownItem,
    ElDropdownMenu,
    ElIcon,
    ElInput,
    ElForm,
    ElFormItem,
    ElPopover,
    ElPopper,
    ElTooltip,
    ElDrawer,
    ElPagination,
    ElAlert,
    ElRadioButton,
    ElRadioGroup,
    ElDescriptions,
    ElDescriptionsItem
];

const elementPlus = {
    install(Vue:App):void{
        components.forEach(component=>{
            Vue.component(component.name, component);
        });
    }
}

export default elementPlus;