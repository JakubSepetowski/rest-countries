import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux/es/exports';
import { themeSlice } from '../../store/theme-slice';
import { useSelector } from 'react-redux';

export const Header = () => {
	const dispatch = useDispatch();
	const dark = useSelector((state: any) => state.theme.isDark);

	const themeSwitchHanlder = () => {
		dispatch(themeSlice.actions.changeTheme());
	};
	return (
		<header
			className={` w-full p-4  shadow-md ${
				dark ? 'bg-dark-el text-dark-mode-text' : 'bg-dark-mode-text text-light-mode-text'
			} `}>
			<div className='w-full max-w-7xl mx-auto flex items-center justify-between text-lg lg:text-xl'>
				<h1>Where in the world?</h1>
				<button className='p-2' onClick={themeSwitchHanlder}>
					<FontAwesomeIcon className='mr-1' icon={faMoon} /> Dark Mode
				</button>
			</div>
		</header>
	);
};
