const express = require('express');
const bodyParser = require('body-parser');
const currentdate = require(__dirname + "/date.js")
const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

let newhabits = [];
let workhabits = [];

app.get('/', (req, res) => {
  let day = currentdate.getDate();
  res.render('index', {
    listTitle: day,
    items: newhabits
  });
});


app.post('/', (req, res) => {
  let newhabit = req.body.newItem;
  if (req.body.list === "Work") {
    workhabits.push(newhabit);
    res.redirect("/work");
  } else {
    newhabits.push(newhabit);
    res.redirect("/");
  }
});

app.get('/work', (req, res) => {
  res.render('index', {
    listTitle: "Work",
    items: workhabits
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
