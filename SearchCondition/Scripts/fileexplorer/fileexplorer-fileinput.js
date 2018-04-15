/*文件上传控件相关事件
 * 
 */


//初始化fileinput控件（第一次初始化）
function initFileInput(ctrlName, uploadUrl) {
    var control = $('#' + ctrlName);

    control.fileinput({
        language: 'zh', //设置语言
        uploadUrl: '/mock/fileinput', //上传的地址
        allowedFileExtensions: ['txt', 'docx', 'pdf'],//接收的文件后缀
        allowedPreviewTypes: false,
        showPreview: false,
        showUpload: true, //是否显示上传按钮
        showCaption: true,//是否显示标题
        browseClass: "btn btn-primary", //按钮样式             
        previewFileIcon: "<i class='glyphicon glyphicon-file'></i>",
    });

    $('#' + ctrlName).on("fileuploaded", function (event, data, previewId, index) {
        $('#fileInputModal').modal("hide");

        $('#editTextModal').modal('show');
    });

    $('#' + ctrlName).on('filepreajax', function (event, previewId, index) {

        debugger
    }); 
}
