import axios from "axios";

// base url to make any request by adding te thing we want from the database
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
