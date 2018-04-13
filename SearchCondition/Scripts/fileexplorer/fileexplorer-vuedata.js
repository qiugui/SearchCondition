/*界面中使用的Vue对象
 * 
 */

//文件列表展示区域绑定的Vue
//fileexplorer - fileAreaTree.js => showFile() 使用
var ve_fileList = new Vue({
    el: '#fileList',
    data: {
        files: null
    }
});

//打标签的功能模态框区域绑定的Vue
var ve_labelTextArea = new Vue({
    el: '#labelTextArea',
    data: {
        labelAreaType: 0,   //0:对文本区域打标签；1:根据主题打标签
        labelAreaTitle: 'Modal title',
        labelData: {
            labelInfo: [],
            labelValue: ''
        }
    }
});
