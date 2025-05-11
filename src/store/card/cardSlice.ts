import { createSlice } from "@reduxjs/toolkit";
import type { TCard } from "~/types/Card";

type cardState = {
	items: TCard[];
};

const initialState: cardState = {
	items: [],
};

const cardSlice = createSlice({
	name: "card",
	initialState: initialState,
	reducers: {
		addCard(state, action) {
			const { serialNumber, vagonNumber, passagers } = action.payload;
			const now = new Date();
			const newCard: TCard = {
				serialNumber,
				vagonNumber,
				date: now.toLocaleDateString("uk-UA"),
				time: now.toLocaleTimeString("uk-UA"),
				passagers,
				isActive: true,
			};
			state.items.unshift(newCard);
			if (state.items.length > 3) {
				state.items.pop();
			}
		},
		deactivateCard(state, action) {
			const { id } = action.payload;
			const card = state.items[id];
			card.isActive = false;
		},
	},
});

export const cardActions = cardSlice.actions;

export default cardSlice;
