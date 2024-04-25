import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const EUPARTS_END_POINT_URL = process.env.EUPARTS_END_POINT_URL;

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  // return Response.json({brands})

  const response = await axios.get(
    `${EUPARTS_END_POINT_URL}/carmakes/?format=json`
  );
  const brands = response.data;

  return Response.json({ brands });
}
