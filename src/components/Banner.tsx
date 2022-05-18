import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner(){
	const isMobile = useBreakpointValue({
		base:false,
		sm:true
	})

  return(
    <Flex
      w="100%"
      h={["10.18rem", "15.62rem", "15.62rem", "20.93rem"]}
      bgImage="url('/banner.png')"
      bgPosition={["100% 20%","100% 20%","100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >

			<Flex
        direction="row"
			  h="100%"
			  justifyContent="space-between"
			  align="center"
			  mx="auto"
			  maxWidth={[333, 1280]}
        padding={["1rem","2rem"]}
      >
					<Box maxWidth={["20.81rem","24.81rem","28.81rem","32.75rem"]}>
						<Text fontWeight="medium" color="white" fontSize={["1.25rem","2rem" ]}>5 Continentes, <br/>infinitas possibilidades.</Text>
						<Text fontWeight="normal"  color="gray.100" fontSize={["0.875rem","xl"]} mt={"1.25rem"}>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
					</Box>
					<Image
					  position="relative"
					  right="1"
					  bottom={["-10","-16"]}
					  w={["300px","300px","300px","430px"]}
					  display={['none','none',
					  'block']}
					  src='/Airplane.svg'
					  alt="Aviao"
					/>
			</Flex>
		</Flex>
  )
}
