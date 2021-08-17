import axios from "axios";

export default axios.create({
  baseURL: "https://evening-woodland-05630.herokuapp.com/api/",
  headers: {
    "Content-type": "application/json"
  }
});