import express from "express";
import routes from "./src/routes/index.js";
import connectDB from "./src/configs/db.js";
import cors from "cors";
import env from "./src/configs/config.env.js";

const app = express();
app.use(express.json());

connectDB();

app.use(
  cors({
    // configOptions
  }),
);

app.use("/api", routes);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(env.PORT, () => {
  console.log(`Server is running on: http://localhost:${env.PORT}/api`);
});
