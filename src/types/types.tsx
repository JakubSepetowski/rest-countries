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
	languages: string[];
	currencies: string[];
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

export type JSONValue = Array<JSONValue>;
