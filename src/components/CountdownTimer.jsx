import React, { useState, useEffect } from 'react';
import { Button, Stack, Box } from '@mui/material';
import { scoreState ,timeRemainingState, answerState, initialTimeState, isRunningState, isFlippingEnabledState} from './atoms';
import { useRecoilState , useRecoilValue} from 'recoil';
import './CountdownTimer.css'

function CountdownTimer(){
    const [timeRemaining, setTimeRemaining] = useRecoilState(timeRemainingState);
    const initialTime = useRecoilValue(initialTimeState); 
    const [isRunning, setIsRunning] = useRecoilState(isRunningState)
    const [isFlippingEnabled, setIsFlippingEnabled] = useRecoilState(isFlippingEnabledState);
    const [score, setScore] = useRecoilState(scoreState);
    const [setAnswer] = useRecoilState(answerState);

    useEffect(() =>{ //useEffect will start whenever we start a program
        let timerInterval;
        if(isRunning){
            timerInterval = setInterval(() =>{  //this setInterval works for every 1000 milliseconds
                setTimeRemaining((prevTime) => {
                    if(prevTime === 0){
                        alert("Your score is " + score + ". Refresh to start again");
                        clearInterval(timerInterval);
                        return 0;
                    }else{
                        return prevTime-1;
                    }
                });
            }, 1000);
        }
        return () => clearInterval(timerInterval);  //clearInterval is used to stop the setInterval
    },[isRunning, score]);

    // const resetTimer = () => {
    //     setTimeRemaining(initialTime);
    //     setIsRunning(false);
    //     setScore(0);
        
    //     setIsFlippingEnabled(false);
    // };

    const startTimer = () => {
        setIsRunning(true);
        setIsFlippingEnabled(true);
    };

    function stopTimer(){
        setIsRunning(false);
        setIsFlippingEnabled(false);
    }

    const hours = Math.floor(timeRemaining/3600);
    const minutes = Math.floor((timeRemaining%3600)/60);
    const seconds = timeRemaining%60;

    return(
        <div style={{backgroundColor: "brown"}}>
            <div style = {{fontSize: 30, backgroundColor: "DarkSalmon"}}>Identify the logos!</div>
            <div style={{fontSize:25 }}>{`${hours}H: ${minutes}M: ${seconds}S`}</div>
            <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }} sx={{ justifyContent: "center",alignItems: 'center', marginTop: 2}}>
               <Button variant="contained" color="success" onClick = {startTimer}>start</Button>
               {/* <Button variant="contained" onClick={resetTimer}>reset</Button> */}
               <Button variant="contained" color="error" onClick={stopTimer}>stop</Button>
               <div style={{fontSize:30, marginTop: 2}}>Score: {score}</div> 
            </Stack>
            
        </div>
    )
}

export default CountdownTimer;