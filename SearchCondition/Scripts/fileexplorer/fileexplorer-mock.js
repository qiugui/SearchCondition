/*Mock所有的请求映射数据
 *
 *
 */

//使用Mock获取文件数据
Mock.mock('getFile.json', function (options) {
    var params = options.body;
    var fileNum = params.split('=')[1];
    var fileData = Mock.mock({
        'array|5-10': [
            {
                'filetype|1': ['docx', 'folder', 'txt', 'pdf'],
                'fileIndex|+1': 0,
                'fileName': function () {
                    if ('folder' === this.filetype) return '文件夹' + this.fileIndex
                    else if ('txt' === this.filetype) return '文本文档' + this.fileIndex + '.' + this.filetype
                    else return '文档' + this.fileIndex + '.' + this.filetype
                },
                'class': function () {
                    return 'x-' + this.filetype;
                }
            }
        ]
    });
    return fileData;
})

//使用Mock获取文件区域树数据
Mock.mock('getFileArea.json', function (options) {
    var fileAreaData = Mock.mock({
        'array': [
            {
                name: '私人区', open: true, id: 1, children: [
                    { name: '管理员私人区', id: 2, pId: 1 }, { name: '其他', id: 3, pId: 1 }
                ]
            },
            {
                name: '共享管理', open: true, id: 3, children: [
                    { name: '我的共享', id: 4, pId: 3 }, { name: '他人共享', id: 5, pId: 3 }
                ]
            }
        ]
    });
    return fileAreaData;
})

Mock.mock('getContentTag.json', function (options) {
    var contentTagData = Mock.mock({
        'array': [
            {
                'tagName': '内容涉及国家',
                'tagcategorycode': '0103',
                'tagtypecode': '',
                'id': 1
            },
            {
                'tagName': '内容涉及人员',
                'tagcategorycode': '0103',
                'tagtypecode': '',
                'id': 2
            },
            {
                'tagName': '内容涉及领域',
                'tagcategorycode': '0103',
                'tagtypecode': '',
                'id': 3
            }
        ]
    });
    return contentTagData;
})

Mock.mock('getSubjectTag.json', function (options) {
    var subjectTagData = Mock.mock({
        'array': [{
            'tagtypename': '涉华言论',
            'tagtypecode': '010301',
            'id': 1,
            'tagcategorycode': '0103',
            'tags': [{
                'tagName': '主权分裂',
                'tagcategorycode': '0103',
                'tagtypecode': '010301',
                'id':4
            }, {
                'tagName': '反动言论',
                'tagcategorycode': '0103',
                'tagtypecode': '010301',
                'id': 5
            }, {
                'tagName': '心战反宣',
                'tagcategorycode': '0103',
                'tagtypecode': '010301',
                'id': 6
            }]
        },
        {
            'tagtypename': '资讯领域',
            'tagtypecode': '010302',
            'id': 2,
            'tagcategorycode': '0103',
            'tags': [{
                'tagName': '政治',
                'tagcategorycode': '0103',
                'tagtypecode': '010302',
                'id': 7
            }, {
                'tagName': '经济',
                'tagcategorycode': '0103',
                'tagtypecode': '010302',
                'id': 8
            }, {
                'tagName': '文化',
                'tagcategorycode': '0103',
                'tagtypecode': '010302',
                'id': 9
            }]
        }]
    });
    return subjectTagData;
})

Mock.mock('getLabeledResult.json', function (options) {
    var labeledResult = Mock.mock({
        'object': {
            'autoLableData': [
                {
                    'key': '内容涉及国家',
                    'value': '中国',
                    'id': 1
                },
                {
                    'key': '内容涉及人员',
                    'value': '张三',
                    'id': 2
                }
            ],
            'manualLabelData': [
                {
                    'key': '资讯领域',
                    'value': '政治',
                    'id': 3
                }
            ]
        }
    });
    return labeledResult;
})

Mock.mock('/mock/fileinput', function (options) {
    var labeledResult = Mock.mock({});
    return labeledResult;
})
