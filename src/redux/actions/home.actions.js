import { homeConstants } from "../constants/constants";
import institutoService from "../../services/institutoService";
//----------------------ACTION GENERATORS----------------------//

//----------------------Get carousel images----------------------//
const fetchHome = () => {
	return (dispatch) => {
		institutoService.getHomeInfo().then((data) => {
			const imgs = data.data;
			dispatch(getHome(imgs));
		});
	};
};

const addCarouselImg = (carouselItem) => {
	return (dispatch) => {
		institutoService.addCarouselImg(carouselItem).then((data) => {
			dispatch(addCarouselItem(carouselItem));
		});
	};
};

//----------------------ACTION TYPES----------------------//

const getHome = (homeInfo) => ({
	type: homeConstants.FETCH_CAROUSEL,
	homeInfo,
});

const addCarouselItem = (carouselItem) => ({
	type: homeConstants.ADD_CAROUSEL_ITEM,
	carouselItem,
});
//----------------------EXPORTS----------------------//

export const userActions = {
	fetchHome,
	addCarouselImg,
};
