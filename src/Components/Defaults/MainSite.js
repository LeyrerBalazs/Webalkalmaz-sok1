import React, { useReducer, useEffect, useState }  from "react";
import { useUserDataContext } from "./../../Contexts/UserDataContext";
import { saveName } from "../../LocalStorage/MyLocalStorage";
import "./../Styles/default.css";
import "./Styles/MainSite.css"
import { Link } from "react-router-dom";

const MainSite = () => {
    /*
        A web app main része...
    */
   // Context behúzás
    const { currency, setCurrency, target_currency, setTarget_currency, value, imgurls, amount, setAmount, myReducer } = useUserDataContext();

    // Reducer behúzűs
    const [state, dispatch] = useReducer(myReducer, {huf: 100000, eur: 100, usd: 100, gbp: 100})

    // Hookok
    const [value2, setValue2] = useState(0)
    const [name, setName] = useState(localStorage.getItem("name"))
    const [newname, setNewName] = useState("")

    useEffect(() => {
    /*
        Ez a függvény nem engedi a nagyobb értékek bevitelét
    */
      if (value2 > state[currency]) {
        setValue2(state[currency])
        setAmount(state[currency])
      }
      else if (value2 < 0) {
        setValue2(state[currency])
        setAmount(state[currency])
      }
    }, [value2])
    
    useEffect(() => {
    /* 
        Név érték vizsgálat loaclStorage-ből
    */
        if (name == undefined || name == "")
        {
            setName("unknow")
        }
    }, [])

    // Megjelenítés
    return (
        <>
            <div className="container2">
                <span><Link to="/">Trader</Link></span>
                <span className='Link'><Link to="/Wood">Wood Joke</Link></span>
            </div>
            <div className="container" style={{marginTop: 100}}>
                <span style={{ marginLeft: 50 }}>Name:</span>
                <span>{name}</span>
                <span><input type="text" onChange={event => setNewName(event.target.value)}/></span>
                <span><input type="button" value="mentés" onClick={() => { saveName(newname); setName(newname) } }/></span>
            </div>
            <div className="container">
                <span className="number">
                    {state[currency]}
                    <img src={imgurls[currency]} />
                </span>
                <span className="number">
                    {state[target_currency]}
                    <img src={imgurls[target_currency]} />
                </span>
            </div>
            <div className="container">
                <span>
                    <input type="number" value={value2} onChange={ event => {setAmount(event.target.value); setValue2(event.target.value)} } max={state[currency]} />
                    <select value={currency} onChange={event => { setCurrency(event.target.value) }}>
                        <option value="huf">huf</option>
                        <option value="eur">eur</option>
                        <option value="usd">usd</option>
                        <option value="gbp">gbp</option>
                    </select>
                    <input type="number" disabled value={ amount * value } />
                    <select value={target_currency} onChange={event => { setTarget_currency(event.target.value) }}>
                        <option value="huf">huf</option>
                        <option value="eur">eur</option>
                        <option value="usd">usd</option>
                        <option value="gbp">gbp</option>
                    </select>
                </span>
            </div>
            <div className="container">
                <input type="button" value="Vesz" onClick={() => {
                    dispatch({type:currency + "-minus", payload: { amount: amount, value: value }})
                    dispatch({type:target_currency + "-plus", payload: {  amount: amount, value: value }})
                }} style={{ width: 200, marginLeft: 100 }} />
            </div>
        </>
    );
}

export default MainSite;