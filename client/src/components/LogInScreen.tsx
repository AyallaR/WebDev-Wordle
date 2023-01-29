import { useEffect, useState } from "react";
import { Heading, Input, Button, InputGroup, Stack, InputLeftElement,
  Box, Link, Avatar, FormControl, FormHelperText, InputRightElement,
  useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, 
  Flex } from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaLightbulb } from "react-icons/fa";


const LogInScreen = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  useEffect(() => {
    onOpen();
  });

  return (
    <>
      <Button
        onClick={onOpen}
        size={['xs', 'sm', 'md']}
        variant="ghost"
      >
        <FaLightbulb />
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
            
            <ModalHeader>
                <Flex
                    flexDirection="column"
                    backgroundColor="gray.200"
                    justifyContent="center"
                    alignItems="center"
                >
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Avatar bg="teal.500" />
                    <Heading color="teal.400">Welcome</Heading>
                </Stack>
                </Flex>
              </ModalHeader>
              <ModalCloseButton />
              
              <ModalBody>
              <Box minW={{ base: "90%", md: "468px" }}>
                <form>
                  <Stack
                    spacing={4}
                    p="1rem"
                    backgroundColor="whiteAlpha.900"
                    boxShadow="md"
                  >
                    <FormControl>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<FaUserAlt color="gray.300" />}
                        />
                        <Input type="email" placeholder="email address" />
                      </InputGroup>
                    </FormControl>
                    <FormControl>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          children={<FaLock color="gray.300" />}
                        />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                            {showPassword ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormHelperText textAlign="right">
                        <Link>forgot password?</Link>
                      </FormHelperText>
                    </FormControl>
                    <Button
                      borderRadius={0}
                      type="submit"
                      variant="solid"
                      colorScheme="teal"
                      width="full"
                    >
                      Login
                    </Button>
                  </Stack>
                </form>
              </Box>
              </ModalBody>

            <ModalFooter>
            <Box>
              New to us?{" "}
              <Link color="teal.500" href="#">
                Sign Up
              </Link>
            </Box>
            </ModalFooter>
        </ModalContent>
    </Modal>
    </>
  );
};

export default LogInScreen;


// import { Avatar, Box, Button, chakra, Flex, FormControl, FormHelperText, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Link, Stack, useColorModeValue } from "@chakra-ui/react";
// import { useState } from "react";
// import { FaLock, FaUserAlt } from "react-icons/fa";

// const CFaUserAlt = chakra(FaUserAlt);
// const CFaLock = chakra(FaLock);

// export const LogInScreen = () => {
//     const [showPassword, setShowPassword] = useState(false);

//     const handleShowClick = () => setShowPassword(!showPassword);

//   return (
//     <Flex
//       flexDirection="column"
//       width="100wh"
//       height="100vh"
//       backgroundColor="gray.200"
//       justifyContent="center"
//       alignItems="center"
//     >
//       <Stack
//         flexDir="column"
//         mb="2"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <Avatar bg="teal.500" />
//         <Heading color="teal.400">Welcome</Heading>
//         <Box minW={{ base: "90%", md: "468px" }}>
//           <form>
//             <Stack
//               spacing={4}
//               p="1rem"
//               backgroundColor="whiteAlpha.900"
//               boxShadow="md"
//             >
//               <FormControl>
//                 <InputGroup>
//                   <InputLeftElement
//                     pointerEvents="none"
//                     children={<CFaUserAlt color="gray.300" />}
//                   />
//                   <Input type="email" placeholder="email address" />
//                 </InputGroup>
//               </FormControl>
//               <FormControl>
//                 <InputGroup>
//                   <InputLeftElement
//                     pointerEvents="none"
//                     color="gray.300"
//                     children={<CFaLock color="gray.300" />}
//                   />
//                   <Input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                   />
//                   <InputRightElement width="4.5rem">
//                     <Button h="1.75rem" size="sm" onClick={handleShowClick}>
//                       {showPassword ? "Hide" : "Show"}
//                     </Button>
//                   </InputRightElement>
//                 </InputGroup>
//                 <FormHelperText textAlign="right">
//                   <Link>forgot password?</Link>
//                 </FormHelperText>
//               </FormControl>
//               <Button
//                 borderRadius={0}
//                 type="submit"
//                 variant="solid"
//                 colorScheme="teal"
//                 width="full"
//               >
//                 Login
//               </Button>
//             </Stack>
//           </form>
//         </Box>
//       </Stack>
//       <Box>
//         New to us?{" "}
//         <Link color="teal.500" href="#">
//           Sign Up
//         </Link>
//       </Box>
//     </Flex>
//   );
// };