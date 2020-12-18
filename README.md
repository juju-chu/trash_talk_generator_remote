# 幹話產生器

## 環境建置與需求 (prerequisites)
+ 開發環境：Visual Studio Code
+ 應用程式架構：Express
+ 模板引擎：Express-Handlebars

## 安裝與執行步驟 (installation and execution)
1. 打開 terminal 輸入指令：git clone https://github.com/juju-chu/trash_talk_generator_remote.git
2. 進入存放此專案的資料夾
3. 用 nvm 指令安裝 Node.js：nvm install <版號>
  - 只要執行 npm install，就會依 package.json 的清單來安裝套件，安裝後會自動建立 /node_modules 資料夾，把相依的套件統一歸類在這個資料夾裡。
4. 執行
  - npm run start → node app.js
  - npm run dev → nodemon app.js


## 功能

+ 在工程師、設計師、或創業家中選擇一個對象（三選一)
+ 按下【產生幹話】後，旁邊的 textbox 就會出現一句幹話
