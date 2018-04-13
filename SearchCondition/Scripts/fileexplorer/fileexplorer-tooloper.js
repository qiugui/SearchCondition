/*界面工具栏按钮操作
 * 
 */

//增加主题标签按钮事件
function addSubjectLabel(e) {
    ve_labelTextArea.labelAreaType = 1;
    ve_labelTextArea.labelAreaTitle = "选择主题标签";

    var $modal = $('#labelTextModal');
    $modal.modal('show');

}