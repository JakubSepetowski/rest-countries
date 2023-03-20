import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux';
import { countrySlice } from '../../store/countires-slice';
import { Cart } from './Cart';

export const Carts = () => {
	const dispatch = useDispatch();
	const countries = useSelector((state: any) => state.countries.filteredArray);
	const isEmpty = useSelector((state: any) => state.countries.isEmpty);
	const dark = useSelector((state: any) => state.theme.isDark);

	const getData = async () => {
		const res = await fetch('data.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		const data = await res.json();
		const redcuedData: any = [];
		data.forEach((country: any) => {
			redcuedData.push({
				id: country.numericCode,
				name: country.name,
				population: country.population,
				capital: country.capital,
				region: country.region,
				flag: country.flag,
			});
		});
		console.log(redcuedData);

		dispatch(countrySlice.actions.init(redcuedData));
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			{isEmpty && (
				<p className={`mx-auto mt-5 ${dark ? ' text-dark-mode-text' : ' text-light-mode-text'}`}>
					Nothing found for Your query, try again!
				</p>
			)}
			{!isEmpty &&
				countries.map((country: any) => (
					<Cart
						key={country.id}
						name={country.name}
						pop={country.population}
						cap={country.capital}
						reg={country.region}
						flag={country.flag}></Cart>
				))}
		</>
	);
};
