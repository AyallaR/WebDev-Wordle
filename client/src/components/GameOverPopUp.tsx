import { Dispatch, SetStateAction, useEffect } from 'react';
import {Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure, Text } from '@chakra-ui/react';

interface GameOverPopUpProps {
  gameOverStatus: string;
  correctWord: string;
  resetBoard: () => void;
  setRound: Dispatch<SetStateAction<number>>;
}

const GameOverPopUp = ({ gameOverStatus, correctWord, resetBoard,
  setRound,}: GameOverPopUpProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (gameOverStatus) {
      onOpen();
    }
  }, [gameOverStatus, onOpen]);

const winGame = () => {
    const dataList: string[] = JSON.parse(
      localStorage.getItem('dataList') || '[]');
      
    const newDataList = dataList.filter((word) => word != correctWord);
    localStorage.setItem('dataList', JSON.stringify(newDataList));

    resetBoard();
    setRound((prev) => prev + 1);
    onClose();
  };

  const loseGame = () => {
    localStorage.removeItem('dataList');

    resetBoard();
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