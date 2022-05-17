import { Flex, Img } from "@chakra-ui/react";

export function Header() {
  return(
    <Flex
      as="header"
      w="100%"
      h="24"
      mx="auto"
      alignItems="center"
      justifyContent="center"
    >
      <Img src="https://i.imgur.com/MZur60c.png" objectFit='cover'/>
    </Flex>
  )
}
