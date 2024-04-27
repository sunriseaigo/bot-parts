import type { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { data } from "@/app/data";

interface SubCategoriesData {
  data: any[];
}
export async function POST(req: NextRequest, res: NextResponse) {
  const { pk, pks } = await req.json();
  // let subCategories: SubCategoriesData = { data: [] };
  // if (pks.length > 0) {
  //   await pks.map(async (pk: any) => {
  //     const response = await axios.get(
  //       `${process.env.EUPARTS_END_POINT_URL}/categories/${pk}/?format=json`
  //     );
  //     subCategories.data.push(response.data.categories);
  //   });
  //   return Response.json({ subCategories });
  // }
  // return Response.json({ subcategories: data });
  return Response.json({ subcategories: data });

  const response = await axios.get(
    `${process.env.EUPARTS_END_POINT_URL}/categories/${pk}/?format=json`
  );
  const subcategories = response.data;

  return Response.json({ subcategories });
}
