import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: '', /*you local host url from backend goes here.*/
    // example:  "http://localhost:5001/amazon-clone/in-aisa1/api", this is just an exapmle it will not work please write your own url in order for it to work.
});

export default instance;


