import React from 'react'
import "./Dropdown.css"
import shubham from "../assets/shubham_resume.pdf"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

function Dropdown() {
  return (
    
    
    <div class="dropdown">
        <button class="dropbtn">
        <div></div>
        <div></div>
         <div></div>
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#ABOUT">About</a>
          <a href="#SKILLS">Skills</a>
          <a href="#PROJECTS">Projects</a>
          <a href="#CONTACT">Contact</a>
          <a  href={shubham} download="shubham_resume.pdf">Resume</a>
        </div>
      </div>
  )
}

export default Dropdown

// import {
//     Drawer,
//     DrawerBody,
//     DrawerFooter,
//     DrawerHeader,
//     DrawerOverlay,
//     DrawerContent,
//     DrawerCloseButton,
//     Button 
//   } from "@chakra-ui/react";
//   import React from "react";
//   import { useDisclosure } from "@chakra-ui/react";
//   import "./drawer.css";
  
 
  
  
//   function Dropdown() {
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const btnRef = React.useRef();
  
//     const CloathingData=["Shop All","Activerwear","Coats & Jackets","Dresses","Jeans & Denim","Jumpsuit & Rompers","Lingerie & Hosiery","Loungewear & Sleepwear","Pants & Leggings","Shorts","Skirts","Sweaters","Sweatshirts & Hoodies","Swimwear & Coverups","Tops & Tees"]
  
//     return (
//       <>
//         <Button ref={btnRef} colorScheme="black" onClick={onOpen}>
//           <p className="drawerPtag"><div></div>
// <div></div>
// <div></div></p>
//         </Button>
//         <Drawer
//           isOpen={isOpen}
//           placement="left"
//           onClose={onClose}
//           finalFocusRef={btnRef}
//         >
//           <DrawerOverlay />
//           <DrawerContent>
//             <DrawerCloseButton />
//             <DrawerHeader>Your Wardrobe</DrawerHeader>
  
//             <DrawerBody>
              
                
//                 <p style={{ fontSize:"15px",fontWeight:"400" ,marginLeft:"17px"}}><a>Log-In</a></p>
              
//               {/* //accordian from chakraui */}
  
  
              
//             </DrawerBody>
  
//             <DrawerFooter>
//               <Button variant="outline" colorScheme="blue" mr={3} onClick={onClose}>
//                 Cancel
//               </Button>
             
//             </DrawerFooter>
//           </DrawerContent>
//         </Drawer>
//       </>
//     );
//   }
  
//   export default Dropdown;