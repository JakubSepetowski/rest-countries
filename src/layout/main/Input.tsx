import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { countrySlice } from '../../store/countires-slice';

export const Input = () => {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');
	const dark = useSelector((state: any) => state.theme.isDark);

	const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;
		setSearch(input);
		if (input.trim() !== '') dispatch(countrySlice.actions.searchFor(input));
	};
	
	const submitHanlder = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form className='relative' onSubmit={submitHanlder}>
			<input
				value={search}
				onChange={searchHandler}
				className={`p-2 pl-10  rounded-md shadow-md md:w-96 md:p-3 md:pl-14 ${
					dark ? 'bg-dark-el text-dark-mode-text' : 'bg-dark-mode-text text-light-mode-text'
				} `}
				type='text'
				placeholder='Search for a country...'
			/>
			<i className='absolute top-2/4 translate-y-[-50%] left-0 p-2 md:p-3 md:pl-5'>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</i>
			
		</form>
	);
};
