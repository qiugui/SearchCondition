/*项目模态框相关事件
 *
 *
 */

$('#labelTextModal').on('show.bs.modal', function (e) {
    $(this).draggable({
        cursor: 'move',
        handle: '.modal-header'
    });
    //var $modal_dialog = $(this.children[0])
    //if ($modal_dialog.hasClass('verticle-align')) {
    //    var m_top = ($(window).height() - $modal_dialog.height()) / 3
    //    $modal_dialog.css({ 'top': m_top + 'px' })
    //}
})

$('#labelTextModal').on('hidden.bs.modal', function (e) {
    $(this).removeAttr('style');
})
