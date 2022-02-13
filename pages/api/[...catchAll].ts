import type { NextApiRequest, NextApiResponse } from "next";
import Backend from "./test-api";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise(async resolve => {
    const listener = await Backend.getListener();
    listener(req, res);
    res.on("finish", resolve);
  });
};

export default handler;
