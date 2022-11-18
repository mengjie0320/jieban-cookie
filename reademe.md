开发获取cookie步骤自动化；

chrome_extension简单介绍：
```
module.exports = {
  "name": "Hello Extensions",
  "description": "Base Level Extension",
  "version": "1.0",
  "manifest_version": 3,
  "action": { // 行为
    "default_popup": "hello.html",
    "default_icon": "hello_extensions.png"
  },
  "permissions": [ // tabs允许使用chrome.tabs和chrome.windows的api，后面则是匹配模式，指可以和该模式的网站运行的代码进行交互。
    "tabs", "http:///","https:///"
  ],
  "content_scripts": [ // web頁面要運行的腳本
    {
      "matches": ["http://login.cuit.edu.cn/Login/xLogin/Login.asp"], // 匹配的页面
      "js": ["loginQq.js"]
    }
  ]
}
```