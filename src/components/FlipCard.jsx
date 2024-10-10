import React from 'react';
import ReactFlipCard from 'reactjs-flip-card';
import logo from './assets/logo.jpg';
import disable from './assets/disable.jpeg';
import { useRecoilState } from 'recoil';
import { cardsState, scoreState, isFlippingEnabledState, answerState } from './atoms'; 
import './flipCard.css'
import TextField from '@mui/material/TextField';


function FlipCard() {
    const [answer, setAnswer] = useRecoilState(answerState);
    const [cards, setCards] = useRecoilState(cardsState);
    const [score, setScore] = useRecoilState(scoreState);
    const [isFlippingEnabled, setIsFlippingEnabled] = useRecoilState(isFlippingEnabledState);
    
    const styles = {
        card: {background: 'blue', color: 'white', borderRadius: 120, height: 100, width: 100},
    }

    function handleChange(cardId, cardName, cardFlag, e){
        const userAnswer = e.target.value;
        setAnswer(prevAnswers => ({
            ...prevAnswers,
            [cardId]: userAnswer, 
        }));
        

        if((userAnswer.toLowerCase() === cardName.toLowerCase()) &&(cardFlag == false)) {
            setScore(prevScore => prevScore + 1); 
            //set cardflag into true here
            setCards(prevCards => 
                prevCards.map(card => 
                  card.id === cardId ? { ...card, flag: true } : card
                )
              );
        }  
    }
    
    return (
        <div className="flip-card-container">
            {cards.map((card) => (
                <div key={card.id} className="flip-card-item">
                    <div>
                    {isFlippingEnabled ? (
                        <ReactFlipCard frontStyle={styles.card}
                            backStyle={styles.card}
                            frontComponent={<img src={logo} alt='Car logo' height={200} width={200} />}
                            backComponent={<img src = {card.logo} height={200} width={200}/>} />
                    ) : (
                        <div>
                            <img className='flip-each-card-item' src = {disable} height={150} width={150}/>
                            
                        </div>
                        
                    )}
                    </div>
                    
                    <div className='input-item'>
                        <TextField id="outlined-basic" variant="outlined" value = {answer[card.id] || ''} onChange = {(e) => handleChange(card.id, card.name, card.flag, e)}/>
                    </div>
                </div>
            ))}
            
        </div>
        
    );
}

export default FlipCard;
