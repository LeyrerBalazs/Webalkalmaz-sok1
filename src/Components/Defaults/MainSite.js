import React, {useState} from "react";
import Exchanger from "../SubComponents/Exchanger";
import { useUserDataContext } from "./../../Contexts/UserDataContext";
import "./../Styles/default.css";
import "./Styles/MainSite.css"

const MainSite = () => {
    /*
        A web app main része...
    */
    const imgurls = useUserDataContext("imgs");
    const gets = useUserDataContext("gets");
    const [siteNumber, setSiteNumber] = useState(0);
    return (
        <center>
            <div className="UserDataClass">
                <span className="LeftSide">
                    <span className="LeftSide" onClick={() => setSiteNumber(0)}>
                        <img src={imgurls.huf} />
                        <span className="value">{Number((gets[0]).toFixed(0))}</span>
                    </span>
                    <span className="RightSide" onClick={() => setSiteNumber(1)}>
                        <img src={imgurls.eur} />
                        <span className="value">{Number((gets[1]).toFixed(2))}</span>
                    </span>
                </span>
                <span className="RightSide">
                    <span className="LeftSide" onClick={() => setSiteNumber(2)}>
                        <img src={imgurls.usd} />
                        <span className="value">{Number((gets[2]).toFixed(2))}</span>
                    </span>
                    <span className="RightSide" onClick={() => setSiteNumber(3)}>
                        <img src={imgurls.gbp} />
                        <span className="value">{Number((gets[3]).toFixed(2))}</span>
                    </span>
                </span>
            </div>
            <Exchanger id={siteNumber} />
        </center>
    );
}

export default MainSite;