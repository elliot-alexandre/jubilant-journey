import { name, version } from "./package.json";
import express from "express";

const app: any = express();

app.get("/", function (req: any, res: any) {
  res.json({
    name,
    version,
  });
});
