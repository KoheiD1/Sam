5
const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");

app.use("/js", express.static("./public/js"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/img"));
app.use("/fonts", express.static("./public/fonts"));
app.use("/videos", express.static("./public/videos"));
app.use("/page", express.static("./app/html"))

app.get("/", function (req, res) {
    let doc = fs.readFileSync("./app/html/index.html", "utf8");
    res.send(doc);
});

app.use(function (req, res, next) {
    res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
});


let port = 8000;
app.listen(port, function () {
    console.log("Example app listening on port " + port + "!");
});

//INSERT INTO A01363117_user_timeline (ID, A01363117_user_id, Date_of_Post, Text_that_was_posted, Time_Post, Number_of_views) VALUES (5, 1, '06/16/2023', 'I just graduated From highschool! Although Im sad to say goodbye to my friends, Im excited for the next chapter of mylife at BCIT', '1:27 PM', 10000);