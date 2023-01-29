import data from './data';

export function getWordById(wid:number) {
    return data[wid]
}

export function checkWord(g:string, i:number) {
    const guessColor= {};
    const org = data[i];
    if(g === org) return 'win';
    
    for(let j=0; j<org.length;j++){
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

export function getRandomtWord() {

    // const word = WORDS[ Math.round(Math.random() * WORDS.length) ];
    return String(Math.round(Math.random() * data.length));

}