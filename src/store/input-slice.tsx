import { createSlice } from '@reduxjs/toolkit';

export const inputSlice = createSlice({
	name: 'input',
	initialState: { value: '' },
	reducers: {
		changeValue(state, action) {
			state.value = action.payload;
		},
		resetValue(state) {
			state.value = '';
		},
	},
});


