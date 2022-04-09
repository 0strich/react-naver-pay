import React from "react";
import { Helmet } from "react-helmet-async";

export default function Scripts() {
  return (
    <Helmet>
      <script src="https://nsp.pay.naver.com/sdk/js/naverpay.min.js"></script>
    </Helmet>
  );
}
