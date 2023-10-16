## 工作坊成品
1. FrontEnd - React
2. Serverless BackEnd - Amplify SDK 連接 GraphQL API, DynamoDB 及 Storage(S3)
3. GraphQL API 串接前後端資料
4. 從Localhost 到 AWS Amplify Deploy & Hosting

## 環境需求
- [Node.js](https://nodejs.org/) v14.x or later
    - `node -v` 有出現版本即可
- [npm](https://www.npmjs.com/) v6.14.4 or later
  - `npm -v` 有出現版本即可
- [git](https://git-scm.com/) v2.14.1 or later
  - `git --version` 有出現版本即可


### 安裝npm, node.js
- MacOS, Linux
    1.  下載安裝NVM
    ```shell=
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
    ```

    > 如果在下載跟安裝NVM過程中出現`curl: command not found`，代表你的系統没有安裝 curl 工具，所以請輸入下面：<b style="color: orange">註：這段是有Error的人才做</b>
    ```shell=
    sudo apt update
    sudo apt upgrade
    sudo apt install curl
    ```
    > 接著再回到第一步，繼續執行安裝NVM

    2. 若成功，为了確保 NVM 的正常使用，你需要添加以下内容(下面三句) 到你的 Shell 配置文件（通常是 ~/.bashrc、~/.zshrc 或其他配置文件）：
    ![](https://hackmd.io/_uploads/HyB4NiFbp.png)
    3. 確認NVM已經安裝 `nvm --version`
    4. 安裝最新的LTS版本 `nvm install --lts`
    5. 確認 `node -v` 、 `npm -v`

- Windows: https://phoenixnap.com/kb/install-node-js-npm-on-windows

### 安裝Git，或是直接從Github下載zip檔案
- Linux, EC2: `sudo yum install git`
- MacOS
    - 如果你尚未安裝 Homebrew，可以使用以下命令安装： 
    `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"` 
    ![](https://hackmd.io/_uploads/B1DDIjK-a.png)<p style="color: red; font-size: large"> 輸入他在Next Step提示的那兩行</p>
    
    - 如果你已经安裝 Homebrew，可以使用以下命令安装 Git：`brew install git`
- Windows：請直接照著[Git for Windows](https://gitforwindows.org/)指導安裝

## 工作坊開始

### 建立前端

#### 將前端架構下載到電腦中
```shell=
git clone 
```
接著下載前端會需要用到的套件
> 套件就是「別人寫好的工具」，這個專案中下載的套件包含 Amplify 官方提供的可以使用 javascript 來操作 amplify 的工具

確認自己有在資料夾下，若沒有則輸入`cd amplify-demo`
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
