import express from "express";
import logger from "morgan";
import cors from "cors";
import router from "./routes/essays";
import loginRoute from "./routes/login";
import admin from "./helpers/createAdmin";

const app = express();
// const corsOptions = {
//   origin: /http:\/\/localhost:3000\/*/
// };

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
admin();

app.use("/", router);
app.use("/api", loginRoute);
app.use((req, res, next) => {
  res.status(404).send({ err: "Page not found" });
});

const PORT = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log("App listening on 5000"));
