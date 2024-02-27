// import React, { useState } from "react";
// import "./Contact.css";
// import linkedin from "../assets/linkedin.png";
// import gitHub from "../assets/gitHub.png";
// import gmail from "../assets/gmail.png";
// import whatsApp from "../assets/whatsApp.png";

// const ContactSection = () => {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [message, setMessage] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = () => {
//     // Add your submit logic here
//     console.log("Submitted:", { email, username, message });
//   };

//   return (
   
//     <div id="CONTACT">
  
//       <p className="contactS">Contact Me</p>
//       <div className="about-section">
//         {/* Left side - Email Form */}
//         <div className="email-form">
//           <form onSubmit={handleSubmit}>
//             <label>
//               Email:
//               <input type="email" name="email" required />
//             </label>
//             <label>
//               Username:
//               <input type="text" name="username" required />
//             </label>
//             <label>
//               Message:
//               <textarea name="message" required />
//             </label>
//             <button type="submit">Submit</button>
//           </form>
//         </div>

//         {/* Right side - Social Media Icons */}
//         <div className="allSocial">
//           <a href="https://www.linkedin.com/in/shubham-lalwadiya-402081221/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><img className="icons" src={linkedin} alt="" /></a>
//           <a href="https://www.linkedin.com/in/shubham-lalwadiya-402081221/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text"><p>Shubham Lalwadiya</p></a>
//           <a href="mailto:lalwadiyashubham123@gmail.com" target="_blank"><img className="icons" src={gmail} alt="" /></a>
//           <a href="mailto:lalwadiyashubham123@gmail.com" target="_blank" className="text">lalwadiyashubham123@gmail.com</a>
//           <a href="https://github.com/SHUBHAMLALWADIYA" target="_blank"><img className="icons" src={gitHub} alt="" /></a>
//           <a href="https://github.com/SHUBHAMLALWADIYA" target="_blank" className="text"><p>SHUBHAMLALWADIYA</p></a>
//           <a href="https://wa.link/81dfs9" target="_blank"><img className="icons" src={whatsApp} alt="" /></a>
//           <a href="https://wa.link/81dfs9" target="_blank" className="text"><p>+91 7990336834</p></a>
//         </div>
//         <div className="secrete">
          
          
//         </div>
//       </div>
//       <p className="last">Design and Build by <span> Shubham Lalwadiya</span> @ 2024</p>
//     </div>
    
//   );
// };

// export default ContactSection;
'use client'

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson, BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import { color } from 'framer-motion'
import "./Contact.css"

export default function ContactSection() {
  return (<div id='CONTACT'>
 <p className='contactme'>ContactMe</p>
    <Container  maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
   
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              
              <WrapItem>
                <Box bg="" border={"1px solid white"} borderRadius="lg">
                  <Box m={8} color="white">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none"  >
                            
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="grey.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box>
                  <Heading textAlign={"center"}>Contact</Heading>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<a href='https://wa.link/81dfs9' target='_blank'><MdPhone color="#1970F1" size="20px" /></a>}>
                          <a href="https://wa.link/81dfs9">+91-988888888</a>
                      </Button>
                      <Button
                        size="md"
                        height="auto"
                        padding={"10px 6px"}
                        width="fit-content"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<a href='mailto:lalwadiyashubham123@gmail.com'><MdEmail color="#1970F1" size="20px" /></a>}>
                        lalwadiyashubham123@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Gujarat, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                   margin={"auto"}>
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<a href='mailto:lalwadiyashubham123@gmail.com' target='_blank'><MdEmail size="28px" color='white'/></a>}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<a href='https://github.com/SHUBHAMLALWADIYA' target='_blank'><BsGithub size="28px" color='white'/></a>}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<a  href='https://www.linkedin.com/in/shubham-lalwadiya-402081221/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'><BsLinkedin size="28px" color='white'/></a>}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF'}}
                      icon={<a href='https://wa.link/81dfs9' target='_blank'><BsWhatsapp size="28px" color='white'/></a>}
                    />
                  </HStack>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
    </div>
  )
}