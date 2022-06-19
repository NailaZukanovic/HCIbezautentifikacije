import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/FontAwesome';


export default (DateSelect = ({ navigation }) => {
	const [ selectDate, setDate ] = React.useState('');
	const onDateChange = (date) => {
		setDate(date);
	};
	const today = new Date();
	var desableDates = ['2022-06-23','2022-06-27','2022-06-30','2022-06-19','2022-06-20']
	//axios.get('https://salon-app.000webhostapp.com/bookings_date.php').then(res => desableDates=res).catch(err=> console.log("#######",err))
	
	for(let i = 0; i < 0; i++){
		console.log(Math.floor(Math.random() * 30) + 1);
		desableDates.push("2022-06-"+Math.floor(Math.random() * 30) + 1); 
	}
	
	useEffect(() => {}, [ selectDate ]);
	
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Odaberi datum</Text>
			<View style={styles.calendar}>
				<CalendarPicker
					 todayTextStyle={{fontWeight: 'bold'}}
					 todayBackgroundColor={'transparent'}
					 minDate={today}
					 disabledDates= {desableDates}
					 disabledDatesTextStyle={{backgroundColor:"orange", color:"black",borderRadius:15, width:30,height:25,textAlign:"center"}}
					 onDateChange = {date => onDateChange(date)}
					 
					//  selectedStartDate='2021-10-01T00:00:00.00Z'
					// minDate= '2021-10-01T00:00:00.00Z'
					//  maxDate= '2021-10-31T00:00:00.00Z'
				/>
				<View style={{flexDirection: 'row',paddingTop:40, marginLeft:30}}>
				<Icon name="circle" size={25} color="orange"/>
				<Text> Već rezervisano</Text>
				</View>
			</View>
			<View style={styles.nextButton}>
				{/* <Text>{startdate}</Text> */}
				<TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('PickTime',selectDate)}>
					{/* <Icon name="facebook" size={35} color="orange"/> */}
					<Text style={styles.next}>Dalje</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'green',
		top: 10,
		left: 20
		// fontFamily:"fangsong"
	},
	calendar: {
		flex: 2,
		marginTop: 20
	},
	iconBtn: {
		width: 100,
		backgroundColor: 'green',
		alignItems: 'center',
		borderRadius: 25,
		padding:5,
		height:40
	},
	nextButton: {
		marginTop: '70%',
		left: '60%',
		flex: 3,
		textAlign:"center"
	},
	next: {
		color: 'white',
		width: 50,
		fontSize: 20,
		height: 40,
		borderRadius: 20
	}
});
