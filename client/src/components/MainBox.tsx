import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getRandonWord } from "../hookLogic/server-request";
import Header from "./Header";
import MainWordle from "./MainWordle";

const MainBox = () => {
    //const [line, setLine] = useState(0);
    const [round, setRound] = useState(0);
    const [correctWord, setCorrectWord] = useState({ word: ''});

    //** */ useEffect(() => {
    //     setLine(getCorrectWord().line);
    // }, []);

    // useEffect(() => {
    //     getCorrectWord().then((word)=>{
    //         setCorrectWord(word)
    //     });
    // }, []);

    useEffect(() => {
        getRandonWord().then((res)=>
            setCorrectWord({word: res}));
    },[round]);

    return (
        <Box as="main">
            <Header /* line={line} */ /* quantity={correctWord.quantity} */ />
            <Box height="calc(100vh - 10vh)">
                {correctWord && (
                    <MainWordle correctWord={correctWord.word} /* setLine={setLine} */ setRound={setRound} />
                )}
                {/* {line === correctWord.quantity && (
                    <WinnerPopUp quantity={correctWord.quantity} setLine={setLine} setRound={setRound} /> 
                )} */}
            </Box>
        </Box>
    );
};

export default MainBox;