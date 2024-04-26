import { NextRequest, NextResponse } from "next/server";

import axios from "axios";

export async function POST(req: NextRequest, res: NextResponse) {
  const { product_id } = await req.json();
  const response = await axios.get(
    `${process.env.ALLEGRO_END_POINT_URL}?api_key=${process.env.ALLEGRO_API_KEY}&method=details&product_id=${product_id}`
  );
  console.log(
    `${process.env.ALLEGRO_END_POINT_URL}?api_key=${process.env.ALLEGRO_API_KEY}&method=details&product_id=${product_id}`
  );
  const result = response.data;
  return Response.json({ result });
}
