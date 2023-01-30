import { ChakraProvider } from '@chakra-ui/react';
import theme from './css/theme';
import '@fontsource/lobster';
import '@fontsource/crimson-pro';
import '@fontsource/crimson-pro/700.css';
import MainBox from './components/MainBox';


const App = () => (
  <ChakraProvider theme={theme}>
    <MainBox />
  </ChakraProvider>
);

export default App;
