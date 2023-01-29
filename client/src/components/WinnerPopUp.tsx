import { Dispatch, SetStateAction, useEffect } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, 
        ModalBody, useDisclosure, Text } from '@chakra-ui/react';

interface WinnerPopUpProps {
  quantity: number;
  //setLine: Dispatch<SetStateAction<number>>;
  setRound: Dispatch<SetStateAction<number>>;
}

const WinnerPopUp = ({ /* quantity, */ /* setLine, */ setRound }: WinnerPopUpProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // פותח את המודל אחרי רינדור
  useEffect(() => {
    onOpen();
  });

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
        <ModalBody>
          <Text>Congratulations! You won the game!</Text>
        </ModalBody>
        <ModalFooter display="flex" justifyContent="center">
          <Button
            onClick={() => {
              //setLine(0);
              setRound(0);
              onClose();
            }}
          >
            Reset Game
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WinnerPopUp;