import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface CityProps {
  href?: string;
  bgImage: string;
  city: string;
  description: string;
}

export function City({href, bgImage, city, description}:CityProps){
  return (
    <Link href={`/continent/${href}`}>
      <Flex
        as="a"
        w="100%"
        h="100%"
        align="center"
        justify="center"
        direction="column"
        bgImage={`url(/${bgImage}.png)`}
        bgRepeat="no-react"
        bgSize="cover"
        textAlign="center"
        bgPosition="center"
      >
        <Heading fontSize={["1.25rem","3rem"]} color="gray.50">{city}</Heading>
        <Text fontSize={["0.85rem","1.25rem"]} color="gray.50" fontWeight="bold">{description}</Text>
      </Flex>
    </Link>
  )
}
