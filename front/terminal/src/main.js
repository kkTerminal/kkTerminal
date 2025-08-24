// jQuery配置Ajax全局响应拦截，进行数据解密
import $ from 'jquery';
import { aesDecrypt } from '@/utils/Encrypt';

$.ajaxSetup({
    cache: false,                   // 禁用缓存
    processData: true,
    xhrFields:{
      withCredentials: true,        // 携带cookie
    },
    dataFilter(resp) {
      resp = JSON.parse(resp);
      if(resp.data) resp.data = JSON.parse(aesDecrypt(resp.data));
      return JSON.stringify(resp);
    },
});

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// 自定义指令
import resizableDirective from '@/directives/Resizable';
app.directive('resizable', resizableDirective);

// 按需引入element-plus
import 'element-plus/dist/index.css';
import { ElButton, ElDialog, ElIcon, ElInput, ElUpload, ElColorPicker,ElDropdown, ElDropdownMenu, ElDropdownItem, ElSwitch, ElLoading, ElRadioGroup, ElRadio, ElPopover, ElTabs, ElTabPane, ElResult, ElTooltip, ElTag, ElPopconfirm, ElCheckbox, ElInputNumber, ElProgress, ElTable, ElCard, ElBadge } from 'element-plus';
app.use(ElButton).use(ElDialog).use(ElIcon).use(ElInput).use(ElUpload).use(ElColorPicker).use(ElTabs).use(ElTabPane).use(ElResult).use(ElTooltip).use(ElCheckbox).use(ElProgress).use(ElTable).use(ElBadge);
app.use(ElDropdown).use(ElDropdownMenu).use(ElDropdownItem).use(ElSwitch).use(ElLoading).use(ElRadioGroup).use(ElRadio).use(ElPopover).use(ElTag).use(ElPopconfirm).use(ElInputNumber).use(ElCard);

// i18n 国际化
import i18n from '@/locales/i18n';
app.use(i18n);

app.mount('#app');

// 引入全局样式
import './assets/base.css';

// 解决 ElTable 自动宽度高度导致的「ResizeObserver loop limit exceeded」问题
const debounce = (fn, delay) => {
    let timer = null;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    }
}

const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver{
    constructor(callback) {
        callback = debounce(callback, 16);
        super(callback);
    }
};

// 禁用警告输出
app.config.warnHandler = () => {};
