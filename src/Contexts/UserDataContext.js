import React, { createContext, useContext, useState } from "react";

const UserDataContext = createContext();

export const UserDataContextProveder = ({ children }) => {
    /*
        Ez az egyedi Context Providerem
    */
    const [huf, setHuf] = useState(100000);
    const [eur, setEur] = useState(100);
    const [usd, setUsd] = useState(100);
    const [gbp, setGbp] = useState(100);
    const imgurls = {
        huf: "https://thumbs.dreamstime.com/b/hungarian-forint-coin-icon-currency-hungary-vector-199935386.jpg",
        eur: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Euro-EUR-icon.png",
        usd: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Dollar-USD-icon.png",
        gbp: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Pound-GBP-icon.png"
    };
    const datas = { huf, setHuf, eur, setEur, usd, setUsd, gbp, setGbp, imgurls }
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
    switch (what) {
        case "gets":
            return [context.huf, context.eur, context.usd, context.gbp];
            break;
        case "imgs":
            return context.imgurls;
            break;
        default:
            return context;
            break;
    }
}
