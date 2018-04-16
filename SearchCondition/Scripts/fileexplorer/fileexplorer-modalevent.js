/*项目模态框相关事件
 *
 *
 */

/**
 * 模拟新增数据的id
 */
var temp_labelId = 9;

//在模态框show被立即调用的时候触发
$('#editTextModal').on('show.bs.modal', function (e) {
    initLabeledResult();
})

//初始化该文本的标签结果
function initLabeledResult() {
    $.ajax({
        url: 'getLabeledResult.json',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            ve_labeledResult.autoLableData = data.object.autoLableData;
            ve_labeledResult.manualLabelData = data.object.manualLabelData;
        }
    })
}

//在模态框show被立即调用的时候触发
$('#labelTextModal').on('show.bs.modal', function (e) {
    $(this).draggable({
        cursor: 'move',
        handle: '.modal-header'
    });

    //给文本标记的功能模态框居中
    var $modal_dialog = $(this.children[0])
    if ($modal_dialog.hasClass('verticle-align')) {
        var m_top = ($(window).height() - $modal_dialog.height()) / 3
        $modal_dialog.css({ 'top': m_top + 'px' })
    }
})


//在模态框被隐藏之后触发
$('#labelTextModal').on('hidden.bs.modal', function (e) {
    $(this).removeAttr('style');
    //清除view的数据
    ve_labelTextArea.labelAreaType = 0;
    ve_labelTextArea.labelAreaTitle = 'Modal title';
    ve_labelTextArea.tagValueIsHidden = true;
    ve_labelTextArea.labelData.labelInfo = [];
    ve_labelTextArea.labelData.labelValue = '';
})

function saveTagResult() {
    if (ve_labelTextArea.labelAreaType === 0) {
        var tagTypeId = $('#tagType_select').val();
        var tagValue = ve_labelTextArea.labelData.labelValue;

        var tagType;
        $.each(ve_labelTextArea.labelData.labelInfo, function (i, v) {
            if (v.id == tagTypeId) tagType = v;
        })

        temp_labelId += 1
        ve_labeledResult.autoLableData.push({ 'key': tagType.tagName, 'value': tagValue, 'id': temp_labelId });

    } else if (ve_labelTextArea.labelAreaType === 1) {
        var tagTypeId = $('#tagType_select').val();
        var tagValueId = $('#tagValue_select').val();

        var tagType, tagValue;
        $.each(ve_labelTextArea.labelData.labelInfo, function (i, v) {
            if (v.id == tagTypeId) {
                tagType = v;
                $.each(tagType.tags, function (j, w) {
                    if (w.id == tagValueId)
                        tagValue = w;
                })
            }
        })

        temp_labelId += 1;
        ve_labeledResult.manualLabelData.push({ 'key': tagType.tagtypename, 'value': tagValue.tagName, 'id': temp_labelId });
    }
    
    var $modal = $('#labelTextModal');
    $modal.modal('hide');
}

//在模态框show被立即调用的时候触发
$('#fileInputModal').on('show.bs.modal', function (e) {
    $('#fileInput-div').html('<input type="file" id="file-Portrait" class="file" />');
    initFileInput("file-Portrait");
})
