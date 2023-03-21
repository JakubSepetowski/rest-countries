interface Curr {
	code: string;
	name: string;
	symbol: string;
}
interface Lng {
	iso639_1: string;
	iso639_2: string;
	name: string;
	nativeName: string;
}

export interface Country {
	id: string;
	code: string;
	name: string;
	population: number;
	capital: string;
	region: string;
	subregion: string;
	flag: string;
	topLevelDomain: string;
	languages: Lng[];
	currencies: Curr[];
	nativeName: string;
	borders: string[];
}
export interface InitialCountryInterface {
	countries: Country[];
	filter: string;
	filteredArray: Country[];
	isEmpty: boolean;
	isCountryOpen: boolean;
	openCountryId: string;
	countryInfo: Country[];
}
export interface CartProps {
	name: string;
	id: string;
	pop: string;
	cap: string;
	reg: string;
	flag: string;
}
export interface Data extends Record<string, string | number | string[] | Lng[] | Curr[]> {
	numericCode: string;
	alpha3Code: string;
	name: string;
	population: number;
	capital: string;
	region: string;
	flag: string;
	subregion: string;
	topLevelDomain: string;
	languages: Lng[];
	currencies: Curr[];
	nativeName: string;
	borders: string[];
}
