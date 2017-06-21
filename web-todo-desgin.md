# web-todo

```
一、请开发一个 Todo Web 应用
必选项：
1. 选择 React / Vue / Angular 框架之一进行辅助开发
2. 选择一种熟悉的状态和数据流管理方案进行数据管理（如，redux / mobx / dva / vuex / rx.js 等）
加分项：
- 结合 travis 和 github pages 实现 master 分支的持续集成及持续部署
- 具备丰富的交互细节及过渡动画

二、请结合 Koa 和 v2ex api 实现基本的列表页及详情页
必选项：列表页及详情页
加分项：增加合适的缓存策略减少资源消耗

附：API 参考地址 https://www.v2ex.com/p/7v9TEc53
```
+ Angular + Angular-Material + NgRx
    - add todo
        - todo id
        - todo content
        - todo time
        - todo title
    - complete todo
    - delete todo
    - update todo
    - notice todo

+ pages
    + add todo/ todo lists
    
            - container
            - input
            - button
            - a todo
            - todo lists
            - curd button
    + completed todo
            
            - container
            - completed todo list
            - delete button
    
        + todo details
        

- Todo content
```
1.title             标题        
2.content time      内容 todo时间
3.completed         是否完成checkbox
4.updateTodo()      修改(icon) toast提示
5.deleteTodo()      删除(icon) dialog弹出
```