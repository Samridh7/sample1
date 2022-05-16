const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({extended:true}));
let tasks = [];

app.set("view engine", "hbs");

app.get("/", (req,res) => {
      res.send("hello world!");
})

app.get("/form", (req,res) => {
    // res.sendFile(path.join(__dirname, "index.html"));
    res.render("home", {
        title: "TodoList",
        tasks: tasks
    })
})

app.post("/form", (req,res) => {
    let name = req.body.user
    tasks.push(name);
    console.log(tasks);
    res.redirect("/form");
})


app.listen(PORT, () => {
   console.log(`server started at http://localhost:${PORT}`);
})