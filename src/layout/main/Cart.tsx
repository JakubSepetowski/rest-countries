import { useSelector } from 'react-redux';

interface Props {
	name: string;
	pop: string;
	cap: string;
	reg: string;
	flag: string;
}

export const Cart = (props: Props) => {
	const dark = useSelector((state: any) => state.theme.isDark);

	return (
		<div
			className={`rounded-md cursor-pointer  w-64 shadow-md flex-grow-[0] ${
				dark ? 'bg-dark-el text-dark-mode-text' : 'bg-dark-mode-text text-light-mode-text'
			}  `}>
			<div>
				<img className='w-full object-cover h-40 rounded-t-md' src={props.flag} alt={props.name} />
			</div>
			<div className='p-4 w-full pb-8'>
				<h2 className='font-bold mb-4 mt-2'>{props.name}</h2>
				<p>
					Population: <span>{props.pop}</span>
				</p>
				<p>
					Region: <span>{props.reg}</span>
				</p>
				<p>
					Capital: <span>{props.cap}</span>
				</p>
			</div>
		</div>
	);
};
