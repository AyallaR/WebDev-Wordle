import { Text, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, VStack, Divider, HStack, ModalFooter } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import {TiInfoLargeOutline} from 'react-icons/ti'
import { Character } from "./Character";

// interface InfoPopUpScreenProp {
//     quantity: number;
// }

export const InfoPopUpScreen = (/* {quantity}: InfoPopUpScreenProp */) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const notFirstVisit = JSON.parse(localStorage.getItem('notFirstVisit') || 'null');
        
        localStorage.setItem('notFirstVisit', JSON.stringify(true));
        if (!notFirstVisit) btnRef?.current?.click();
    }, []);
    
    return (
        <>
            <Button 
                ref={btnRef}
                onClick={onOpen}
                size={['xs', 'sm', 'md']}
                variant='ghost'
            >
                <TiInfoLargeOutline />
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                motionPreset="slideInBottom"
                size={['sm', 'md', 'lg']}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>How To Play</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack alignItems="flex-start">
                            <Text fontSize="sm">
                                <b>Wordle Warning </b> This GAME may potentialy be for the true hardcore. 
                                You beat the game by guessing all the correct Wordles consecutively.
                            </Text>
                            {/* <Text fontSize="sm">
                                In other words, you win by accumulating {quantity} win streaks.
                            </Text> */}
                            <Text fontSize="sm">
                                You can rest assured that the same Wordle won&apos;t show up
                                twice. The game will get easier the longer you play as the
                                solution "pool" get smaller and smaller... eventually.
                            </Text>
                            <Text fontSize="sm">
                                You have 6 tries to guess each Wordle. Type the Wordle with your
                                Keyboard or Keypad, and press ENTER to submit.
                            </Text>
                            <Divider />
                            <Text fontSize="sm">Some Examples</Text>
                            <HStack>
                                <Character letter="L" color="green" />
                                <Character letter="U" color="transparent" />
                                <Character letter="C" color="transparent" />
                                <Character letter="K" color="transparent" />
                                <Character letter="Y" color="transparent" />
                            </HStack>
                            <Text fontSize="sm">
                                The letter <b>L</b> is in the Wordle and in the correct spot.
                            </Text>
                            <HStack>
                                <Character letter="S" color="transparent" />
                                <Character letter="N" color="transparent" />
                                <Character letter="A" color="transparent" />
                                <Character letter="I" color="transparent" />
                                <Character letter="L" color="pink" />
                            </HStack>
                            <Text fontSize="sm">
                                The letter <b>L</b> is in the Wordle but in the wrong spot.
                            </Text>
                            <HStack>
                                <Character letter="A" color="transparent" />
                                <Character letter="L" color="gray" />
                                <Character letter="G" color="transparent" />
                                <Character letter="A" color="transparent" />
                                <Character letter="E" color="transparent" />
                            </HStack>
                            <Text fontSize="sm">
                                The letter <b>L</b> is not in the Wordle.
                            </Text>
                        </VStack>
                    </ModalBody>
                    
                    <ModalFooter
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >
                        <Text fontSize="xs">FYI:</Text>
                        <Text fontSize="xs">
                            1. You don't have to enter a valid word, hope this open up more
                            room for your strategy.
                        </Text>
                        <Text fontSize="xs">
                            2. You can close the game and come back anytime. Your progress is
                            autosaved, 
                            i do hope so.
                        </Text>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
