/* eslint-disable no-unused-vars */
import express from "express";
import logger from "morgan";
import cors from "cors";
import router from "./routes";

const app = express();
// const corsOptions = {
//   origin: /http:\/\/localhost:3000\/*/
// };

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", router);
app.use((req, res, next) => {
  res.status(404).send({ err: "Page not found" });
});

const PORT = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log("App listening on 5000"));
