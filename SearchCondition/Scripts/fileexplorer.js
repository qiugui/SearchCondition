//向左右拖动
$('.frame-left').resizable({
    //handles: 'e, s',
    handles: 'e',
    minWidth: 100,
    maxWidth: 400,
    resize: function (event, ui) {
        var x = ui.element.outerWidth();
        var y = ui.element.outerHeight();
        var ele = ui.element;

        var factor = $(this).parent().width() - x;

        $.each(ele.siblings(), function (idx, item) {
            ele.siblings().eq(idx).css('height', y + 'px');
            ele.siblings().eq(idx).width(factor + 'px');
        });
    }
});

//向下拖动
//$('.sp:not(.fileArea)').resizable({
//    handles: 's',
//    resize: function (event, ui) {
//        var y = ui.element.outerHeight();
//        var ele = ui.element;
//        $.each(ele.siblings(), function (idx, item) {
//            ele.siblings().eq(idx).css('height', y + 'px');
//        });
//    }
//});

//使用Mock获取文件数据
Mock.mock(/\.json/, function (options) {
    var params = options.body;
    var fileNum = params.split('=')[1];
    var fileData = Mock.mock({
        'array|5-10': [
            {
                'filetype|1': ['docx', 'folder', 'txt', 'pdf'],
                'fileIndex|+1': 0,
                'fileName': function () {
                    if ('folder' === this.filetype) return '文件夹' + this.fileIndex
                    else if ('txt' === this.filetype) return '文本文档' + this.fileIndex + '.' + this.filetype
                    else return '文档' + this.fileIndex + '.' + this.filetype
                },
                'class': function () {
                    return 'x-' + this.filetype;
                }
            }
        ]
    })
    return fileData;
})

//右键菜单
var menu = new BootstrapMenu('.fileList .file', {
    fetchElementData: function($file){
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
            onClick: function (file) {
                $('#editTextModalLabel').html(file.fileName);
                $('#editTextModal').modal('show');
            },
            isEnabled: function(file) {
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

