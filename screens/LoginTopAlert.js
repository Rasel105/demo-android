import React from 'react'
import { Alert, VStack, HStack, Text, Center } from "native-base";
export default function LoginTopAlert() {
    return <Center>
        <Alert shadow={3} p={5} mb={2} borderRadius={'lg'} w={{
            base: "85%"
        }} status="info" colorScheme="black">
            <VStack space={2} flexShrink={1} w="100%">
                <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                    <HStack flexShrink={1} space={2} alignItems="center">
                        <Alert.Icon size={5} />
                        <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                            You need to create an account / login to your exising account to procees.
                        </Text>
                    </HStack>
                </HStack>
            </VStack>
        </Alert>
    </Center>
}