/*BootstrapMenu浏览器右键菜单
 *
 *
 */

//右键菜单
var menu = new BootstrapMenu('.fileList .file', {
    fetchElementData: function ($file) {
        var fileType = $file.data('filetype');
        var fileName = $file.attr('title');
        return {
            fileType: fileType,
            fileName: fileName
        };
    },

    actionsGroups: [
        ['labelText'],
        ['cut', 'copy']
    ],

    actions: {
        labelText: {
            name: '&nbsp;&nbsp;标注文本',
            iconClass: 'fa-edit',
            onClick: labelTextFunc,
            isEnabled: function (file) {
                return file.fileType !== 'folder';
            }
        },
        cut: {
            name: '&nbsp;&nbsp;剪切',
            iconClass: 'fa-cut',
            onClick: function (file) {
                alert('剪切')
            }
        },
        copy: {
            name: '&nbsp;&nbsp;复制',
            iconClass: 'fa-copy',
            onClick: function (file) {
                console.log('复制')
            }
        }
    }
})

//标注文本的逻辑操作
function labelTextFunc(file) {
    $('#editTextModalLabel').html(file.fileName);
    $('#editTextModal').modal('show');
}
