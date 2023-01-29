import { Flex } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect } from "react";
import Board from "./Board";
import GameOverPopUp from "./GameOverPopUp";
import Keyboard from "./Keyboard";
import mainWordleLogic from '../hookLogic/mainWordleLogic';

interface MainWordleProps {
    correctWord: string;
    //setLine: Dispatch<SetStateAction<number>>;
    setRound: Dispatch<SetStateAction<number>>;
}
  
const MainWordle = ({ correctWord, /* setLine ,*/ setRound }: MainWordleProps) => {
    const {
        currentAttempt,
        handleKeyup,
        attempts,
        isCorrect,
        turn,
        keysBColor,
        resetBoard,
        gameOverStatus,
        setGameOverStatus,
    } = mainWordleLogic(correctWord);
  
    useEffect(() => {
      window.addEventListener('keyup', handleKeyup);
  
      // מבטל אם "ניצח"
        if (isCorrect) {
            window.removeEventListener('keyup', handleKeyup);
            //  1.3s מחכה עד שהמשבצות מסתיימות באנימציה 
            const setMessage = setTimeout(() => setGameOverStatus('win'), 1300);
  
            return () => clearTimeout(setMessage);
        }
      // מבטל אם סיים את כל האופציות של הסיבובים
        if (turn > 5) {
            window.removeEventListener('keyup', handleKeyup);
            const setMessage = setTimeout(() => setGameOverStatus('lose'), 1300);
    
            return () => clearTimeout(setMessage);
        }
  
        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup, isCorrect, turn, setGameOverStatus]);
  
    return (
        <Flex
            flexDir="column"
            height="100%"
            overflow={'hidden'}
            alignItems="center"
            justifyContent="space-evenly"
        >
        <Board currentAttempt={currentAttempt} attempts={attempts} turn={turn} />
        <Keyboard key={correctWord} keysBColor={keysBColor} handleKeyup={handleKeyup} />
        {gameOverStatus && (
            <GameOverPopUp
                gameOverStatus={gameOverStatus}
                correctWord={correctWord}
                resetBoard={resetBoard}
                //setLine={setLine}
                setRound={setRound}
            />
        )}
        </Flex>
    );
  };
  
  export default MainWordle;