import "./App.scss";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import Main from "./components/Main";
import { FaAws } from "react-icons/fa";

Amplify.configure(awsconfig);

function App() {
  // 畫面
  return (
    <div className="App">
      <div className="header">
        <h2>
          {" "}
          Music Platform by Amplify &nbsp;{" "}
          <FaAws
            className="bounce"
            style={{
              fontSize: "30px",
              position: "absolute",
              top: "2.8%",
            }}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Educate
        </h2>
      </div>
      <Main />
      {/* <div className="footer">
        <p>
          AWS Educate Workshop | 2023.11.03 |{" "}
          <a href="https://awseducate.tw/1">Register AWS Educate</a>{" "}
        </p>
      </div> */}
    </div>
  );
}

export default App;
