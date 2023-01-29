import defaultArray from './data';


const WORDS = [
    'lemon',
    'brain',
    'pinky'
];

export function checkWord(g:string, i:number) {
    let guessColor=[""];
    const org = WORDS[i];
    if(g===org) return 'win';
    for(let j=0; i<WORDS.length;j++){
        if(org[j]===g[j]){
            guessColor[j]="green";
        }
        else if (org.includes(g[j])){
            guessColor[j]="pink";
        }
        else {
            guessColor[j]="gray"
        }
    }
     return guessColor


    // calcualte the differnece between g and org
}

const getCorrectWord = () => {

    // const word = WORDS[ Math.round(Math.random() * WORDS.length) ];
    return Math.round(Math.random() * WORDS.length);
/*

    let correctWordArray: string[] = [];

    let correctWordHistory: string[] = JSON.parse(
        localStorage.getItem('dataList') || '[]'
  );

    if (correctWordHistory.length == 0) {
        correctWordArray = defaultArray;
        localStorage.setItem('dataList', JSON.stringify(correctWordArray));
    } else {
       correctWordArray = correctWordHistory;
    }

    let randomNumber = JSON.parse(localStorage.getItem('randint') || 'null');
        if (!randomNumber) {
            randomNumber = Math.floor(Math.random() * correctWordArray.length);
            localStorage.setItem('randint', JSON.stringify(randomNumber)); 
        }
    const correctWord = correctWordArray[randomNumber];

    return {
        word: correctWord,
        // line: defaultArray.length - correctWordArray.length,
        // quantity: defaultArray.length,
    };
    */
};

export { getCorrectWord };