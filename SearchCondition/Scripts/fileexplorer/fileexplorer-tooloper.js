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