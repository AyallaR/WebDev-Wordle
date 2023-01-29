import { Dispatch, SetStateAction, useEffect } from 'react';
import {Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure, Text } from '@chakra-ui/react';

interface GameOverPopUpProps {
  gameOverStatus: string;
  correctWord: string;
  resetBoard: () => void;
  //setLine: Dispatch<SetStateAction<number>>;
  setRound: Dispatch<SetStateAction<number>>;
}

const GameOverPopUp = ({ gameOverStatus, correctWord, resetBoard,
  /* setLine, */ setRound,}: GameOverPopUpProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Open the modal after render
  useEffect(() => {
    if (gameOverStatus) {
      onOpen();
    }
  }, [gameOverStatus, onOpen]);
//**getSolution */ =>getCorrectWord**
//**solutionsList=> dataList **
//**solutionHistory=> correctHistory **
//**solutionArray=> correctArray **
const winGame = () => {
    // remove solution from solutionsList in localStorage
    const dataList: string[] = JSON.parse(
      localStorage.getItem('dataList') || '[]');
      
    const newDataList = dataList.filter((word) => word != correctWord);
    localStorage.setItem('dataList', JSON.stringify(newDataList));

    resetBoard();
    //setLine((prev) => prev + 1);
    setRound((prev) => prev + 1);
    onClose();
  };

  const loseGame = () => {
    // reset the solutionsList in LocalStorage
    localStorage.removeItem('dataList');

    resetBoard();
    //setLine(0);
    setRound((prev) => prev + 1);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      closeOnEsc={false}
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">Game Over</ModalHeader>
        <ModalBody textAlign="center">
          <Text>
            {gameOverStatus === 'win'
              ? 'Nice! Keep up the streaks 👍'
              : 'Too bad! Better luck next time 😊'}
          </Text>
          {gameOverStatus === 'lose' && (
            <Text>{`The Wordle you missed is "${correctWord}"`}</Text>
          )}
        </ModalBody>
        <ModalFooter justifyContent="center">
          {gameOverStatus === 'win' ? (
            <Button onClick={winGame}>Next Round</Button>
          ) : (
            <Button onClick={loseGame}>Reset Game</Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GameOverPopUp;