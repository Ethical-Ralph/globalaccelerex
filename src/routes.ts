import { Router, Request, Response } from "express";
import { corsProtect } from "./module/cors";
import { whitelistedIps } from "./contants/whitelists";

export const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to my mini service",
  });
});

router.get("/cors_protected", corsProtect(whitelistedIps), (req, res) => {
  res.json({
    message: "Access granted",
  });
});
