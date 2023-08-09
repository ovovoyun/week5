# week5 主線任務 後台表單

### 相關連結
[XD連結](https://xd.adobe.com/view/456141fc-d0a0-44d4-93ad-6ab54a4b5351-1032/grid/)
[圖片連結](https://github.com/hexschool/2022-web-layout-training/tree/main/week5)

### 套件
[bootstrap](https://bootstrap5.hexschool.com/)
[jQuery datepicker](https://jqueryui.com/datepicker/)
+ icon
   + [Google Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons)
   + [bootstrap icon](https://icons.getbootstrap.com/)
+ Google font
   + [Lato](https://fonts.google.com/specimen/Lato)
   + [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)

### 安裝
+ `npm i vite`
+ `npm i vite-plugin-ejs`
+ `npm i glob`
+ `npm i vite-plugin-live-reload` 檔案儲存，網頁自動重新整理(vite.config.js)
+ `npm install datatables.net datatables.net-bs5` dataTable
+ `npm i ckeditor4`

### 指令
+ `npm i` [初次 clone 專案](https://github.com/hexschool/web-layout-training-vite)需執行，產生 node_modules
+ `npm run dev` 監聽(開啟瀏覽器)，不須使用 Watch Sass 功能

### 遠端部屬
1. 建立 github repo

2. 修改 vite.config.js 檔中的 defineConfig 裡的
   base: '/GitHub Repository 名稱/'

3. git 指令
```cmd
git init 初次設定
git add .
git commit -m "msg"
git remote {copy github URL} 初次設定
git push origin master
```

4. `npm run deploy` 編譯 dist 檔(`npm run build`)並部屬到 github gh-pages 分支