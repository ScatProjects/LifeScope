var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost:27017/Database', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', (error) => console.error("Error in Connecting Database", error));
db.once('open', () => console.log("Connected to Database"));

app.post("/sign_up", (req, res) => {
    var fname = req.body.fname;
    var fphone = req.body.fphone;
    var role = req.body.role;
    var email = req.body.femail; // Corrected to match HTML form input name
    var Mpassword = req.body.Mpassword;
    var Cpassword = req.body.Cpassword;

    var data = {
        "fname": fname,
        "fphone": fphone,
        "role": role,
        "email": email, // Corrected to match HTML form input name
        "Mpassword": Mpassword,
        "Cpassword": Cpassword
    };

    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            console.error("Error inserting record", err);
            return res.status(500).send("Error inserting record");
        }
        console.log("Record Inserted Successfully");
        return res.redirect('registerd success.html');
    });
});

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": "*"
    });
    return res.redirect('Home Page.html');
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
