import React from "react";
import "./Coins.css";

function CoinItem(props) {
    return (
        <div id="coin-row">
            <p>{props.coin.market_cap_rank}</p>
            <div className="image-symbol">
                <img src={props.coin.image} alt="" />
                <p>{props.coin.symbol.toUpperCase()}</p>
            </div>
            <p>₹ {props.coin.current_price.toLocaleString()}</p>
            <p>{props.coin.price_change_percentage_24h}%</p>
            <p className="hide-mobile">₹ {props.coin.total_volume.toLocaleString()}</p>
            <p className="hide-mobile">₹ {props.coin.market_cap.toLocaleString()}</p>
        </div>
    );
}

export default CoinItem;