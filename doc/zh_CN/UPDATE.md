### 👨‍💻 历史更新记录

##### zyyzyykk/kkterminal:3.5.6：

- 支持更多URL参数
- 新增编辑器文字&图片大小百分比
- 优化界面显示

##### zyyzyykk/kkterminal:3.5.3：

- 新增url参数自定义终端配置
- 修复多窗口重启的bug
- 新增操作录像和云端同步功能
- 重构部分代码逻辑

##### zyyzyykk/kkterminal:3.4.9：

- 新增私钥方式登录
- 新增文件编码自动识别与保存切换
- 新增文件语言模式选择
- 新增文件缩进选择和内容复制

##### zyyzyykk/kkterminal:3.4.5：

- 新增文件权限编辑功能
- 修复了输入框上传时更改目录导致文件夹上传错误的bug
- 优化界面显示

##### zyyzyykk/kkterminal:3.4.2：

- 实现i18n国际化，支持中/英文语言切换
- 重构了部分代码逻辑

##### zyyzyykk/kkterminal:3.4.0：

- 新增SSH连接配置与自定义终端代码的删除功能
- 修复了文件模块文件夹粘贴失败的bug
- 优化了网络资源与页面显示

##### zyyzyykk/kkterminal:3.3.7：

- 自适应远程服务器编码格式
- 扩展高亮文件类型
- 新增文件项键盘选择切换与打开
- 隐藏文件图标样式优化

##### zyyzyykk/kkterminal:3.3.3：

- 新增压缩包文件解压功能
- 修复文件夹拖拽上传导致文件丢失的bug
- 新增对于浏览器原生支持格式文件的预览
- 优化文件模块界面显示

##### zyyzyykk/kkterminal:3.2.9：

- 新增文件URL上传功能
- 修复了取消文件夹下载导致连接断开的bug
- 优化页面显示与代码逻辑，优化打包体积

##### zyyzyykk/kkterminal:3.2.6：

- 修复文件特殊字符操作问题的bug
- 优化文件上传与下载
- 文件属性模块：文件夹新增包含属性、文件大小属性实时刷新
- 优化显示逻辑，规范编码

##### zyyzyykk/kkterminal:3.2.2：

- 终端代码支持会话级/本地级变量的存取
- 文本编辑器新增终端代码原生对象 `kkTerminal` 的智能提示
- 文件管理模块快捷键适配MacOS

##### zyyzyykk/kkterminal:3.2.0：

- 文件管理模块支持快捷键操作：多选/全选、复制粘贴、剪切等
- 支持文件夹下载
- 重构部分逻辑，优化显示

##### zyyzyykk/kkterminal:3.1.7：

- 适配默认字体、优化终端代码状态显示
- 支持本地PC端部署，自动打开浏览器窗口

##### zyyzyykk/kkterminal:3.1.5：

- 修复无法通过input框上传文件的bug
- 支持文件夹上传、优化文件批量上传逻辑
- 新增终端代码状态信息，优化终端代码显示

##### zyyzyykk/kkterminal:3.1.2：

- 文件编辑器支持常见文件类型的代码高亮与智能提示
- 新增 [终端代码](./TCODE.md)，实现功能模块的快速访问与特定操作流程的执行

##### zyyzyykk/kkterminal:3.0.9：

- 连接设置模块新增主机ip复制、密码显示与隐藏等功能
- 文件管理模块新增大文件上传等提示信息

##### zyyzyykk/kkterminal:3.0.7：

- 文件图标库 [file-icons-vue](https://github.com/zyyzyykk/file-icons-vue) 更新至 `1.2.6` 版本，后续不再进行更新

##### zyyzyykk/kkterminal:3.0.6：

- 解决拖拽上传无法识别文件夹的问题，最终修改为不支持拖拽上传文件夹或空文件

##### zyyzyykk/kkterminal:3.0.5：

- 优化文本编辑器撤销历史
- 完善请求异常错误处理

##### zyyzyykk/kkterminal:3.0.3：

- 修改滚动条样式，优化文件大小属性展示
- 修复bug：部分文件权限属性错误、终端中文输入混乱

##### zyyzyykk/kkterminal:3.0.1：

- 优化文字溢出省略等样式
- 修复部分文件无法显示属性模块的bug

##### zyyzyykk/kkterminal:3.0.0：

- 优化文件上传逻辑，压缩打包体积
- 实现文件拖拽上传，将文件拖拽至显示区即可上传
- 新增文件菜单，右键文件或空白区查看菜单项

##### zyyzyykk/kkterminal:2.9.7：

- 优化显示细节
- 文本编辑器由 `Monaco` 替换为更轻量的 `Ace`

##### zyyzyykk/kkterminal:2.9.5：

- 修复了已知bug
- 支持中文输入
- 新增文件的浏览与编辑功能，修改文件后使用 `ctrl+s` 保存至远程服务器

##### zyyzyykk/kkterminal:2.9.2：

- 修改提示语内容
- 对弹窗模块进行优化，打开弹窗后可继续操作终端
- 新增连接配置的保存与导入，可快速切换连接多个远程服务器

##### zyyzyykk/kkterminal:2.9.0：

- 修改了一些默认样式，增加了网页描述与细节处理
- 文件图标库 [file-icons-vue](https://github.com/zyyzyykk/file-icons-vue) 更新至 `1.1.3` 版本，后续版本会同步更新图标库，不再进行说明

##### zyyzyykk/kkterminal:2.8.8：

- 修复了部分情况下文件与文件夹类别展示错误的bug
- 文件图标库 [file-icons-vue](https://github.com/zyyzyykk/file-icons-vue) 更新至 `1.0.4` 版本
- 优化了一些细节

##### zyyzyykk/kkterminal:2.8.3：

- 优化文件上传功能，实现文件后台上传
- 优化文件模块的展示细节
- 修复了因ssh连接未校验导致数据混乱的bug

##### zyyzyykk/kkterminal:2.8.0：

- 新增websocket心跳续约，保证ws连接不断开
- 新增文件管理模块，实现文件的查看、上传与下载

##### zyyzyykk/kkterminal:2.5：

- 新增长时间无交互导致断开连接的提示
- 修复了终端窗口大小变化时由于命令过长导致的展示问题

##### zyyzyykk/kkterminal:2.2 ：

- 修复重启终端后出现的粘贴bug
- 更改了可选择的字体样式

##### zyyzyykk/kkterminal:2.0 ：

增加在终端内复制粘贴功能：
- 复制：同git终端，选中文本会进行自动复制
- 粘贴：同cmd终端，鼠标右键单击进行粘贴（需要浏览器打开权限）

##### zyyzyykk/kkterminal:1.0 ：

提交官方镜像