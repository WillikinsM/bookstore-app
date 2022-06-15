import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Center,
} from '@chakra-ui/react';
import Link from 'next/link';




const UserMenu = (props : {isLogged: boolean}) => {



  return props.isLogged ? (
    <>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'} bg="black">
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem bg="black"
                    fontSize="xs"
                    fontWeight="bold"
                     _hover={{
                      color: "black",
                      bg: "white"
                    }}
                    _focus={{
                      color: "black",
                      bg: "white"
                    }}
                  >Account Settings</MenuItem>
                  <MenuItem bg="black"
                    fontSize="xs"
                    fontWeight="bold"
                     _hover={{
                      color: "black",
                      bg: "white"
                    }}
                    _focus={{
                      color: "black",
                      bg: "white"
                    }}
                  >Logout</MenuItem>
                </MenuList>
              </Menu>
    </>
  ) : (
    <>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/bottts/your-custom-seed.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'} bg="black">
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/bottts/your-custom-seed.svg'}
                    />
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem bg="black"
                    fontSize="xs"
                    fontWeight="bold"
                     _hover={{
                      color: "black",
                      bg: "white"
                    }}
                    _focus={{
                      color: "black",
                      bg: "white"
                    }}
                  >
                    <Link href="/login">
                      Sing In
                    </Link>
                  </MenuItem>
                  <MenuItem bg="black"
                    fontSize="xs"
                    fontWeight="bold"
                     _hover={{
                      color: "black",
                      bg: "white"
                    }}
                    _focus={{
                      color: "black",
                      bg: "white"
                    }}
                  >
                    <Link href="/singup"> 
                      Sing Up
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
    </>
  )
} 

export default UserMenu;