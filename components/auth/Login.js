import React from 'react';
import axios from 'axios';
import {
	View,
	Text,
	TouchableOpacity,
	StatusBar,
	SafeAreaView,
	StyleSheet,
	TextInput,
	Image,
	Button,
	ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default Login = ({ navigation }) => {
	const [ username, onChangeUsername ] = React.useState(null);
	const [ password, onChangePassword ] = React.useState(null);
	const params = new FormData();
	params.append('username', username);
	params.append('password', password);
	const handleClick = async () => {

		try{
		
         axios.post('https://salon-app.000webhostapp.com/login.php', params,{ headers: { "Content-Type": "multipart/form-data" }
		})
         .then(function (response){
			if(response.data > 0){
				ToastAndroid.show("Uspesno ste se prijavili!",ToastAndroid.SHORT);
				navigation.navigate('Store',{user_id:response.data});
			}
			else
				ToastAndroid.show(response.data,ToastAndroid.SHORT);
		 });
		}
		catch(error){
				ToastAndroid.show(error,ToastAndroid.SHORT);
		}
   };

   return (
	<View style={styles.container}>
		<Text style={styles.homeTitle}>Prijava</Text>
		<Image style={styles.image} source={require('../../assets/logo.jpg')} />
		<SafeAreaView>
			<View style={styles.emailContainer}>
				<Icon name="user" size={25} style={{marginTop:20}} color="#000" />
				<TextInput
					style={styles.input}
					onChangeText={onChangeUsername}
					value={username}
					placeholder="Korisničko ime"
					autoCapitalize='none'
					leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
				/>
			</View>
			<View style={styles.emailContainer}>
				<Icon name="user" size={25}  style={{marginTop:20}} color="#000" />
				<TextInput
					style={styles.input}
					onChangeText={onChangePassword}
					value={password}
					secureTextEntry={true}
					autoCapitalize='none'
					placeholder="Lozinka"
				/>
			</View>
			{/* <TouchableOpacity>
				<Text style={styles.forgot_button}>Zaboravio/la sam lozinku?</Text>
			</TouchableOpacity> */}
		</SafeAreaView>
		<StatusBar style="auto" />

		<TouchableOpacity style={styles.loginBtn} onPress={() => handleClick(this)}>
			<Text style={styles.loginText} color="#841584">
				Prijava
			</Text>
		</TouchableOpacity>
		<Text style={styles.accountText}>
			Nemaš nalog?
		</Text>
		<TouchableOpacity onPress={() => navigation.navigate('Register')}>
				<Text style={styles.signUp}>Registruj se!</Text>
			</TouchableOpacity>
	</View>
);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	emailContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	homeTitle: {
		padding: 50
	},
	image: {
		width: 200,
		height: 200
		// marginBottom: 40,
		// marginTop: 100,
		// marginLeft:20,
		// marginRight: 20
	},
	input: {
		height: 40,
		width: 240,
		margin: 12,
		borderWidth: 1,
		padding: 10
	},
	forgot_button: {
		marginLeft: 10
	},
	loginBtn: {
		width: '50%',
		borderRadius: 25,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40,
		backgroundColor: 'green',
		color: 'white'
	},
	loginText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white'
		// fontFamily:"fangsong"
	},
	homeTitle: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'green'
		// fontFamily:"fangsong"
	},
	accountText: {
		marginTop: 20
	},
	signUp: {
		color: 'green',
	}
});
