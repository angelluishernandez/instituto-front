import { homeConstants } from "../constants/constants";

export const homeReducer = (state = {}, action) => {
	switch (action.type) {
		case homeConstants.FETCH_CAROUSEL:
			return {
				carouselItems: action.carouselItems,
				galleryItems: action.galleryItems,
			};
		case homeConstants.ADD_CAROUSEL_ITEM:
			return {
				...state,
				carouselItems: [...state.carouselItems, action.carouselItem],
			};
		default:
			return state;
	}
};
