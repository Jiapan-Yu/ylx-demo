# 微信重构版

### 下载
> git clone https://gitlab.com/qq444716720/ylx-wx-beta.git


### 安装node_modules全部依赖
> yarn

### 运行
> yarn start

### 打包编译
> yarn build

### 目录结构
```
.
├── build                         # 生成的打包文件
├── config                        # 配置
│     ├── webpack.config.dev.js   # 开发环境
│     └──webpack.config.prod.js   # 正式环境
├── node_modules   
├── public                        # 共有静态文件
├── scripts 
│     ├── build.js                # 打包脚本
│     └──start.js                 # 运行脚本
├── src   
│     ├── api 
│     │     ├── contacts.js       # 联系人api
│     │     ├── flight.js         # 国内机票api
│     │     ├── hotel.js          # 国内酒店api
│     │     ├── member.js         # 会员、登录等api  
│     │     └──train.js           # 火车票api
│     ├── common                  # 公共包
│     ├── components              # 组件包
│     ├── iconfont                # 字体图标
│     ├── images                  # 图片资源
│     ├── pages                   # 页面
│     ├── stores                  # 状态管理
│     ├── utils                   # 工具包
│     │     ├── color.less        # 颜色管理
│     │     ├── Global.js         # 全局对象管理
│     │     ├── Interceptors.js   # 请求拦截 + 路由配置
│     │     ├── Token.js          # token
│     │     └── tools.js          # 工具类
│     ├── index.js                # 入口文件
│     ├── index.less              # 全局样式
│     └── router.js         
├── .eslintrc.js
├── .gitignore
├── package-lock.json
├── package.json                  # 依赖包
├── LICENSE
├── README.md
└── yarn.lock
```