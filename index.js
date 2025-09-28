import express from "express";

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.get("/hello", (req, res) => {
    res.type("text/plain").send("Hello Express JS");
});

app.get("/user", (req, res) => {
    const firstname = req.query.firstname ?? "Pritesh";
    const lastname = req.query.lastname ?? "Patel";
    res.json({ firstname, lastname });
});

app.post("/user/:firstname/:lastname", (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

app.post("/users", (req, res) => {
    const users = Array.isArray(req.body) ? req.body : [];
    res.json(users);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));