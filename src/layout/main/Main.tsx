import { Filter } from './Filter';
import { Input } from './Input';
import { Carts } from './Carts';
import { useSelector } from 'react-redux';
import { CartInfo } from './CartInfo';
import { RootState } from '../../store/store';

export const Main = () => {
	const isCartOpen = useSelector((state: RootState) => state.countries.isCountryOpen);

	return (
		<main className='w-full max-w-7xl mt-4 md:mt-10  mx-auto p-4 xl:p-0'>
			{!isCartOpen && (
				<>
					<section className='flex flex-col md:flex-row md:justify-between mb-14'>
						<Input />
						<Filter />
					</section>
					<section className='flex justify-center items-center flex-wrap gap-12 '>
						<Carts />
					</section>
				</>
			)}
			{isCartOpen && <CartInfo/>}
		</main>
	);
};
