import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { pk } = await req.json();

  const response = await axios.get(
    `${process.env.EUPARTS_END_POINT_URL}/categories/620/?format=json`
  );
  const categories = response.data;

  return Response.json({ categories });
}
