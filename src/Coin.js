import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  marketcap,
  priceChange,
}) => {
  return (
    // <div className="coin-container">
    //   <div className="coin-row">
    //     <div className="coin">
    //       <img src={image} alt="crypto"></img>
    //       <h1>{name}</h1>
    //       <p className="coin-symbol">{symbol}</p>
    //     </div>
    //     <div className="coin-data">
    //       <p className="coin-price">€{price}</p>
    //       <p className="coin-volume">€{volume.toLocaleString()}</p>
    //       {priceChange < 0 ? (
    //         <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
    //       ) : (
    //         <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
    //       )}
    //       <p className="coin-marketcap">€{marketcap.toLocaleString()}</p>
    //     </div>
    //   </div>
    // </div>

    <tbody>
      <tr>
        <th className="coin py-4">
          <img src={image} alt="crypto"></img>
        </th>
        <th className="py-4">
          <div>{name}</div>
        </th>
        <td className="py-4">
          <div className="coin-symbol">{symbol}</div>
        </td>
        <td className="py-4">€{price}</td>
        <td className="py-4">€{volume.toLocaleString()}</td>
        {priceChange < 0 ? (
          <td className="py-4">
            <div className="coin-percent red">{priceChange.toFixed(2)}%</div>
          </td>
        ) : (
          <td className="py-4">
            <div className="coin-percent green">{priceChange.toFixed(2)}%</div>
          </td>
        )}
        <td className="py-4">€{marketcap.toLocaleString()}</td>
      </tr>
    </tbody>
  );
};

export default Coin;
