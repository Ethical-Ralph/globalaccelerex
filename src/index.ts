import * as express from "express";
import * as http from "http";
import { router } from "./routes";
import { Request, Response, NextFunction, Application } from "express";
import { CustomError } from "./module/customError";

export const app: Application = express();
const server = http.createServer(app);

const PORT: string = process.env.PORT || "3000";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new CustomError("Not Found");
  err.name = "Not Found";
  err.status = 404;
  next(err);
});

app.use(
  (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    return res.status(error.status || 500).json({
      error: {
        name: error.name,
        message: error.message,
      },
    });
  }
);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
