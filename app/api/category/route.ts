import type { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { data } from "@/app/data";

export async function POST(req: NextRequest, res: NextResponse) {
  return Response.json({ categories: data });

  const { pk } = await req.json();
  const response = await axios.get(
    `${process.env.EUPARTS_END_POINT_URL}/categories/620/?format=json`
  );
  const categories = response.data;

  return Response.json({ categories });
}
