import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { countrySlice } from '../../store/countires-slice';
import { inputSlice } from '../../store/input-slice';
import { RootState } from '../../store/store';
import { CartProps } from '../../types/types';

export const Cart = (props: CartProps) => {
	const dispatch = useDispatch();
	const dark = useSelector((state: RootState) => state.theme.isDark);
	const openCartHandler = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLDivElement;
		const atribute = target.getAttribute('data-id');
		dispatch(countrySlice.actions.openCart(atribute));
		dispatch(inputSlice.actions.resetValue());
		dispatch(countrySlice.actions.changeFilter('0'));
	};

	return (
		<div
			onClick={openCartHandler}
			data-id={props.id}
			className={`rounded-md cursor-pointer  w-64 shadow-md flex-grow-[0] ${
				dark ? 'bg-dark-el text-dark-mode-text' : 'bg-dark-mode-text text-light-mode-text'
			}  `}>
			<div className='pointer-events-none'>
				<img className='w-full object-cover h-40 rounded-t-md' src={props.flag} alt={props.name} />
			</div>
			<div className='p-4 w-full pb-8 pointer-events-none'>
				<h2 className='font-bold mb-4 mt-2 pointer-events-none'>{props.name}</h2>
				<p className='font-semibold'>
					Population: <span className='text-light-input'>{props.pop}</span>
				</p>
				<p className='font-semibold'>
					Region: <span className='text-light-input'>{props.reg}</span>
				</p>
				<p className='font-semibold'>
					Capital: <span className='text-light-input'>{props.cap}</span>
				</p>
			</div>
		</div>
	);
};
