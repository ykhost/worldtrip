import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { City } from "./City";

export function Slide() {
  return (
    <Flex w="100%" height={["15.62rem","28.125rem"]} maxW={"77.5rem"} mx="auto" mb={"10"}  mt={"3.25rem"}>
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true}}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 4000
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <Link href="/continent/europe">
            <Flex
              as="a"
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage="url(/europe.png)"
              bgRepeat="no-react"
              bgSize="cover"
              textAlign="center"
              bgPosition="center"
            >
              <Heading fontSize={["1.25rem","3rem"]} color="gray.50">Europa</Heading>
              <Text fontSize={["0.85rem","1.25rem"]} color="gray.50" fontWeight="bold">O continente mais antigo.</Text>
            </Flex>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <City href="europe" bgImage="europe" description="Pa e bola nas europa" city="Guainazes"/>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </Flex>
  );
}
