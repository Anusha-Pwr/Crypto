import React from "react";
import "./CoinChart.css";

function SelectButton(props) {
    return (
        <button onClick={props.onSelected} className={`${props.selected && "fancyButton"}`}>{props.val}</button>
    );
}

export default SelectButton;