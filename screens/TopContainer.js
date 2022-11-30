import { StyleSheet } from 'react-native'
import * as React from 'react';
import { Box, Heading, Stack, VStack, Text } from 'native-base';

export default function TopContainer() {
    return (
        <VStack space={4}>
            <Box alignItems="center">
                <Box w="full" rounded="lg" overflow="hidden" borderColor="blue.100" borderWidth="1" _light={{
                    backgroundColor: "info.800"
                }}>
                    <Stack p="4" space={3}>
                        <Stack space={2} flex={1} flexDirection={'row'} justifyContent={'space-between'}>
                            <Heading size="md" color={'white'}>
                                Time: <Text fontSize="xl" fontWeight={'bold'}>10: 01PM</Text>
                            </Heading>
                            <Heading size="md" color={'white'}>
                                Updated Time: <Text fontSize="xl" fontWeight={'bold'}>10: 00PM</Text>
                            </Heading>
                        </Stack>
                        <Stack space={2} flex={1} flexDirection={'row'} justifyContent={'space-between'}>
                            <Heading size="md" color={'white'}>
                                Charge: <Text fontSize="xl" fontWeight={'bold'}>ON</Text>
                            </Heading>
                            <Heading size="md" color={'white'}>
                                Discharge: <Text fontSize="xl" fontWeight={'bold'}>ON</Text>
                            </Heading>
                            <Heading size="md" ml="-1" color={'white'}>
                                Balance: <Text fontSize="xl" fontWeight={'bold'}>OFF</Text>
                            </Heading>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </VStack>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0773af",
        borderRadius: 5,
        padding: 30,
    }

});
