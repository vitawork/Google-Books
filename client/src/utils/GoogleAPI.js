import axios from "axios";

export default {
  //call google api
  getGoogleBooks: function(text) {
    return axios.post("/google/findbooks", text);
  }
};
