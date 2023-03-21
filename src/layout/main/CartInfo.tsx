import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { countrySlice } from '../../store/countires-slice';
import { RootState } from '../../store/store';

export const CartInfo = () => {
	const disaptch = useDispatch();
	const dark = useSelector((state: RootState) => state.theme.isDark);
	const cartDeatils = useSelector((state: RootState) => state.countries.countryInfo);
	const {
		name,
		population,
		capital,
		region,
		flag,
		subregion,
		topLevelDomain,
		languages,
		currencies,
		nativeName,
		borders,
	} = cartDeatils[0];

	console.log(currencies);
	interface Curr {
		code: string;
		name: string;
		symbol: string;
	}

	const currens = currencies.map((curr: Curr) => {
		return curr.name;
	});
	const langs = languages.map((lang) => {
		return lang.name;
	});

	const closeHandler = () => {
		disaptch(countrySlice.actions.closeCart());
	};
	const showMoreHandler = (e: React.MouseEvent) => {
		const target = e.target as HTMLButtonElement;
		const value = target.textContent;
		disaptch(countrySlice.actions.openCart(value));
	};

	return (
		<section className='min-h-screen lg:min-h-0 p-2 md:p-0'>
			<div className=' max-w-lg h-80 mx-auto  lg:max-w-none flex flex-col lg:flex-row lg:w-full items-center lg:justify-between lg:h-[30rem]  lg:mt-32 '>
				<button
					onClick={closeHandler}
					className={`shadow-md p-2 pl-6 pr-6 self-start mb-12 lg:mb-0 lg:absolute lg:top-28 ${
						dark ? 'bg-dark-el text-dark-mode-text' : 'bg-dark-mode-text text-light-mode-text'
					}`}>
					<FontAwesomeIcon className='mr-3' icon={faArrowLeft} />
					Back
				</button>
				<div className='w-full lg:w-2/4 h-full'>
					<img className=' h-full w-full lg:w-11/12 object-cover' src={flag} alt={name} />
				</div>
				<div className=' mt-10 lg:mt-0 w-full  lg:w-2/4  h-full lg:pl-10  lg:pt-4 lg:pb-4  lg:flex lg:items-start lg:justify-between lg:relative'>
					<h1 className='lg:absolute lg:top-10 font-bold text-2xl'>{name}</h1>
					<div className='mt-6 lg:mt-20 sm:text-lg font-semibold'>
						<p>
							Native Name: <span className='text-light-input'>{nativeName}</span>
						</p>
						<p>
							Population: <span className='text-light-input'>{population}</span>
						</p>
						<p>
							Region: <span className='text-light-input'>{region}</span>
						</p>
						<p>
							Sub Region: <span className='text-light-input'>{subregion}</span>
						</p>
						<p>
							Capital: <span className='text-light-input'>{capital}</span>
						</p>
					</div>
					<div className='mt-6 lg:mt-20  sm:text-lg font-semibold'>
						<p>
							Top Level Domian: <span className='text-light-input'>{topLevelDomain[0]}</span>
						</p>
						<p>
							Currencies: <span className='text-light-input'>{currens.join(', ')}</span>
						</p>
						<p>
							Languages: <span className='text-light-input'>{langs.join(', ')}</span>
						</p>
					</div>
					<div className=' lg:absolute lg:left-1/2 lg:bottom-5 lg:translate-x-[-50%] flex flex-col lg:block w-full lg:items-center lg:pl-10 pb-2 pt-2 sm:text-lg'>
						{borders && (
							<>
								<p className='font-semibold mt-4'>Border Countries:</p>
								<div>
									{borders.map((border: string) => (
										<button
											onClick={showMoreHandler}
											key={border}
											className={` shadow-md p-2 pl-4 pr-4 mr-3 mt-3 md:mt-6 ${
												dark
													? 'bg-dark-el text-dark-mode-text'
													: 'bg-dark-mode-text text-light-mode-text'
											}`}>
											{border}
										</button>
									))}
								</div>
							</>
						)}
						{!borders && <p className='font-semibold mt-4'>This country has no neighbors </p>}
					</div>
				</div>
			</div>
		</section>
	);
};
