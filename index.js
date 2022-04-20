const express = require("express");
const packageName = require("express");
const cors = require("cors");
const res = require("express/lib/response");
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from my Smarty own  Pant!!");
});

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com", phone: "01788988454" },
  {
    id: 2,
    name: "Shabnoor",
    email: "Shabnoor@gmail.com",
    phone: "01788988454",
  },
  {
    id: 3,
    name: "Suchrorita",
    email: "Suchrorita@gmail.com",
    phone: "01788988454",
  },
  {
    id: 4,
    name: "Suchonda",
    email: "Suchonda@gmail.com",
    phone: "01788988454",
  },
  {
    id: 5,
    name: "Srabonti",
    email: "Srabonti@gmail.com",
    phone: "01788988454",
  },
  { id: 6, name: "Sabita", email: "Sabita@gmail.com", phone: "01788988454" },
  { id: 7, name: "Sohana", email: "Sohana@gmail.com", phone: "01788988454" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLocaleLowerCase();
    const matched = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id == id);
  console.log(req.params);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("object", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "oranges"]);
});

app.get("/fruits/mango/fazle");

app.listen(port, () => {
  console.log("Lisentning to port", port);
});
