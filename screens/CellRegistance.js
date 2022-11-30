import * as React from 'react';
import { Box, Center, VStack } from 'native-base'

export default function CellRegistance() {
    return (
        <Box>
            <Box style={{ marginBottom: 15, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5} marginRight={'3'}>
                    <Center w="2/4" h="12" bg="info.800" roundedLeft={'md'} shadow={3} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>1</Center>
                    <Center w="2/4" h="12" bg="gray.100" roundedRight={'md'} shadow={3} _text={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>3.17 °C</Center>
                </VStack>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5}>
                    <Center w="2/4" h="12" bg="info.800" roundedLeft={'md'} shadow={3} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>2</Center>
                    <Center w="2/4" h="12" bg="gray.100" roundedRight={'md'} shadow={3} _text={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>2.34 °C</Center>
                </VStack>
            </Box>
            <Box style={{ marginBottom: 15, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5} marginRight={'3'}>
                    <Center w="2/4" h="12" bg="info.800" roundedLeft={'md'} shadow={3} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>3</Center>
                    <Center w="2/4" h="12" bg="gray.100" roundedRight={'md'} shadow={3} _text={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>3.23 °C</Center>
                </VStack>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5}>
                    <Center w="2/4" h="12" bg="info.800" roundedLeft={'md'} shadow={3} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>4</Center>
                    <Center w="2/4" h="12" bg="gray.100" roundedRight={'md'} shadow={3} _text={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>1.44 °C</Center>
                </VStack>
            </Box>
        </Box>
    )
}
