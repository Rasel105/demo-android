import { StyleSheet } from 'react-native'
import * as React from 'react';
import { Box, Center, VStack } from "native-base";

export default function Parameters() {
    return (
        <Box>
            <Box style={{ marginBottom: 10, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <VStack space={4} alignItems="center">
                    <Center w="48" h="16" bg="indigo.100" rounded="md" shadow={3} _text={{
                        color: "black",
                        fontWeight: "medium",
                        fontSize: "xl"
                    }}>Max Volt: 3.85 V</Center>
                </VStack>
                <VStack space={4} alignItems="center">
                    <Center w="48" h="16" bg="indigo.100" rounded="md" shadow={3} _text={{
                        color: "black",
                        fontWeight: "medium",
                        fontSize: "xl"
                    }}>Min Volt: 3.30 V</Center>
                </VStack>
            </Box>
            <Box style={{ marginBottom: 10, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <VStack space={4} alignItems="center">
                    <Center w="48" h="16" bg="red.100" rounded="md" shadow={3} _text={{
                        color: "black",
                        fontWeight: "medium",
                        fontSize: "xl"
                    }}>Avg. Cell Volt: 3.8 V</Center>
                </VStack>
                <VStack space={4} alignItems="center">
                    <Center w="48" h="16" bg="red.100" rounded="md" shadow={3} _text={{
                        color: "black",
                        fontWeight: "medium",
                        fontSize: "xl"
                    }}>Max Temp: 31.10 °C</Center>
                </VStack>
            </Box>
            <Box style={{ marginBottom: 10, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <VStack space={4} alignItems="center">
                    <Center w="48" h="16" bg="green.100" rounded="md" shadow={3} _text={{
                        color: "black",
                        fontWeight: "medium",
                        fontSize: "xl"
                    }}>Min Temp: 10 °C</Center>
                </VStack>
                <VStack space={4} alignItems="center">
                    <Center w="48" h="16" bg="green.100" rounded="md" shadow={3} _text={{
                        color: "black",
                        fontWeight: "medium",
                        fontSize: "xl"
                    }}>MOS Temp: 10 °C</Center>
                </VStack>
            </Box>
            <Box style={{ marginBottom: 10, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <VStack space={4} alignItems="center">
                    <Center w="48" h="16" bg="indigo.100" rounded="md" shadow={3} _text={{
                        color: "black",
                        fontWeight: "medium",
                        fontSize: "xl"
                    }}>Battery Power: 0.0 W</Center>
                </VStack>
                <VStack space={4} alignItems="center">
                    <Center w="48" h="16" bg="indigo.100" rounded="md" shadow={3} _text={{
                        color: "black",
                        fontWeight: "medium",
                        fontSize: "xl"
                    }}>Battery Capacity: 40 AH
                    </Center>
                </VStack>
            </Box>
            <Box style={{ marginBottom: 10, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <VStack space={4} alignItems="center">
                    <Center w="48" h="16" bg="red.100" rounded="md" shadow={3} _text={{
                        color: "black",
                        fontWeight: "medium",
                        fontSize: "xl"
                    }}>Remain Capacity: 3.6 AH</Center>
                </VStack>
                <VStack space={4} alignItems="center">
                    <Center w="48" h="16" bg="red.100" rounded="md" shadow={3} _text={{
                        color: "black",
                        fontWeight: "medium",
                        fontSize: "xl"
                    }}>Cycle Count: 4</Center>
                </VStack>
            </Box>
            <Box style={{ marginBottom: 10, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <VStack space={4} alignItems="center">
                    <Center w="48" h="16" bg="green.100" rounded="md" shadow={3} _text={{
                        color: "black",
                        fontWeight: "medium",
                        fontSize: "xl"
                    }}>BMS: 95</Center>
                </VStack>
            </Box>
        </Box>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    labelText: {
        fontSize: 20,
        marginVertical: 5
    },
    parameters: {
        display: 'flex',
        flexDirection: 'row'
    },
    parameters: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        marginBottom: 10,
    },
    square: {
        backgroundColor: "#7cb48f",
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 5,
        fontSize: 20,
        color: "#2d4eb7"
    },
})