/*文件上传控件相关事件
 * 
 */


//初始化fileinput控件（第一次初始化）
function initFileInput(ctrlName, uploadUrl) {
    var control = $('#' + ctrlName);
    var allowedFileExt = ['txt', 'docx', 'pdf'];

    control.fileinput({
        language: 'zh', //设置语言
        uploadUrl: '/Home/FileInput', //上传的地址
        allowedFileExtensions: allowedFileExt,//接收的文件后缀
        allowedPreviewTypes: false,
        showPreview: false,
        showUpload: true, //是否显示上传按钮
        showCaption: true,//是否显示标题
        browseClass: "btn btn-primary", //按钮样式             
        previewFileIcon: "<i class='glyphicon glyphicon-file'></i>",
        msgPlaceholder: '请选择文件（支持txt/docx/pdf）'
    });

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //由于开发环境使用的是mock.js，无法进行真实的上传，暂时先在上传失败的
    //事件中模拟业务流程
    $('#' + ctrlName).on("fileuploaderror", function (event, file, result) {

        if (addNewFileOnFrontPage(file, allowedFileExt)) {
            $('#fileInputModal').modal("hide");

            $('#editTextModal').modal('show');
        }

    });
}

//前台界面增加文件
function addNewFileOnFrontPage(file, allowedFileExt) {
    var file = file.files[0];
    var filename = file.name;
    var filetype = filename.substring(filename.lastIndexOf('.') + 1);
    if ($.inArray(filetype, allowedFileExt) !== -1) {
        var newFile = {
            'filetype': filetype,
            'fileIndex': ve_fileList.files.length + 1,
            'fileName': filename,
            'class': 'x-' + filetype
        }

        ve_fileList.files.push(newFile);
        return true;
    } else {
        return false;
    }
    
}
