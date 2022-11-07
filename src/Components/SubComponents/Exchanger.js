import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useUserDataContext } from '../../Contexts/UserDataContext';
import "./Styles/Exchanger.css";

const Exchanger = props => {
    /*
        Ez jeleníti meg az aktuális árfolyamokat és végzi el a vásárlási műveletet
    */
    const [price1, setPrice1] = useState(0);
    const [price2, setPrice2] = useState(0);
    const [price3, setPrice3] = useState(0);
    const [minus, setMinus] = useState(0);
    const [plus, setPlus] = useState(0);
    const { huf, setHuf, eur, setEur, usd, setUsd, gbp, setGbp, imgurls } = useUserDataContext()
    const ExchangeMethod = (what, name) => {
        switch (name) {
            case "huf":
                setHuf(huf + plus)
                switch (what) {
                    case "eur":
                        setEur(eur - minus);
                        break;
                    case "usd":
                        setUsd(usd - minus);
                        break;
                    case "gbp":
                        setGbp(gbp - minus);
                        break;
                }
                break;
            case "eur":
                setEur(eur + plus)
                switch (what) {
                    case "huf":
                        setHuf(huf - minus);
                        break;
                    case "usd":
                        setUsd(usd - minus);
                        break;
                    case "gbp":
                        setGbp(gbp - minus);
                        break;
                }
                break;
            case "usd":
                setUsd(usd + plus)
                switch (what) {
                    case "eur":
                        setEur(eur - minus);
                        break;
                    case "huf":
                        setHuf(huf - minus);
                        break;
                    case "gbp":
                        setGbp(gbp - minus);
                        break;
                }
                break;
            case "gbp":
                setGbp(gbp + plus)
                switch (what) {
                    case "eur":
                        setEur(eur - minus);
                        break;
                    case "usd":
                        setUsd(usd - minus);
                        break;
                    case "huf":
                        setHuf(huf - minus);
                        break;
                }
                break;
        }
        ResetValues();
    }
    const WriteActual = (what, name) => {
        axios("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/"+ name +".json")
        .then(response => {
            setPrice1(response.data[name][what[0]])
            setPrice2(response.data[name][what[1]])
            setPrice3(response.data[name][what[2]])
        })
        return (
            <div className="ExchangerClass">
            <div className="first">
                <img className="firstimg" src={imgurls[name]} />
                <span className="value">Ennyit fogsz kapni:{Number((plus).toFixed(2))}</span>
            </div>
            <div className="sub">
                <img src={imgurls[what[0]]} />
                <span className="value">Árfolyam: {price1}</span>
                <input type="text" id="1" onChange={event => {
                    document.getElementById("2").value="";
                    document.getElementById("3").value="";
                    setPlus(event.target.value / price1)
                    setMinus(event.target.value)
                }} />
                <button onClick={() => ExchangeMethod(what[0], name)}>{name}-t vesz</button>
            </div>
            <div className="sub">
                <img src={imgurls[what[1]]} />
                <span className="value">Árfolyam: {price2}</span>
                <input type="text" id="2" onChange={event => {
                    document.getElementById("1").value="";
                    document.getElementById("3").value="";
                    setPlus(event.target.value / price2)
                    setMinus(event.target.value)
                }} />
                <button onClick={() => ExchangeMethod(what[1], name)}>{name}-t vesz</button>
            </div>
            <div className="sub">
                <img src={imgurls[what[2]]} />
                <span className="value">Árfolyam: {price3}</span>
                <input type="text" id="3" onChange={event => {
                    document.getElementById("1").value="";
                    document.getElementById("2").value="";
                    setPlus(event.target.value / price3)
                    setMinus(event.target.value)
                }} />
                <button onClick={() => ExchangeMethod(what[2], name)}>{name}-t vesz</button>
            </div>
        </div>
        )
    }
    const ResetValues = () => {
        document.getElementById("1").value="";
        document.getElementById("2").value="";
        document.getElementById("3").value="";
        setPlus(0);
        setMinus(0);
    }
    if (props.id == 0) {
        return WriteActual(["eur", "usd", "gbp"], "huf")
    }
    else if (props.id == 1) {
        return WriteActual(["huf", "usd", "gbp"], "eur")
    }
    else if (props.id == 2) {
        return WriteActual(["eur", "huf", "gbp"], "usd")
    }
    else if (props.id == 3) {
        return WriteActual(["eur", "usd", "huf"], "gbp")
    }
}

export default Exchanger