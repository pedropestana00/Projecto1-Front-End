import React, { useContext, useEffect } from "react";
import LeftMenu from "./LeftMenu";  
import MainMenu from "./MainMenu";
import { AppContext } from "../App";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router";
import { auth } from "../config/firebase";


function Content() {
    const navigate = useNavigate();

    const isAuthenticated = useEffect(() => {
        const user = auth.currentUser;
        if (!user) {
            navigate("/Error");
        }
    }, []);

    const { chatHistory, setchatHistory } = useContext(AppContext);

    return (
        <div>
            <Header/>
            <div className="row border border-secondary" style = {{height: "600px"}}>
                <LeftMenu questions = {chatHistory.filter((msg: any) => msg.role === "user")}/>

                <MainMenu chatHistory={chatHistory} setchatHistory={setchatHistory}/>
            </div>
            <Footer/>
        </div>
    );
}

export default Content;