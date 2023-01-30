import { Button, Flex, Heading, HStack, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon} from 'react-icons/fa'
import { InfoPopUpScreen } from './InfoPopUpScreen';
import LogInScreen from "./LogInScreen";

const Header = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Flex alignItems= 'center' justifyContent= 'space-between' h= '10vh' px={4} >
      <Heading size= 'lg' userSelect='none'> 
        Wordle
      </Heading>
      <HStack>
        <InfoPopUpScreen />
        <Button 
          onClick={toggleColorMode}
          size= {['xs', 'sm', 'md']}
          variant='ghost'
        >
          {colorMode === 'dark' ? <FaSun /> : <FaMoon />}
        </Button>
{        <LogInScreen /> 
}      </HStack>
    </Flex>
  );
};

export default Header;
