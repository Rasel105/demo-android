import { Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import Materaial from 'react-native-vector-icons/MaterialIcons'
import { Stack, Input, Icon, Button, Box, Text } from 'native-base';
import LoginTopAlert from './LoginTopAlert';
const AccountScreen = ({ navigation }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [show, setShow] = React.useState(false);

  return (
    <>
      <Stack space={4} w="100%" alignItems="center">
        <Box mt={3} mb={4} borderRadius={"full"}>
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 200, height: 50 }}
          />
        </Box>
        <LoginTopAlert />
        
        <Input size="2xl" h={'55px'} w={{
          base: "85%",
          md: "25%"
        }} borderRadius={'full'} InputLeftElement={<Icon as={<Ionic name="person-outline" />} size={8} ml="4" color="muted.400" />} placeholder="Name" />
        
        <Input size="2xl" h={'55px'} w={{
          base: "85%",
          md: "25%"
        }} borderRadius={'full'} InputLeftElement={<Icon as={<Ionic name="mail-outline" />} size={8} ml="4" color="muted.400" />} placeholder="Email" />
        
        <Input size="2xl" h={'55px'} w={{
          base: "85%",
          md: "25%"
        }} borderRadius={'full'} InputLeftElement={<Icon as={<Ionic name="call-outline" />} size={8} ml="4" color="muted.400" />} placeholder="Phone" />


        <Input size="2xl" h={'55px'} w={{
          base: "85%",
          md: "25%"
        }} type={show ? "text" : "password"} borderRadius={'full'} InputLeftElement={<Icon as={<Ionic name="lock-closed-outline" />} size={8} ml="4" color="muted.400" />} InputRightElement={<Pressable onPress={() => setShow(!show)}>
          
          <Icon as={<Materaial name={show ? "visibility" : "visibility-off"} />} size={8} mr="4" color="muted.400" />
        </Pressable>} placeholder="Password" />
        
        <Input size="2xl" h={'55px'} w={{
          base: "85%",
          md: "25%"
        }} type={show ? "text" : "password"} borderRadius={'full'} InputLeftElement={<Icon as={<Ionic name="lock-closed-outline" />} size={8} ml="4" color="muted.400" />} InputRightElement={<Pressable onPress={() => setShow(!show)}>
          
          <Icon as={<Materaial name={show ? "visibility" : "visibility-off"} />} size={8} mr="4" color="muted.400" />
        </Pressable>} placeholder="Confirm Password" />

        {/* Button */}
        <Box p="2" flex="1" w={{
          base: "85%",
          md: "25%"
        }} mt={'4'}>
          <TouchableOpacity>
            <Button backgroundColor={"#212C64"} borderRadius={'full'} fontSize={'2xl'} h={'12'}>
              <Text style={{ fontSize: 22, color: "white" }}>Create</Text>
            </Button>
          </TouchableOpacity>
        </Box>
        <Box p="2" flex="1" w={{
          base: "85%",
          md: "25%"
        }} mt={8}>
          <TouchableOpacity>
            <Button bg={'gray.100'} borderColor={'gray.700'} borderWidth={'1'} borderRadius={'full'} fontSize={'2xl'} h={'12'}>
              <Text style={{ fontSize: 22, color: "#212C64" }} onPress={() => navigation.navigate('Login')}>Already have an account</Text>
            </Button>
          </TouchableOpacity>
        </Box>
      </Stack>
    </>
  )
}

export default AccountScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 60,
    width: 250,
    height: 80
  },

  inputView: {
    backgroundColor: "#b6edfc",
    borderRadius: 30,
    width: "90%",
    height: 50,
    marginBottom: 20,
    borderRadius: 25,
    elevation: 2,
    fontSize: 22,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginText: {
    fontSize: 17
  },
  forgot_button: {
    height: 20,
    marginBottom: 30,
    color: "red",
  },

  loginBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#61dafb",
    color: "white",
    elevation: 4
  },
});