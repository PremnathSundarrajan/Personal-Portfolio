const express=require("express");
const path=require("path");
const hbs=require("hbs");

const PORT = process.env.PORT || 3000;
const app = express();
const templatePath=path.join(__dirname);

// Middleware setup

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index-1.html'));
});

app.post('/submit', (req, res) => {
    const {body}=req;
    console.log(body);
    // Note: You might want to add a response here
    res.send("<h1>submitted successfully</h1>")
});

// Server start
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on ${PORT}`);
});