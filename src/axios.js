import axios from "axios";

const instance = axios.create({
	baseURL: "https://safe-journey-05722.herokuapp.com/",
});

export default instance;
