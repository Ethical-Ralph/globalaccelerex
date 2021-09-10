import { IRequest } from "../types/request";
import * as cors from "cors";

export const corsProtect = (allowlist: string[]) => {
  const corsOptionsDelegate = (
    req: IRequest,
    callback: (...params: any) => any
  ) => {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    if (allowlist.includes(ip)) {
      callback(null, { origin: true });
    } else {
      callback(new Error("Not allowed by CORS"), { origin: false });
    }
  };

  return cors(corsOptionsDelegate);
};
