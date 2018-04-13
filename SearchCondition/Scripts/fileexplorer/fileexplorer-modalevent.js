/*项目模态框相关事件
 *
 *
 */

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
    ve_labelTextArea.labelData.labelInfo = [];
    ve_labelTextArea.labelData.labelValue = '';
})


