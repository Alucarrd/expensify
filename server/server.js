const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, "..", "public");
//if the port variable isnt' available, then use 3000
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));

console.log(__dirname);
console.log(publicPath);
app.get("*", (req, res) => {
  const pathToIndex = path.join(publicPath, "/index.html");
  console.log(pathToIndex);
  res.sendFile(pathToIndex);
})

app.listen(port, () => {
  console.log("server is up");
});
