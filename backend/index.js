import express from "express";
import postgresClient from "./config/db.js";
import userRouter from "./router/userRouter.js";
import urunRouter from "./router/itemRouter.js"
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/users", userRouter);
app.use("/items", urunRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  postgresClient.connect((err) => {
    if (err) {
      console.log("connection error", err.stack);
    } else {
      console.log("db connection successful");
    }
  });
});
