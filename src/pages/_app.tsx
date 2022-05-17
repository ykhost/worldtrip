import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../styles/themes"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/slider.scss"

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)

}

export default MyApp
