import { ChakraProvider } from '@chakra-ui/react';
import theme from './css/theme';
import '@fontsource/lobster';
import '@fontsource/crimson-pro';
import '@fontsource/crimson-pro/700.css';
import MainBox from './components/MainBox';
import { useState } from 'react';

export const [userName, setUserName] = useState("guest");


const App = () => (
  <ChakraProvider theme={theme}>
    <MainBox />
  </ChakraProvider>
);

export default App;



// export const AppContext = createContext(null);

// function App() {
//   const [board, setBoard] = useState(boardDefault);
//   const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
//   const [wordSet, setWordSet] = useState(new Set());
//   const [correctWord, setCorrectWord] = useState("");
//   const [disabledLetters, setDisabledLetters] = useState([]);
//   const [gameOver, setGameOver] = useState({
//     gameOver: false,
//     guessedWord: false,
//   });

//   return (
//     <>
//     <AppContext.Provider
//         value={{
//         board,
//         setBoard,
//         currAttempt,
//         setCurrAttempt,
//         correctWord,
//         onSelectLetter,
//         onDelete,
//         onEnter,
//         setDisabledLetters,
//         disabledLetters,
//         gameOver,
//         }}
//       >
//       <Header />
//       <div className="container">
//         <Board />
//         <Keyboard />
//       </div>
//       </AppContext.Provider>
//     </>
//   );
//   }

// export default App;
