import * as React from "react"
import { Stack, Flex, Button, Text, VStack } from "@chakra-ui/react"
import background from "../images/background.jpg"

export const Hero = () => {
  return (
    <Flex backgroundImage="url(${background})">
      <VStack>
        <Stack>
          <Text></Text>
          <Stack></Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}
