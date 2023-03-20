import { createSlice } from '@reduxjs/toolkit';

const initialCountry = {
	countries: [],
	filter: '0',
	filteredArray: [],
	isEmpty: false,

};

export const countrySlice = createSlice({
	name: 'country',
	initialState: initialCountry,
	reducers: {
		init(state, action) {
			state.countries = action.payload;
			state.filteredArray = state.countries;
		},
		changeFilter(state, action) {
			state.filter = action.payload;
			if (state.filter === '0') state.filteredArray = state.countries;
			else
				state.filteredArray = state.countries.filter(
					(country: any) => country.region === state.filter
				);
			state.isEmpty = false;
		},
		searchFor(state, action) {
			if (state.filter === '0')
				state.filteredArray = state.countries.filter((country: any) =>
					country.name.toLowerCase().includes(action.payload.toLowerCase())
				);
			else
				state.filteredArray = state.countries.filter(
					(country: any) =>
						country.name.toLowerCase().includes(action.payload.toLowerCase()) &&
						country.region === state.filter
				);
			state.filteredArray.length === 0 ? (state.isEmpty = true) : (state.isEmpty = false);
		},
	},
});
