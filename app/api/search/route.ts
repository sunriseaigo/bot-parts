import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { brand, model, category, subcategory, query } = await req.json();

  const response = await axios.get(
    `${process.env.ALLEGRO_END_POINT_URL}?api_key=${
      process.env.ALLEGRO_API_KEY
    }&method=search${query && `&query=${query}`}${brand && `&make=${brand}`}${
      model && `&model=${model}`
    }${
      subcategory
        ? `&category=${subcategory}`
        : category && `&category=${category}`
    }`
  );
  console.log(
    `${process.env.ALLEGRO_END_POINT_URL}?api_key=${
      process.env.ALLEGRO_API_KEY
    }&method=search${query && `&query=${query}`}${brand && `&make=${brand}`}${
      model && `&model=${model}`
    }${
      subcategory
        ? `&category=${subcategory}`
        : category && `&category=${category}`
    }`
  );
  console.log(response.data);
  const result =
    response.data.totalCount >= 8
      ? response.data.products.slice(0, 8)
      : response.data.products;
  return Response.json({ result });
  // return Response.json({});
}
