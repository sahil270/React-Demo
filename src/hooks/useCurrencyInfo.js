import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
  useEffect(() => {
    fetch(url)
      .catch((res) => console.error(res))
      .then((response) => response.json())
      .then((res) => setData(res[currency]));
    console.table(data);
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
