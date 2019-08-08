import axios from "axios";

export default axios.create({
  baseURL: "https://devcent.net/v1/api/courses"
});
