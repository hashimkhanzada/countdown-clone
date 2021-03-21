import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Countdown shop server");
});

app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});
