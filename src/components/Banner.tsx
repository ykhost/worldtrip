import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner(){
  return(
    <Box w="100%" h={'20.9375rem'} >
			<Image
				  position="absolute"
				  zIndex="-1"
				  w="100%"
				  h={'20.9375rem'}
				  objectFit='cover'
				  src="/background.png"
          alt="Céu estrelado"
      />

			<Flex
        direction="row"
			  h="100%"
			  justifyContent="space-between"
			  align="center"
			  mx="auto"
			  maxWidth={1280}
        padding={"2rem"}
      >
					<Box
					  maxWidth={"32.75rem"}
          >
						<Text fontWeight="medium" color="white" fontSize="4xl">5 Continentes, <br/>infinitas possibilidades.</Text>
						<Text fontWeight="normal"  color="gray.100" fontSize="xl" mt={"1.25rem"}>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>

					</Box>
					<Image position="relative" right="1" bottom="-16" width={"26rem"} height="" src='/Airplane.svg' alt="Aviao"/>
			</Flex>
		</Box>
  )
}
