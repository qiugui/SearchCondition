/*BootstrapMenu浏览器右键菜单
 *
 *
 */

//右键菜单
var menu_on_file = new BootstrapMenu('.fileList .file', {
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
            name: '&nbsp;&nbsp;标注文档',
            iconClass: 'fa-edit',
            onClick: openText2Label,
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

//标注文本打开模态框的逻辑操作
function openText2Label(file) {
    $('#editTextModalLabel').html(file.fileName);
    $('#editTextModal').modal('show');
}

var menu_on_text = new BootstrapMenu('.fileEdit .fileContentArea', {
    fetchElementData: function ($content) {
        return $content;
    },

    actionsGroups: [
        ['labelText'],
        ['cut', 'copy']
    ],

    actions: {
        labelText: {
            name: '&nbsp;&nbsp;标注选定文本',
            iconClass: 'fa-edit',
            onClick: labelTextFunc,
            isEnabled: function (content) {
                var selObject = window.getSelection();
                var txtContent = selObject.toString();
                return txtContent !== '';
            }
        },
        cut: {
            name: '&nbsp;&nbsp;操作1',
            iconClass: 'fa-cut',
            onClick: function (content) {
                alert('操作1')
            }
        },
        copy: {
            name: '&nbsp;&nbsp;操作2',
            iconClass: 'fa-copy',
            onClick: function (content) {
                console.log('操作2')
            }
        }
    }
})

function labelTextFunc(content) {

    var selObject = window.getSelection();
    var txtContent = selObject.toString();

    ve_labelTextArea.labelAreaType = 0;
    ve_labelTextArea.labelAreaTitle = "对选择文本进行打标";
    ve_labelTextArea.tagValueIsHidden = true;
    ve_labelTextArea.labelData.labelValue = txtContent;

    $.ajax({
        url: 'getContentTag.json',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            var allTagInfo = data.array;
            ve_labelTextArea.labelData.labelInfo = allTagInfo;

            var allTagInfo = data.array;
            ve_labelTextArea.labelData.labelInfo = allTagInfo;

            var option_str = '';
            $.each(allTagInfo, function (index, value) {
                var currentOpt = '<option value="' + value.id + '">' + value.tagName + '</option>';
                option_str += currentOpt;
            });

            $('#tagType_select').html(option_str);
            $('#tagType_select').selectpicker('refresh');

            var $modal = $('#labelTextModal');
            $modal.modal('show');
        }
    })
}
