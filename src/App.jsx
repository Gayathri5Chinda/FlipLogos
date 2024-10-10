import React from "react";
import CountdownTimer from "./components/CountdownTimer";
import FlipCard from "./components/FlipCard";
import { RecoilRoot } from "recoil";
import "./App.css"
import { Box, AppBar, Toolbar, } from "@mui/material";

function App(){
    
    return(
        <div>
            <RecoilRoot>  
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    
                    <CountdownTimer/>
                    
                </AppBar>
            </Box>
            
            <FlipCard/> 
            </RecoilRoot>
        </div>
    )
}

export default App;



