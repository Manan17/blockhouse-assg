"use client";
import { useEffect, useState, createContext } from "react";
import Crypto from "./components/Crypto";
import { fetchData } from "./api/cryptoapi";
export const CryptoContext = createContext();
export default function Home() {
  const [cryptoData, setCryptoData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setCryptoData([]);
    const data = await fetchData();
    if (data?.status === false) {
      console.log("Error: ", data.error);
      return;
    }
    setCryptoData(data);
  };
  return (
    <CryptoContext.Provider
      value={{ cryptoData, setCryptoData, search, setSearch, getData }}
    >
      <Crypto />
    </CryptoContext.Provider>
  );
}
