const express = require("express");
const app = express();
const port = 3000;
const resumeController = require("./controllers/resumeController");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.set("view engine", "ejs");

app.post("/generate", resumeController.generate);

app.get("/", resumeController.index);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
