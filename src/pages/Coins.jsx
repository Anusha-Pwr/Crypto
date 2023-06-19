import React, { useState, useEffect } from "react";
import Axios from "axios";
import CoinItem from "../components/CoinItem";
import "../components/Coins.css";
import { Link } from "react-router-dom";
import Coin from "./Coin";
import RefreshImg from "../Images/RefreshImg.png"

function Coins() {
    const [coins, setCoins] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        refreshPage();
    }, []);



    function handleSearch(e) {
        setSearchTerm(e.target.value);
    }

    const refreshPage = () => {
        // setIsLoading(true);
        Axios.get(
            
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        ).then((response) => {
            console.log(response.data);
            //   setIsLoading(false);
            setCoins(response.data);
        });
    };


    const filterCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <div className="buttonContainer">
                <input
                    placeholder="Search for a Coin"
                    type="text"
                    onChange={handleSearch}
                />
                <img onClick={refreshPage} src={RefreshImg}></img>
            </div>

            <div>
                <div className="heading">
                    <p>#</p>
                    <p className="coin-name">Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className="hide-mobile">Volume</p>
                    <p className="hide-mobile">Market Cap</p>
                </div>


                {/* {props.coins.map(coin => {
                    return (<Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
                        <CoinItem coin={coin} />
                    </Link>);
                })} */}

                {filterCoins.map(coin => {
                    return (<Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
                        <CoinItem coin={coin} />
                    </Link>);
                })}

            </div>
        </div>
    );
}

export default Coins;
// {`/coin/${coins.id}`}