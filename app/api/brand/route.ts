import type { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest, res: NextResponse) {
  const response = await axios.get(
    `${process.env.EUPARTS_END_POINT_URL}/carmakes/?format=json`
  );
  const brands = response.data;

  return Response.json({ brands });
}
