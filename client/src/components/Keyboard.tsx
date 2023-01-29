import { HStack, VStack } from "@chakra-ui/react";
import KeyB from "./KeyB";


interface KeyboardProperties {
  keysBColor: {[key: string]: string;};
  handleKeyup: ({key,}: | KeyboardEvent | {key: string;}) => void;
}

const KeyboardRowsShow = [
  [{key:'q'}, {key:'w'}, {key:'e'}, {key:'r'}, {key:'t'}, {key:'y'}, {key:'u'}, {key:'i'}, {key:'o'}, {key:'p'},{key:'Backspace'}],
  [{key:'a'}, {key:'s'}, {key:'d'}, {key:'f'}, {key:'g'}, {key:'h'}, {key:'j'}, {key:'k'}, {key:'l'}, {key:'Enter'}],
  [{key:'z'}, {key:'x'}, {key:'c'}, {key:'v'}, {key:'b'}, {key:'n'}, {key:'m'}, {key:'k'}],
];

const Keyboard = ({keysBColor, handleKeyup}: KeyboardProperties) =>{
  return (
    <VStack spacing={1}>
      {KeyboardRowsShow.map((row, index) => {
        return (
          <HStack key={index} spacing={1}>
            {row.map((letter) => {
              return (
                <KeyB
                  key={letter.key}
                  keysBColor={keysBColor}
                  letter={letter}
                  handleKeyup= {handleKeyup} />
              );
            })}
          </HStack>
        );
      })}
    </VStack>
  );
};

export default Keyboard;