const express = require("express");
const userRoute = require("./routers/userRoute");
const app = express();

const PORT = 8000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.set("view engine", "ejs");

app.use("/", userRoute);

app.listen(PORT, () => {
  console.log(`PORT RUNNING AT LOCALHOST:${PORT}`);
});
