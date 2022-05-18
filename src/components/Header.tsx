import { Flex, Img } from "@chakra-ui/react";

export function Header() {
  return(
    <Flex
      as="header"
      w="100%"
      h={["3.125rem","2.875rem"]}
      mx="auto"
      alignItems="center"
      justifyContent="center"
    >
      <Img h={["1.25rem", ]}  src="https://i.imgur.com/MZur60c.png" objectFit='cover'/>
    </Flex>
  )
}
