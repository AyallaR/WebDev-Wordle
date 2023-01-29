import { useState, useEffect } from 'react';
import { Button, useColorMode } from '@chakra-ui/react';
import { AiOutlineEnter } from 'react-icons/ai';
import { HiOutlineBackspace } from 'react-icons/hi'

interface KeyBProperties {
    keysBColor: {[key: string]: string;};
    letter: {key: string;};
    handleKeyup: ({key,}: | KeyboardEvent | {key: string;}) => void
}

const KeyB = ({ keysBColor, letter, handleKeyup }: KeyBProperties) => {
    const {colorMode} = useColorMode();
    const [keysBoardColor, setkeysBoardColor] = useState('');

    useEffect(() => {
        colorMode === 'dark'
            ? setkeysBoardColor('whiteAlpha')
            : setkeysBoardColor('blackAlpha');
        }, [colorMode]);
    
    useEffect(() => {
        if (keysBColor[letter.key]){
            const setColor = setTimeout(() => {
                if (keysBColor[letter.key] === 'green'){
                    setkeysBoardColor('green');
                }
                else if (keysBColor[letter.key] === 'pink'){
                    setkeysBoardColor('pink');
                }
                else if (keysBColor[letter.key] === 'gray'){
                    setkeysBoardColor('gray');
                }
            }, 1300);

            return () => clearTimeout(setColor);
        }
    });
    return (
        <Button 
        key={letter.key}
        colorScheme= {keysBoardColor}
        size= {['sm','md','md']}
        onClick= {() => handleKeyup(letter)} >
            {letter.key === 'Enter' ?(
                <AiOutlineEnter />
            ): letter.key === 'Backspace' ?(
                <HiOutlineBackspace />
            ): (letter.key.toUpperCase()
            )}
        </Button>
    );
};

export default KeyB;
