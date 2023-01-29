import { keyframes, useColorMode, Center, Text } from "@chakra-ui/react";

interface CharacterProperties {
    letter: string;
    color: string;
    order?: number;
    //input: {letter: string; color: string};
}

const borderDefaultColor = '#2D3748';
const fontCharacterWhite = 'RGBA(255, 255, 255, 0.92)';
const fontCharacterBlack = 'RGBA(0, 0, 0, 0.92)';

const Character = ({letter, color, order}: CharacterProperties) => {
    const {colorMode} = useColorMode();
    //משנה את הצבע שרואים
    const mapColor = (color: string) => {
        if (color === 'transparant') {
            return 'transparant';
        }
        if (color === 'gray') {
            return colorMode === 'dark' ? '#E6F2F7' : '#718096';
        }
        if (color === 'green') {
            return colorMode === 'dark' ? '#9AE6B4' : '#38A169';
        }
        if (color === 'pink') {
            return colorMode === 'dark' ? '#F786E4' : '#CC1F6D';
        }
        return '#fff';
    };
    // קופצ בין המשבצעות בכל הקלדה
    const jumpWord = keyframes`
        0% {
            transform: scale(1);
            border-color: ${borderDefaultColor}
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
            border-color: gray
        }`;

// כשסיים את המילה בשורה מבצע את הפיכה- בודק אם האותיות
    const flipWord = keyframes`
        0% {
            transform: rotateX(0);
            background-color: transparent;
            border-color: ${borderDefaultColor};
        }
        45% {
            transform: rotateX(90deg);
            background-color: transparent;
            border-color: ${borderDefaultColor}
        }
        55% {
            transform: rotateX(90deg);
            background-color: ${mapColor(color)};
            border-color: ${mapColor(color)};
            color: ${colorMode === 'dark' ? fontCharacterBlack : fontCharacterWhite}; 
        // This is useful in Light mode, where the default fontColor is black. When the animation finish, the fontColor will transition to white. In Darkmode, this is the default color: ;
        }
        100% {
            transform: rotateX(0);
            background-color: ${mapColor(color)};
            border-color: ${mapColor(color)};
            color: ${colorMode === 'dark' ? fontCharacterBlack : fontCharacterWhite}
        }`;
    
    
    let animation = `${jumpWord} 0.1s ease`
    // הופך את הקפיצות להפיכות
    if (color === 'gray' || color === 'green' || color === 'pink') {
        animation = `${flipWord} 0.6s ease`;
    }
// דיילי בין האותיות
    let delay = undefined;
    if (order) {
        delay = `${0.2 * delay}s`;
    }

    return (
        <Center
            w= {['50px', '55px', '60px']}
            h= {['50px', '55px', '60px']}
            border="1px"
            borderColor= {borderDefaultColor}
            animation= {animation}
            userSelect= "none"
            sx= {{ animationDelay: delay, animationFillMode: 'forwards' }} // backgroundColor come from animationFillMode forwards
        >
            <Text fontWeight={700} fontSize="x-large">
                {letter.toUpperCase()}
            </Text>
        </Center>
    );
};

// פוקוס על המשבצת ה"ריקה"
const focus = keyframes`
    0% {
        opacity: 0.1
    }
    50% {
        opacity: 1
    }
    100% {
        opacity: 0.1
    }`;

const EmptyCharacter = ({showCursor}: {showCursor?: boolean}) =>(
    <Center
        w={['50px', '55px', '60px']}
        h={['50px', '55px', '60px']}
        border="1px"
        borderColor={borderDefaultColor}
        userSelect="none"
    >
        {showCursor && (
        <Text fontSize="x-large" animation={`${focus} 2s infinite ease`}>
            _
        </Text>
        )}
    </Center>
);

export { Character, EmptyCharacter };