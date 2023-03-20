import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countrySlice } from '../../store/countires-slice';

export const Filter = () => {
	const dispatch = useDispatch();
	const dark = useSelector((state: any) => state.theme.isDark);


	const selectOptionHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		const selected = e.target.value;
		dispatch(countrySlice.actions.changeFilter(selected));
	};

	return (
		<select
			defaultValue={'Filter by Region'}
			onChange={selectOptionHandler}
			className={`mt-5 w-40 md:mt-0 p-2 rounded-md shadow-md md:p-3  md:w-48 ${
				dark ? 'bg-dark-el text-dark-mode-text' : 'bg-dark-mode-text text-light-mode-text'
			} `}>
			<option value={'Filter by Region'} disabled>
				Filter by Region
			</option>
			<option value='0'>All</option>;<option value='Africa'>Africa</option>
			<option value='Americas'>America</option>
			<option value='Asia'>Asia</option>
			<option value='Europe'>Europe</option>
			<option value='Oceania'>Oceania</option>
		</select>
	);
};
