import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
      maxWidth={1480}
    >
      
      <Logo />

    </Flex>
  )
}