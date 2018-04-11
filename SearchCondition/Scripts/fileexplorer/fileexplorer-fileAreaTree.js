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

//定义前台展示文件列表绑定的Vue
var ve = new Vue({
    el: '#fileList',
    data: {
        files: null
    }
});

//获取文件区域树数据
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

    //mock获取文件数据
    $.ajax({
        url: 'getFile.json',
        dataType: 'json',
        type: 'post',
        data: {
            filenum: 7
        }
    }).done(function (data, status, jqXHR) {
        var fileInfos = data.array;
        ve.files = fileInfos;
    })

}
