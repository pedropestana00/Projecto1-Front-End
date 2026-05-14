import React from "react";

import AppGemini from "../AppGemini";

function MainMenu({chatHistory, setchatHistory}: any) {
    return (
        <div className="col-9 h-100 p-0 bg-white">
          <AppGemini chatHistory={chatHistory} setchatHistory={setchatHistory}  />
        </div>
    );
}

export default MainMenu;