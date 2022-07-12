# 模仿简书的写作交流网址

## 项目简介

基于现有的一些最佳实践方案参考简书开发的项目。主要是作为react框架的一个实践，项目虽然不难，但是收获颇多。

![image-20220712123205072](.\images\image-20220712123205072.png)

## 技术栈

框架：react。

最佳实践：react-router4、redux、redux中间件、immutable.js、styled-components、antd、react-transition-group。

## 功能实现

**已实现的功能：**

1. 公用Header组件
2. 首页组件拆分

2. 首页加载更多及返回顶部功能
3. 详情页面开发
4. 登录权限校验开发
5. 登录列表页面开发
6. 搜索功能实现逻辑

**待实现功能：**

1. 个人文字列表
2. 文字编辑页面
3. 文字数据统计
4. 待定...

## 项目收获

项目虽然简单，但是收获的知识不少。巩固了React基础语法（状态、事件、组件、属性），对React架构有了更深刻的理解诸如虚拟Dom原理、生命周期函数、react中过渡和动画的实现、容器组件和无状态组件的设计、利用Styled-components封装自己的组件、redux中间件原理。

## 项目运行

1.将项目clone下来

```shell
$ git clone https://github.com/luozhiqiang-code/jianshu.git
$ cd jianshu
$ npm install
```

2.运行

```
$ npm start
```

现在就在本地的3000端口访问了。如果要打包到线上，执行`npm run build`即可。


