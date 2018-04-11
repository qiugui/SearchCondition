/*首页用到的一些通用js代码
 *
 *1.界面分隔线的拖动
 */

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
