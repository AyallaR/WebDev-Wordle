import { Button, Flex, Heading, HStack, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon} from 'react-icons/fa'
import { InfoPopUpScreen } from './InfoPopUpScreen';

// interface HeaderProperties {
//   // line: number;
//   quantity: number;
// }

const Header = (/* {quantity}: HeaderProperties */) => {
  const {colorMode, toggleColorMode} = useColorMode();
  //const hello= "Hi" + userName;

  return (
    <Flex alignItems= 'center' justifyContent= 'space-between' h= '10vh' px={4} >
      <Heading size= 'lg' userSelect='none'> 
        Wordle
      </Heading>
      <HStack>
        <InfoPopUpScreen /* quantity={quantity} */ />
        <Button 
          onClick={toggleColorMode}
          size= {['xs', 'sm', 'md']}
          variant='ghost'
        >
          {colorMode === 'dark' ? <FaSun /> : <FaMoon />}
        </Button>
        {/* <LogInScreen /> {hello} */}
      </HStack>
    </Flex>
  );
};

export default Header;
