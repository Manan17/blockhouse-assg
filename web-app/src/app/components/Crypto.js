import { useContext, useMemo } from "react";
import { CryptoContext } from "../page";
import Loader from "./Loader";
import Coin from "./Coin";
import Image from "next/image";
import symbol from "../../../public/symbol.png";
export default function Crypto() {
  let { cryptoData, search, setSearch, getData } = useContext(CryptoContext);
  const filteredData = useMemo(() => {
    return cryptoData?.filter((curr) =>
      curr?.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [cryptoData, search]);
  return (
    <div className="flex gap-4 flex-col items-center justify-center h-screen w-full">
      <Image src={symbol} width={100} height={100} alt="Crypto Image" />
      <h1 className="text-3xl font-bold font-serif">Crypto Tracker</h1>
      <p>Track your favorite cryptocurrencies</p>
      <div className="flex gap-4 sm:flex-row flex-col">
        <input
          placeholder="Enter crypto name..."
          className="bg-white p-3 text-black sm:min-w-sm"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => getData()}
          className="bg-teal-900 cursor-pointer rounded-xl py-3 px-4"
        >
          Refresh
        </button>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {cryptoData.length === 0 ? (
          <Loader />
        ) : (
          filteredData.map((curr) => <Coin curr={curr} key={curr?.id} />)
        )}
      </div>
    </div>
  );
}
