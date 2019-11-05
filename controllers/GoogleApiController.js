const axios = require("axios");

module.exports = {
  findgooglebooks: function(req, res) {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + req.body.text)
      .then(results => {
        console.log(
          "apiapiapiapiapiapiapiapi " + JSON.stringify(results.items)); ////////////////////////////////////////
        res.json(results.items);
      })
      .catch(err => res.status(422).json(err));
  }
};
