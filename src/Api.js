import axios from "axios";

axios.defaults.baseURL = "http://private-anon-aa908dae0b-brewoptixv2.apiary-mock.com";

export default {
    getBrands() {
        return axios.get("/brands");
    },
    getBrand(entity_id) {
        return axios.get("/brands/" + entity_id);
    },
};