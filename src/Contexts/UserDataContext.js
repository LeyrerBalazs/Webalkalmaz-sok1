import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const UserDataContext = createContext();

export const UserDataContextProveder = ({ children }) => {
    /*
        Ez az egyedi Context Providerem
    */

    // Reducer létrehozás
    const myReducer = (state, action) => {
        switch (action.type) {
            case "huf-plus":
                return {...state, huf: state.huf + action.payload.value * action.payload.amount};
            case "eur-plus":
                return {...state, eur: state.eur + action.payload.value * action.payload.amount};
            case "usd-plus":
                return {...state, usd: state.usd + action.payload.value * action.payload.amount};
            case "gbp-plus":
                return {...state, gbp: state.gbp + action.payload.value * action.payload.amount};
            case "huf-minus":
                return {...state, huf: state.huf - action.payload.amount};
            case "eur-minus":
                return {...state, eur: state.eur - action.payload.amount};
            case "usd-minus":
                return {...state, huf: state.usd - action.payload.amount};
            case "gbp-minus":
                return {...state, huf: state.huf - action.payload.amount};
        }
    }
    
    // Hookok
    const [currency, setCurrency] = useState("huf");
    const [target_currency, setTarget_currency] = useState("eur");
    const [value, setValue] = useState(0);
    const [amount, setAmount] = useState(0);

    // Konstants kép változó
    const imgurls = {
        huf: "https://thumbs.dreamstime.com/b/hungarian-forint-coin-icon-currency-hungary-vector-199935386.jpg",
        eur: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Euro-EUR-icon.png",
        usd: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Dollar-USD-icon.png",
        gbp: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Pound-GBP-icon.png"
    };

    useEffect(() => {
        /* API hívás árfolyam változás esetén */
        const setTargetValues = async () => {
            const resp = await axios.get("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/" + currency +".json")
            setValue(resp.data[currency][target_currency]);
        }
        setTargetValues()
    }, [currency, target_currency]);
    
    const datas = { currency, setCurrency, target_currency, setTarget_currency, value, setValue, imgurls, amount, setAmount, myReducer }

    return (
        <UserDataContext.Provider value={datas}>
            { children }
        </UserDataContext.Provider>
    );
}

export const useUserDataContext = what => {
    /*
        Mivel felesleges minden komponoesben minden Context elemet behúzni, ezért írtam egy saját useContextet
    */
    const context = useContext(UserDataContext);
    return context;
}
