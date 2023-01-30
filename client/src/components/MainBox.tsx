import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getRandonWord, getWordById } from "../hookLogic/server-request";
import Header from "./Header";
import MainWordle from "./MainWordle";
import mainWordleLogic from '../hookLogic/mainWordleLogic';
import WinnerPopUp from "./WinnerPopUp";

const MainBox = () => {
    const [round, setRound] = useState(0);
    const [correctWord, setCorrectWord] = useState({ word: ''});
    const {isCorrect, gameOverStatus} = mainWordleLogic(correctWord.word);
    
    useEffect(() => {
        getRandonWord().then((res)=>
            setCorrectWord({word: res}));
    },[round]);

    useEffect(() => {
        getWordById(correctWord.word).then((res)=>
            setCorrectWord({word: res}));
    },[gameOverStatus]);

    return (
        <Box as="main">
            <Header />
            <Box height="calc(100vh - 10vh)">
                {correctWord && (
                    <MainWordle correctWord={correctWord.word} setRound={setRound} />
                )}
                {isCorrect &&
                    <WinnerPopUp setRound={setRound} />
                }
            </Box>
        </Box>
    );
};

export default MainBox;