/*界面工具栏按钮操作
 * 
 */

//增加主题标签按钮事件
function addSubjectLabel() {
    ve_labelTextArea.labelAreaType = 1;
    ve_labelTextArea.labelAreaTitle = "选择主题标签";
    ve_labelTextArea.tagValueIsHidden = false;

    //标签分类变化时初始化该分类下标签
    $('#tagType_select').on('changed.bs.select', function (event, clickedIndex, newValue, oldValue) {
        if (ve_labelTextArea.labelAreaType === 1) {
            var selectedTagType = ve_labelTextArea.labelData.labelInfo[clickedIndex];
            var subTags = selectedTagType.tags;
            var subTag_str = ''
            $.each(subTags, function (index, value) {
                var currentSubOpt = '<option value="' + value.id + '">' + value.tagName + '</option>';
                subTag_str += currentSubOpt;
            });
            $('#tagValue_select').html(subTag_str);
            $('#tagValue_select').selectpicker('refresh');
        }
    });

    //标签分类初次加载初始化该分类下标签
    $('#tagType_select').on('refreshed.bs.select', function (event) {
        if (ve_labelTextArea.labelAreaType === 1){
            var selectedTagType = ve_labelTextArea.labelData.labelInfo[0];
            var subTags = selectedTagType.tags;
            var subTag_str = ''
            $.each(subTags, function (index, value) {
                var currentSubOpt = '<option value="' + value.id + '">' + value.tagName + '</option>';
                subTag_str += currentSubOpt;
            });
            $('#tagValue_select').html(subTag_str);
            $('#tagValue_select').selectpicker('refresh');
        }
    });
    

    $.ajax({
        url: 'getSubjectTag.json',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            var allTagInfo = data.array;
            ve_labelTextArea.labelData.labelInfo = allTagInfo;

            var option_str = '';
            $.each(allTagInfo, function (index, value) {
                var currentOpt = '<option value="' + value.id + '">' + value.tagtypename + '</option>';
                option_str += currentOpt;
            });

            $('#tagType_select').html(option_str);
            $('#tagType_select').selectpicker('refresh');

            var $modal = $('#labelTextModal');
            $modal.modal('show');
        }
    })
}

//删除界面标签
function removeLabel(labelType) {
    if (labelType === 'auto') {
        ve_labeledResult.tool.autoremovehidden = false;
    }

    if (labelType === 'manual') {
        ve_labeledResult.tool.manualremovehidden = false;
    }
}

//取消界面标签的删除功能
function cancelRemove(labelType) {
    if (labelType === 'auto') {
        ve_labeledResult.tool.autoremovehidden = true;
        ve_labeledResult.removeAutoLabelIds = [];
    }

    if (labelType === 'manual') {
        ve_labeledResult.tool.manualremovehidden = true;
        ve_labeledResult.removeManualLabelIds = [];
    }
}

//确认删除选中的界面标签
function confirmRemove(labelType) {
    if (labelType === 'auto') {
        ve_labeledResult.tool.autoremovehidden = true;
        $.each(ve_labeledResult.removeAutoLabelIds, function (index, item) {
            $.each(ve_labeledResult.autoLableData, function (index_, item_) {
                if (item_.id == item) ve_labeledResult.autoLableData.splice(index_, 1)
            })
        })
        ve_labeledResult.removeAutoLabelIds = [];
    }

    if (labelType === 'manual') {
        ve_labeledResult.tool.manualremovehidden = true;
        $.each(ve_labeledResult.removeManualLabelIds, function (index, item) {
            $.each(ve_labeledResult.manualLabelData, function (index_, item_) {
                if (item_.id == item) ve_labeledResult.manualLabelData.splice(index_, 1)
            })
        })
        ve_labeledResult.removeManualLabelIds = [];
    }
}
