import { useEffect } from "react";
import { useScript } from "./hooks";
import Scripts from "./Scripts";
import "./App.css";

function App() {
  const status = useScript("https://nsp.pay.naver.com/sdk/js/naverpay.min.js");
  let oPay = null;

  const onClick = () => {
    oPay.open({
      merchantUserKey: "tet",
      merchantPayKey: "test",
      productName: "상품명을 입력하세요",
      totalPayAmount: "1000",
      taxScopeAmount: "1000",
      taxExScopeAmount: "0",
      returnUrl: "https://saltmine.kr",
    });
  };

  useEffect(() => {
    if (status === "ready") {
      console.log("window.Naver: ", window.Naver);
      oPay = window.Naver.Pay.create({
        mode: "production", // development or production
        clientId: "u86j4ripEt8LRfPGzQ8", // clientId
      });
    }
  }, [status]);

  return (
    <div className="App">
      <Scripts />

      <header className="App-header">
        <button style={{ width: 150, height: 50 }} onClick={onClick}>
          네이버 페이
        </button>
      </header>
    </div>
  );
}

export default App;
