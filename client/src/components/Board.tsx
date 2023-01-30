import { HStack, VStack } from "@chakra-ui/react";
import { Character, EmptyCharacter } from "./Character";

interface LetterObj {
  key: string;
  color: string;
}

interface RowProperties {
  attempt?: LetterObj[] | undefined | null;
  currentAttempt?: string;
}

interface BoardProperties {
  currentAttempt: string;
  attempts: Array<LetterObj[]> /* LetterObj[][] */;
  // x: Array<Array<LetterObj>>;
  turn: number;
}

const Row = ({attempt, currentAttempt}: RowProperties) =>{
  
  if (attempt === null) attempt == undefined;
  
//מקליד
  if (currentAttempt || currentAttempt === ''){
    // FOR הופך למערך של אותיות ועושה פור 
    let letters = [...currentAttempt].map((letter) => {
      //[...currentAttempt.split('')]
      return {
        key: letter,
        color: 'transparent',
      };
    });

    return (
      <HStack className="row">
        {letters.map((letterObj, index) =>(
          <Character key={index} letter={letterObj.key} color={letterObj.color} />
        ))}
        {[...Array(5 - letters.length)].map((_, index) =>
          index === 0 ? (
            <EmptyCharacter key={index} showCursor /> 
          ): (
            <EmptyCharacter key={index} />
            )
        )}
      </HStack>
    );
  }
  //משבצעות ריקות אם לא נעשה ניסוי
  if (attempt === undefined) {
    return (
      <HStack>
        <EmptyCharacter />
        <EmptyCharacter />
        <EmptyCharacter />
        <EmptyCharacter />
        <EmptyCharacter />
      </HStack>
    );
  }
// סיים שורה כשלחץ על אנטר
  return (
    <HStack>
      {attempt.map((letterObj, index) =>(
        <Character key={index} letter={letterObj.key} color={letterObj.color} order={index} />
      ))}
    </HStack>
  );
};

const Board = ({ currentAttempt, attempts, turn}: BoardProperties) => {
  return (
    <VStack>
      {attempts.map((attempt, index) => {
        if (turn === index){
          return <Row key={index} currentAttempt={currentAttempt} />;
        }
        return <Row key={index} attempt={attempt} />;
      })}
    </VStack>
  );
};

export default Board;