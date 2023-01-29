import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Attempt {
    key: string;
    color: string;
  }
  
  //  לוגיקה העיקרית
  const mainWordleLogic = (correctWord: string) => {
    let defaultTurn = 0;
    let defaultCurrentAttempt: string | null = null;
    let defaultAttempts: Array<Attempt[]> | null = null;
    let defaultHistory: Array<string> = [];
    let defaultKeysBColor = {};
    let defaultIsCorrect = false;
  
    const [turn, setTurn] = useState(defaultTurn);
    const [currentAttempt, setCurrentAttempt] = useState(defaultCurrentAttempt ?? ''); 
    const [attempts, setAttempts] = useState<Array<Attempt[]>>(
      defaultAttempts ?? Array(6).fill(undefined)
    ); 
    const [history, setHistory] = useState<string[]>(defaultHistory); 
    const [keysBColor, setKeysBColor] = useState<{ [key: string]: string }>(
      defaultKeysBColor
    ); 
    const [isCorrect, setIsCorrect] = useState(defaultIsCorrect);
    const [gameOverStatus, setGameOverStatus] = useState(''); // "win"\"lose"\ "".
    const toast = useToast(); // אינפוט לא נכון= יזרוק הערה
  
    //
    useEffect(() => {
      setTurn(JSON.parse(localStorage.getItem('turn') || '0'));
      setCurrentAttempt(
        JSON.parse(localStorage.getItem('currentAttempt') || 'null') ?? ''
      );
      setAttempts(
        JSON.parse(localStorage.getItem('attempts') || 'null') ??
          Array(6).fill(undefined)
      );
      setHistory(JSON.parse(localStorage.getItem('history') || '[]'));
      setKeysBColor(JSON.parse(localStorage.getItem('keysBColor') || '{}'));
      setIsCorrect(JSON.parse(localStorage.getItem('isCorrect') || 'false'));
    }, []);
  
  
    const processAttempt = () => {
      let correctWordArray = [...correctWord];
      let formattedAttempt: Attempt[] = [...currentAttempt].map((letter, i) => {
        // בדיקת צבע
        let color = 'gray'; // צבע ברירת מחדל
        if (letter.toLowerCase() === correctWordArray[i]) {
          color = 'green'; // במקום הנכון--ירוק
        } else if (correctWordArray.includes(letter.toLowerCase())) {
          color = 'pink'; // במקום הלא נכון אבל נמצא במילה הנכונה-- ורוד
        }
  
        return {
          key: letter.toLowerCase(),
          color,
        };
      });
  
      // מעדכן את המערך בהיסטוריה למנוע כפילויות
      setHistory((prev) => {
        const newHistory = [...prev, currentAttempt];
        localStorage.setItem('history', JSON.stringify(newHistory));
        return newHistory;
      });
  
      //  מעדכן את המערך בניסיונות
      setAttempts((prev) => {
        let attemptsArray = [...prev];
        attemptsArray[turn] = formattedAttempt;
        localStorage.setItem('attempts', JSON.stringify(attemptsArray));
        return attemptsArray;
      });
  
      //הצבע יושפע בSET בקונמפוננטה 
      setKeysBColor((prev) => {
        let newKeysBColor = { ...prev };
        formattedAttempt.forEach((letterObj) => {
          const currentKeyBColor = newKeysBColor[letterObj.key];
  
          // סדר הצבעים: green > pink > gray
          if (letterObj.color === 'green') {
            newKeysBColor[letterObj.key] = 'green';
          } else if (
            letterObj.color === 'pink' &&
            currentKeyBColor !== 'green'
          ) {
            newKeysBColor[letterObj.key] = 'pink';
          } else if (
            letterObj.color === 'gray' &&
            currentKeyBColor !== 'green' &&
            currentKeyBColor !== 'gray'
          ) {
            newKeysBColor[letterObj.key] = 'gray';
          }
        });
        localStorage.setItem('keysBColor', JSON.stringify(newKeysBColor));
        return newKeysBColor;
      });
  
      // מוסיף סיבוב
      setTurn((prev) => {
        const newTurnValue = prev + 1;
        localStorage.setItem('turn', JSON.stringify(newTurnValue));
        return newTurnValue;
      });
    };
  
    //  בדיקה סופית אם הניסוי נכון ומאתחל מצבים
    const finalizeTurn = () => {
      if (currentAttempt === correctWord) {
        setIsCorrect(true);
        localStorage.setItem('isCorrect', JSON.stringify(true));
      }
  
      // מאתחל currentAttempt
      setCurrentAttempt('');
      localStorage.setItem('currentAttempt', JSON.stringify(''));
    };
  
    
    const handleKeyup = ({ key }: KeyboardEvent | { key: string }) => {
      if (/^[a-zA-Z]$/.test(key) && currentAttempt.length < 5) {
        
        setCurrentAttempt((prev) => {
          const newCurrentAttempt = prev + key;
          localStorage.setItem('currentAttempt', JSON.stringify(newCurrentAttempt));
          return newCurrentAttempt;
        });
      } else if (key === 'Backspace') {
        // בלחיצה ימחוק אות אחורה
        setCurrentAttempt((prev) => {
          const newCurrentAttempt = prev.slice(0, -1);
          localStorage.setItem('currentAttempt', JSON.stringify(newCurrentAttempt));
          return newCurrentAttempt;
        });
      } else if (key === 'Enter') {
        //יעשה ניסוי חדש בשורה הבאה 
        // זורק הערה אם המילה ניסיונית לא באורך 5
        if (history.includes(currentAttempt)) {
          toast({
            title: "You've tried that before.",
            status: 'error',
            position: 'top',
            duration: 2000,
          });
          return;
        }
        if (currentAttempt.length !== 5) {
          toast({
            title: 'A Wordle is 5 characters long.',
            status: 'warning',
            position: 'top',
            duration: 2000,
          });
          return;
        }
        // תזכורת לפני סיום
        if (turn === 4 && currentAttempt !== correctWord) {
          toast({
            title: 'Last try, think carefully!',
            status: 'info',
            position: 'top',
            duration: 2000,
          });
        }
  
        processAttempt();
        finalizeTurn();
      }
    };
  
    // מאתחל לוח
    const resetBoard = () => {
      setTurn(0);
      setCurrentAttempt('');
      setAttempts(Array(6).fill(undefined));
      setHistory([]);
      setKeysBColor({});
      setIsCorrect(false);
      setGameOverStatus('');
      localStorage.setItem('turn', JSON.stringify(0));
      localStorage.setItem('currentAttempt', JSON.stringify(null));
      localStorage.setItem('attempts', JSON.stringify(null));
      localStorage.setItem('history', JSON.stringify([]));
      localStorage.setItem('keysBColor', JSON.stringify({}));
      localStorage.setItem('isCorrect', JSON.stringify(false));
      localStorage.removeItem('randint');
    };
  
    return {
      turn,
      currentAttempt,
      attempts,
      keysBColor,
      isCorrect,
      handleKeyup,
      resetBoard,
      gameOverStatus,
      setGameOverStatus,
    };
  };
  
  export default mainWordleLogic;