import axios from "axios";

const directoryUrl =
  "https://randomuser.me/api/?nat=au,ca,gb,us,nz&results=100";

 // eslint-disable-next-line
export default {
  fetchRandomEmployees: function () {
    return axios.get(directoryUrl);
  },
};