import * as React from 'react';
import { Box, Center, VStack } from "native-base";

export default function CellVoltage() {
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
                    }}>2.34 V</Center>
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
                    }}>3.23 V</Center>
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
                    }}>3.23 V</Center>
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
                    }}>1.44 V</Center>
                </VStack>
            </Box>
            <Box style={{ marginBottom: 15, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5} marginRight={'3'}>
                    <Center w="2/4" h="12" bg="info.800" roundedLeft={'md'} shadow={3} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>5</Center>
                    <Center w="2/4" h="12" bg="gray.100" roundedRight={'md'} shadow={3} _text={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>3.23 V</Center>
                </VStack>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5}>
                    <Center w="2/4" h="12" bg="info.800" roundedLeft={'md'} shadow={3} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>6</Center>
                    <Center w="2/4" h="12" bg="gray.100" roundedRight={'md'} shadow={3} _text={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>2.5 V</Center>
                </VStack>
            </Box>
            <Box style={{ marginBottom: 15, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5} marginRight={'3'}>
                    <Center w="2/4" h="12" bg="info.800" roundedLeft={'md'} shadow={3} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>7</Center>
                    <Center w="2/4" h="12" bg="gray.100" roundedRight={'md'} shadow={3} _text={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>3.17 V</Center>
                </VStack>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5}>
                    <Center w="2/4" h="12" bg="info.800" roundedLeft={'md'} shadow={3} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>8</Center>
                    <Center w="2/4" h="12" bg="gray.100" roundedRight={'md'} shadow={3} _text={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>2.5 V</Center>
                </VStack>
            </Box>
            <Box style={{ marginBottom: 15, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5} marginRight={'3'}>
                    <Center w="2/4" h="12" bg="info.800" roundedLeft={'md'} shadow={3} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>9</Center>
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
                    }}>10</Center>
                    <Center w="2/4" h="12" bg="gray.100" roundedRight={'md'} shadow={3} _text={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>3.17 V</Center>
                </VStack>
            </Box>
            <Box style={{ marginBottom: 15, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5} marginRight={'3'}>
                    <Center w="2/4" h="12" bg="info.800" roundedLeft={'md'} shadow={3} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>11</Center>
                    <Center w="2/4" h="12" bg="gray.100" roundedRight={'md'} shadow={3} _text={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>2.34 V</Center>
                </VStack>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5}>
                    <Center w="2/4" h="12" bg="info.800" roundedLeft={'md'} shadow={3} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>12</Center>
                    <Center w="2/4" h="12" bg="gray.100" roundedRight={'md'} shadow={3} _text={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>2.34 V</Center>
                </VStack>
            </Box>
            <Box style={{ marginBottom: 15, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5} marginRight={'3'}>
                    <Center w="2/4" h="12" bg="info.800" roundedLeft={'md'} shadow={3} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>13</Center>
                    <Center w="2/4" h="12" bg="gray.100" roundedRight={'md'} shadow={3} _text={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>2.34 V</Center>
                </VStack>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5}>
                    <Center w="2/4" h="12" bg="info.800" roundedLeft={'md'} shadow={3} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>14</Center>
                    <Center w="2/4" h="12" bg="gray.100" roundedRight={'md'} shadow={3} _text={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>2.34 V</Center>
                </VStack>
            </Box>
            <Box style={{ marginBottom: 15, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5} marginRight={'3'}>
                    <Center w="2/4" h="12" bg="info.800" roundedLeft={'md'} shadow={3} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>15</Center>
                    <Center w="2/4" h="12" bg="gray.100" roundedRight={'md'} shadow={3} _text={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>2.34 V</Center>
                </VStack>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5}>
                    <Center w="2/4" h="12" bg="info.800" roundedLeft={'md'} shadow={3} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>16</Center>
                    <Center w="2/4" h="12" bg="gray.100" roundedRight={'md'} shadow={3} _text={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>2.34 V</Center>
                </VStack>
            </Box>
            <Box style={{ marginBottom: 15, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5} marginRight={'3'}>
                    <Center w="2/4" h="12" bg="info.800" roundedLeft={'md'} shadow={3} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>17</Center>
                    <Center w="2/4" h="12" bg="gray.100" roundedRight={'md'} shadow={3} _text={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>2.34 V</Center>
                </VStack>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5}>
                    <Center w="2/4" h="12" bg="info.800" roundedLeft={'md'} shadow={3} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>18</Center>
                    <Center w="2/4" h="12" bg="gray.100" roundedRight={'md'} shadow={3} _text={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>2.34 V</Center>
                </VStack>
            </Box>
            <Box style={{ marginBottom: 15, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5} marginRight={'3'}>
                    <Center w="2/4" h="12" bg="info.800" roundedLeft={'md'} shadow={3} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>19</Center>
                    <Center w="2/4" h="12" bg="gray.100" roundedRight={'md'} shadow={3} _text={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}>2.34 V</Center>
                </VStack>
                <VStack space={4} alignItems="center" flex={1} flexDirection={'row'} borderRadius={5}>
                    <Center w="2/4" h="12" roundedLeft={'md'} _text={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 'xl'
                    }}></Center>
                    <Center w="2/4" h="12" bg="white" roundedRight={'md'}></Center>
                </VStack>
            </Box>
        </Box>
    )
}


