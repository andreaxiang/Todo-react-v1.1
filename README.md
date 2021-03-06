## TodoList 当前版本号v1.0

[预览地址](https://andreaxiang.github.io/react-temp/build/index.html)

## 主要功能点：

#### 1. 输入框输入待办事项，输入完成后按Enter键提交(回车)
#### 2. 勾选已存在的事项即表示该事项已完成
#### 3. 点击删除button即可删除已存在的事项
#### 4. 本地存储数据，在本地不清楚浏览器缓存的情况下，关闭或刷新浏览器依然保存数据

## 用到的技术：

#### 1. HTML/CSS/JavaScript基础
#### 2. 使用create-react-app搭建应用，利用React对页面进行数据加载、局部刷新等
#### 3. 使用localStorage在本地存储数据
        思路
          每次用户更新数据时，就将所有 todo 以字符串的形式保存在 localStorage 里
          每次用户访问页面是，将 localStorage 里面的字符串变为对象，赋值给 todoList
          

## 版本迭代：
### v1.1 [预览地址](https://andreaxiang.github.io/Todo-react-v1.1/build/index.html)
#### 1. 增加用户登录/注册功能(支持email邮箱验证)
#### 2. 支持退出当前账号
#### 3. 数据库保存数据，实现同一用户在不同终端的账号管理操作

### v2.0
#### 1. 增加对事件列表的操作，例如： 支持事项再编辑、重新排序，增加日期提醒等功能
#### 2. UI界面优化
