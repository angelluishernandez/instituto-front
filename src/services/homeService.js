import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: true,
});

const getGalleryItems = () => http.get("/get-gallery-items");
const getCarouselItems = () => http.get("/get-carousel-items");

const addCarouselItem = ({ carouselItem }) =>
	http.post("/add-carousel-item", { carouselItem });
const addGalleryItem = ({ galleryItem }) =>
	http.post("/add-gallery-item", { galleryItem });

export default {
	addCarouselItem,
	addGalleryItem,
	getGalleryItems,
	getCarouselItems,
};
