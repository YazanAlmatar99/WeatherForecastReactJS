//This is the weather api file
//it has the key and the base URL
//Please don't use my private key

import axios from "axios";
const _KEY = "1b3cedaac2834df7b3405952192805";

export default axios.create({
  baseURL: `http://api.apixu.com/v1/current.json?key=${_KEY}&q=`
});
