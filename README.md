## 工作坊成品

1. FrontEnd - React
2. Serverless BackEnd - Amplify SDK 連接 GraphQL API, DynamoDB 及 Storage(S3)
3. GraphQL API 串接前後端資料
4. 從 Localhost 到 AWS Amplify Deploy & Hosting

## 環境需求

- [Node.js](https://nodejs.org/) v14.x or later
  - `node -v` 有出現版本即可
- [npm](https://www.npmjs.com/) v6.14.4 or later
  - `npm -v` 有出現版本即可
- [git](https://git-scm.com/) v2.14.1 or later
  - `git --version` 有出現版本即可

## 工作坊開始

### 建立前端

#### 將前端架構下載到電腦中

```shell=
git clone
```

接著下載前端會需要用到的套件

> 套件就是「別人寫好的工具」，這個專案中下載的套件包含 Amplify 官方提供的可以使用 javascript 來操作 amplify 的工具

```shell=
cd
```

確認自己有在資料夾下後，

```shell=
npm install
```

**如果出現 Error 的話**:

- Mac 可以用 `sudo npm install` 再試一次（會要求輸入你電腦的密碼）
- Windows 可以用系統管理員身份執行 PowerShell

他會下載約一分鐘，下載完成後，前端就準備完成了 🎉

接下來可以看一下目前的前端長什麼樣子

```shell=
npm start
```

> 這個指令就會在你的電腦上架一個 HTTP Server 讓你自己可以連上來，並且看到前端畫面
> 而 `npm start` 實際上執行的指令，就是我們之前在 `package.json` 中設定的

指令執行後 Terminal 會停在執行的畫面，然後將畫面切回瀏覽器，打開 http://localhost:3000 (React port )
就可以看到剛剛用好的前端畫面了！

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
