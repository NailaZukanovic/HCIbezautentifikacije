import React from "react";
import axios from 'axios';
import {View,Text,TouchableOpacity,StatusBar, SafeAreaView, StyleSheet, TextInput,Image, Button,ToastAndroid } from "react-native";

export default Register = ({navigation}) => {
  const [password1, onChangePassword1] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [username, onChangeUsername] = React.useState(null);
  
  
  
  
  
  const params = new FormData();
	params.append('username', username);
	params.append('password', password);
  params.append('password1', password1);

  const handleClick = async () => {

    if(password != password1)
    {
      ToastAndroid.show("Lozinke nisu iste!",ToastAndroid.SHORT);
    }
    else
    {
         axios.post('https://salon-app.000webhostapp.com/register.php', params,{ headers: { "Content-Type": "multipart/form-data" }
		})
         .then(function (response){
				ToastAndroid.show(response.data,ToastAndroid.SHORT);
        navigation.navigate('Login');
		 });
    }
   };

    return (
    <View style={styles.container}>
      <Text style={styles.homeTitle}>Registracija</Text>
       <Image style={styles.image} source = {require("../../assets/logo.jpg")}/>
          <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        autoCapitalize='none'
        placeholder="Korisničko ime"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        autoCapitalize='none'
        placeholder="Lozinka"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword1}
        value={password1}
        autoCapitalize='none'
        secureTextEntry={true}
        placeholder="Ponovite lozinku"
      />
    </SafeAreaView>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.loginBtn}  onPress={() => handleClick(this)}>
        <Text style={styles.loginText} color="#841584" >Registruj se!</Text>
      </TouchableOpacity>
      <Text style={styles.accountText}>Već imate nalog 
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={styles.signIn}>Prijavite se!</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeTitle:{
    paddingTop:20
  },
  image:{
    width: 200,
    height: 200,
    // marginBottom: 40,
    // marginTop: 100,
    // marginLeft:20,
    // marginRight: 20
  },
  input: {
    height: 40,
    width:240,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "green",
    color:"white"
  },
  loginText:{
    fontSize: 20,
    fontWeight: "bold",
    color:"white",
    // fontFamily:"fangsong"
    
  },
  homeTitle:{
    fontSize: 25,
    fontWeight: "bold",
    color:"green",
    // fontFamily:"fangsong"
  },
  accountText:{
      paddingTop:20
  },
  signIn:{
      color:"green"
  }
});