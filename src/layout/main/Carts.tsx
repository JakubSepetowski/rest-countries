import { useSelector } from 'react-redux';
import { Cart } from './Cart';
import { RootState } from '../../store/store';

export const Carts = () => {
	const countries = useSelector((state: RootState) => state.countries.filteredArray);
	const isEmpty = useSelector((state: RootState) => state.countries.isEmpty);
	const dark = useSelector((state: RootState) => state.theme.isDark);

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
						id={country.code}
						name={country.name}
						pop={country.population}
						cap={country.capital}
						reg={country.region}
						flag={country.flag}></Cart>
				))}
		</>
	);
};
