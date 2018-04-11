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
    })
    return fileData;
})

//使用Mock获取文件区域树数据
Mock.mock('getFileArea.json', function (options) {
    var fileData = Mock.mock({
        'array': [
            {
                name: 'test1', open: true, id: 1, children: [
                    { name: 'test1_1', id: 2, pId: 1 }, { name: 'test1_2', id: 3, pId: 1 }
                ]
            },
            {
                name: 'test2', open: true, id: 3, children: [
                    { name: 'test2_1', id: 4, pId: 3 }, { name: 'test2_2', id: 5, pId: 3 }
                ]
            }
        ]
    })
    return fileData;
})
