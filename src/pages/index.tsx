/* eslint-disable jsx-a11y/alt-text */
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { Slide } from '../components/Slide/index.ts'
import { TravelTypes } from '../components/TravelTypes'

export default function Home() {
	return (
		<Flex direction="column">
			<Header />
			<Banner />
			<TravelTypes />
			<Flex justifyContent="center" w="100vw">
				<Box w={"5.625rem"} border="1px" m={"5rem"} borderColor="gray.700" />
			</Flex>
			<Box display="block">
				<Text textAlign="center" fontSize={"2.25rem"} fontWeight="medium">Vamos nessa? <br/>Então escolha seu continente</Text>
			</Box>
			<Slide />
		</Flex>
	)
}
