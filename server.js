const path = require("path");
const express = require("express");
const app = express();

/* Azure forwards traffic to the port defined in PORT */
const PORT = process.env.PORT || 3000;

/* Serve static files */
app.use(express.static(path.join(__dirname, "public")));

/* Basic API route */
app.get("/api/hello", (req, res) => {
	res.json({ message: "Hola desde el Azure App Service ✨" });
});

/* Fallback to index.html */
app.get("*", (_, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () =>
	console.log(`Server running on http://localhost:${PORT}`)
);
