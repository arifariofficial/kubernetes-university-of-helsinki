import express from "express";

const app = express();

const port = process.env.PORT || 3002;

let counter = 0;

app.get("/pingpong", (req, res) => {
	res.send(`pong ${counter}`);
	counter++;
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
