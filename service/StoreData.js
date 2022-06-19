import { AsyncStorage } from 'react-native';
import axios from 'axios';

export const getStoreData = (location) => {
	// axios.get('http://192.168.43.173:3000/api/store/all').then(res => console.log("*************",res)).catch(err=> console.log("#######",err));
	let res = [
		{
			name: 'Novi Pazar',
			work: 'Muški frizer',
			price: '500',
			avatar:
				'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
		},
		{
			name: 'Kraljevo',
			work: 'Muški frizer',
			price: '500',
			avatar:
				'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
		},
		{
			name: 'Novi Pazar',
			work: 'Ženski frizer',
			price: '1000',
			avatar:
				'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
		},
		{
			name: 'Raška',
			work: 'Muški frizer',
			price: '500',
			avatar:
				'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
		},
		{
			name: 'Kragujevac',
			work: 'Ženski frizer',
			price: '1100',
			avatar:
				'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
		},
		{
			name: 'Čačak',
			work: 'Ženski frizer',
			price: '800',
			avatar:
				'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
		}
	];

	if (location == 'Galle') {
		res = [
			{
				name: 'Novi Pazar',
				work: 'Muški frizer',
				price: '500',
				avatar:
					'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
			},
			{
				name: 'Novi Pazar',
				work: 'Ženski frizer',
				price: '1000',
				avatar:
					'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
			}
		];
	}

    if (location == 'Colombo') {
		res = [
			{
				name: 'Kragujevac',
				work: 'Ženski frizer',
				price: '1100',
				avatar:
					'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
			}
		];
	}
	// AsyncStorage.setItem('store-data', res)
	return res;
};

export const getBookedData = () => {
	// axios.get('http://192.168.43.93:3000/api/store/all').then(res => console.log("*************",res)).catch(err=> console.log("#######",err));
	const res = [
		{
			name: 'Novi Pazar',
			date: '2022-06-11',
			address: 'Stevana Nemanje 64',
			price: '900',
			validity: 'Novi',
			color: 'green',
			avatar:
				'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
		},
		{
			name: 'Novi Pazar',
			date: '2022-06-11',
			address: 'Stevana Nemanje 64',
			price: '900',
			validity: 'Novi',
			color: 'green',
			avatar:
				'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
		},
		{
			name: 'Novi Pazar',
			date: '2022-06-11',
			address: 'Stevana Nemanje 64',
			price: '900',
			validity: 'Novi',
			color: 'green',
			avatar:
				'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
		},
		{
			name: 'Novi Pazar',
			date: '2022-06-11',
			address: 'Stevana Nemanje 64',
			price: '900',
			validity: 'Novi',
			color: 'green',
			avatar:
				'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
		}
	];
	// AsyncStorage.setItem('store-data', res)
	return res;
};
