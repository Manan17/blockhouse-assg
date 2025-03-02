export default function Coin({ curr }) {
  return (
    <div
      className="flex gap-2 bg-white p-3 rounded-xl text-black w-[300px] justify-between"
      key={curr?.id}
    >
      <p>{curr?.name}</p>
      <p>${parseFloat(curr?.priceUsd).toFixed(2)}</p>
    </div>
  );
}
