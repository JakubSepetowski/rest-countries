import { Header } from './layout/header/Header';
import { Main } from './layout/main/Main';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { countrySlice } from '../src/store/countires-slice';
import { Country, Data } from './types/types';

let isInitital = true;
export const App = () => {
	const dispatch = useDispatch();

	const getData = async () => {
		if (!isInitital) return;
		const res = await fetch('data.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		const data: Data[] = await res.json();
		const redcuedData: Country[] = [];
		data.forEach((country) => {
			redcuedData.push({
				id: country.numericCode,
				code: country.alpha3Code,
				name: country.name,
				population: country.population,
				capital: country.capital,
				region: country.region,
				flag: country.flag,
				subregion: country.subregion,
				topLevelDomain: country.topLevelDomain,
				languages: country.languages,
				currencies: country.currencies,
				nativeName: country.nativeName,
				borders: country.borders,
			});
		});
		dispatch(countrySlice.actions.init(redcuedData));
	};

	useEffect(() => {
		getData();

		return () => {
			isInitital = false;
		};
	}, []);

	return (
		<>
			<Header />
			<Main />
		</>
	);
};
