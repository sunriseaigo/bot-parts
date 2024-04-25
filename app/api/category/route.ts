import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const EUPARTS_END_POINT_URL = process.env.EUPARTS_END_POINT_URL;

const categories = {
  maincat: {
    title: "Автозапчастини",
    allegro_id: "620",
    parentcat: { title: "Автозапчастини", allegro_id: "620" },
  },
  categories: [
    { title: "Механічний тюнінг", allegro_id: "8695" },
    { title: "Система охолодження двигуна", allegro_id: "18689" },
    { title: "Внутрішнє оздоблення", allegro_id: "622" },
    { title: "Система вентиляції", allegro_id: "258677" },
    { title: "Гальмівна система", allegro_id: "18834" },
    { title: "Система приводу", allegro_id: "50863" },
    { title: "Паливна система", allegro_id: "18844" },
    { title: "Система кондиціонування повітря", allegro_id: "49183" },
    { title: "Рульове управління", allegro_id: "250842" },
    { title: "Двигуни та аксесуари", allegro_id: "50821" },
    {
      title: "Опалення паркінгу та охолодження транспортних засобів",
      allegro_id: "258669",
    },
    { title: "Пневматична система", allegro_id: "261553" },
    { title: "Електрична система, запалювання", allegro_id: "4141" },
    { title: "Склоочисники та омивачі", allegro_id: "254179" },
    { title: "Інше", allegro_id: "629" },
    { title: "Система підвіски", allegro_id: "8683" },
    { title: "Вихлопна система", allegro_id: "18862" },
    { title: "Освітлення", allegro_id: "623" },
    { title: "Фільтри", allegro_id: "49236" },
    { title: "Частини тіла", allegro_id: "4094" },
    { title: "Автозапчастини", allegro_id: "620" },
  ],
};

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { pk } = await req.json();
  // console.log(pk)
  //    return Response.json({subcategories})

  try {
    axios
      .get(`https://euparts.com.ua/api/categories/${pk}?format=json`)
      .then((res) => {
        // console.log(res)
        const categories = res.data;
        return Response.json({ categories });
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    return Response.json({ error });
  }
}
