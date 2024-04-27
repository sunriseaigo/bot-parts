import { NextRequest, NextResponse } from "next/server";

import axios from "axios";

export async function GET(req: NextRequest, res: NextResponse) {
  const response = await axios.get(
    `${process.env.ALLEGRO_END_POINT_URL}?api_key=${process.env.ALLEGRO_API_KEY}&method=search&category=620`
  );
  // console.log(
  //   `${process.env.ALLEGRO_END_POINT_URL}?api_key=${process.env.ALLEGRO_API_KEY}&method=search&category=620`
  // );
  const result =
    response.data.totalcount >= 8
      ? response.data.products.slice(0, 8)
      : response.data.products;
  return Response.json({ result });
}
