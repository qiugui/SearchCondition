/*zTree的生成和操作逻辑
 *
 *
 */

var zTreeObj;

var setting = {
    callback: {
        onClick: showFile
    },
    data: {
        simpleData: {
            enable: true,
            idKey: 'id',
            pIdKey: 'pId',
            rootPId: null
        }
    }
};

var zNodes;

//获取文件区域树数据，并初始化树形菜单且默认点击第一级子菜单
$.ajax({
    url: 'getFileArea.json',
    type: 'get',
    dataType: 'json',
    success: function (data) {
        zNodes = data.array;
        zTreeObj = $.fn.zTree.init($('#fileAreaTree'), setting, zNodes);
        var node = zTreeObj.getNodeByParam('id', '1');
        zTreeObj.selectNode(node);
        zTreeObj.setting.callback.onClick(null, zTreeObj.setting.treeId, node);
    }
})

//绑定菜单点击事件，在文件列表区域显示文件
function showFile(e, treeId, treeNode) {
    if (treeNode.isParent) {
        if (treeNode.open === true) {
            zTreeObj.selectNode(treeNode.children[0]);
        }
        else {
            zTreeObj.expandNode(treeNode);
            zTreeObj.selectNode(treeNode.children[0]);
        }
        zTreeObj.setting.callback.onClick(null, zTreeObj.setting.treeId, treeNode.children[0]);
        return;
    }

    //mock获取文件列表数据，并使用Vue进行界面渲染
    $.ajax({
        url: 'getFile.json',
        dataType: 'json',
        type: 'post',
        data: {
            filenum: 7
        }
    }).done(function (data, status, jqXHR) {
        var fileInfos = data.array;
        ve_fileList.files = fileInfos;
    })

}
