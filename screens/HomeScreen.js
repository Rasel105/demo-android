import { Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Center, VStack } from 'native-base';
import TopContainer from './TopContainer';
import Parameters from './Parameters';
import CellVoltage from './CellVoltage';
import CellRegistance from './CellRegistance';

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <TopContainer />
            <Text style={styles.labelText}>Sum Voltage</Text>
            <VStack space={4} alignItems="center">
                <Center w="full" h="32" bg="indigo.100" rounded="md" shadow={'9'} _text={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: '6xl'
                }}>48.0 V</Center>
            </VStack>
            <Text style={styles.labelText}>Current</Text>
            <VStack space={4} alignItems="center">
                <Center w="full" h="32" bg="gray.100" rounded="md" shadow={'9'} _text={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: '6xl'
                }}>0.0 A</Center>
            </VStack>
            <Text style={styles.labelText}>SOC</Text>
            <VStack space={4} alignItems="center">
                <Center w="full" h="32" bg="green.50" rounded="md" shadow={'9'} _text={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: '6xl'
                }}>SOC</Center>
            </VStack>
            <Text style={styles.labelText}>Parameters</Text>
            {/* <TouchableOpacity
      onPress={()=> {navigation.navigate("Parameters")}}
        style={{ backgroundColor: 'red', borderRadius: 10 }}>
        <Text style={{ padding: 15, color: "while" }}>Parameter</Text>
      </TouchableOpacity> */}
            <Parameters />
            <Text style={styles.labelText}>Cell Volatage</Text>
            <CellVoltage />
            <Text style={styles.labelText}>Cell Registance</Text>
            <CellRegistance />
        </ScrollView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 10,
        marginTop: 40,
        backgroundColor: "white"
    },
    sumvolt: {
        fontSize: 20,
        color: "#333333",

    },
    current: {
        backgroundColor: "rgba(44, 64, 149, 0.1);",
        padding: 20,
        borderRadius: 10,
        fontSize: 60,
        textAlign: "center",
        color: "#333333"
    },
    soc: {
        backgroundColor: "rgba(56, 146, 210, 0.1);",
        padding: 20,
        borderRadius: 10,
        fontSize: 60,
        textAlign: "center",
        color: "#333333"
    },
    labelText: {
        fontSize: 22,
        marginVertical: 20,
        fontWeight: "bold",
        borderBottomColor: "red",
    },

});
