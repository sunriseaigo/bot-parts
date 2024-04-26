import { NextRequest, NextResponse } from "next/server";

import axios from "axios";

export async function GET(req: NextRequest, res: NextResponse) {
  const response = await axios.get(
    `${process.env.ALLEGRO_END_POINT_URL}?api_key=${process.env.ALLEGRO_API_KEY}&method=search&category=620`
  );
  const result = response.data.products.slice(0, 8);
  return Response.json({ result });
}
