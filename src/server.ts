import express from "express";
import router from "./interfaces/favoriteLinksRoutes";

const app = express();
app.use(express.json());

app.use("/api", router);

app.listen(8000, () => console.log(`Server running on port 8000`));