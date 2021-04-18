const axios = require("axios");
const fs = require("fs");


axios
  .get("http://jsonplaceholder.typicode.com/posts/")
  .then((response) => {
    // console.log(response.data);
    fs.writeFile(
      "./Result/posts.json",
      JSON.stringify(response.data, null, 2),
      function (err) {
        console.log(err);
      }
    );
  })
  .catch((err) => {
    console.log(err);
  });