## 说明
1，yarn 安装依赖，yarn run dev运行开发环境，具体查看package.json。  
1，路由写在 src/router/index.ts 文件夹下，路由必须配置name、meta、path，其中meate的title为路由的中文名称，路由跳转使用的是name。      
2，使用postcss来将px转换为vw，并且设置基准值为375，因为所使用的ui组件库vant是以375为基准，在375px的设计图可以1:1进行转换。    
3，支持jsx和tsx写法。   
4，可在vite.config.ts中设置代理。  