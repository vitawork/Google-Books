import axios from "axios";

export default {
  //call google api
  getGoogleBooks: function(text) {
    return axios.get("/google/findbooks", text);
  }
};
