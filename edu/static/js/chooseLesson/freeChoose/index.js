layui.extend({
    admin: '{/}../../static/js/admin'
});
layui.use(['form','table','jquery','admin'],function () {
    var form=layui.form,
        table=layui.table,
        $ = layui.jquery,
        admin=layui.admin;

    table.render({
        elem: '#lessonList',
        cellMinWidth: 80,
        cols: [[
                {type: 'checkbox'},
                {field: 'id',title: 'ID',sort: true},
                {field: 'title',title: '标题',templet: '#usernameTpl'},
                {field: 'date',title: '发布时间',sort: true},
                {field: 'category',title: '分类',sort: true},
                {field: 'sort',title: '排序',sort: true},
                {field: 'recommend',title: '推荐',templet: '#recommendTpl',unresize: true},
                {field: 'top',title: '置顶',templet: '#topTpl',unresize: true},
                {field: 'review',title: '审核',templet: '#reviewTpl',unresize: true},
                {field: 'operate',title: '操作',toolbar: '#operateTpl',unresize: true}
                ]],
        data: [{
            "id": "1",
            "title": "WeAdmin的第一个版本在不断地抽空完善学习中",
            "date": "2018-02-03",
            "category": "官方动态",
            "sort": "1",
            "recommend": "checked",
            "top": "checked"
        }, {
            "id": "2",
            "title": "WeAdmin的测试数据一二三四五六七",
            "date": "2018-02-03",
            "category": "新闻资讯",
            "sort": "1",
            "recommend": "",
            "top": "checked"
        }],
        event: true,
        page: true
    });
    /*
     *数据表格中form表单元素是动态插入,所以需要更新渲染下
     * http://www.layui.com/doc/modules/form.html#render
     * */
    $(function(){
        form.render();
    });


})
