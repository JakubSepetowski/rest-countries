import { Filter } from './Filter';
import { Input } from './Input';
import { Carts } from './Carts';

export const Main = () => {
	return (
		<main className='w-full max-w-7xl mt-4 md:mt-10  mx-auto p-4 xl:p-0'>
			<section className='flex flex-col md:flex-row md:justify-between mb-14'>
				<Input />
				<Filter  />
			</section>
			<section className='flex justify-center items-center flex-wrap gap-12 '>
				<Carts />
			</section>
		</main>
	);
};
