import type { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest, res: NextResponse) {
  const { pk } = await req.json();

  const response = await axios.get(
    `${process.env.EUPARTS_END_POINT_URL}/carmodels/${pk}/?format=json`
  );
  const models = response.data;

  return Response.json({ models });
}
