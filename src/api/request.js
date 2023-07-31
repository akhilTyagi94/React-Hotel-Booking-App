import axios from "axios";

const Base_URL = "https://hotels-api-4ltr.onrender.com/api";

const getHotels = () => axios.get(`${Base_URL}/hotels`);
const getHotelBySlug = (slug) => axios.get(`${Base_URL}/hotels/${slug}`);

export { getHotels, getHotelBySlug };
