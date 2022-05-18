import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { Types } from "./Types";


export function TravelTypes(){
  return(
    <Flex
      justifyContent="center"
      mt={["1rem","20"]}
      mx="auto"
      maxWidth={[275,1280]}
      padding={["0","2rem"]}
      width={"100%"}
    >
      <Grid
        templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
        w="100%"
        justifyContent="space-between"
        justifyItems="space-around"
        alignItems="center"
        mt={["10","32"]}
        mx="auto"
        maxW="1160px"
        flexWrap="wrap"
        gap={[1,5]}
      >
        <GridItem>
          <Types icon="cocktail" text="Vida nortuna" iconAlt="Cocktail"/>
        </GridItem>

        <GridItem>
          <Types icon="surf" text="Praia" iconAlt="Prancha de surf"/>
        </GridItem>

        <GridItem>
          <Types icon="building" text="Moderno" iconAlt="Predio"/>
        </GridItem>

        <GridItem>
          <Types icon="museum" text="Classico" iconAlt="Musel"/>
        </GridItem>

        <GridItem colSpan={[2,2,2,1]}>
          <Types icon="earth" text="e muito mais..." iconAlt="Planeta terra"/>
        </GridItem>
      </Grid>
    </Flex>
  )
}
