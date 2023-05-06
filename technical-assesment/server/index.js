const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
const router= require('./routes/recipiesRoute.js')
// TODO - add additional route handlers as necessary
app.use(cors)
app.use(express.json())
app.use("/",router)




app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

