const subcategories = {
    "maincat": {
        "title": "Механічний тюнінг",
        "allegro_id": "8695",
        "parentcat": {
            "title": "Автозапчастини",
            "allegro_id": "620"
        }
    },
    "categories": [
        {
            "title": "Adaptery tuningowe",
            "allegro_id": "322225"
        },
        {
            "title": "Фільтри та корпуси",
            "allegro_id": "322214"
        },
        {
            "title": "Електронні компоненти",
            "allegro_id": "322219"
        },
        {
            "title": "Двигун та аксесуари",
            "allegro_id": "255614"
        },
        {
            "title": "Гальмівна система",
            "allegro_id": "322206"
        },
        {
            "title": "Вихлопна система",
            "allegro_id": "255620"
        },
        {
            "title": "Система підвіски",
            "allegro_id": "255624"
        },
        {
            "title": "Інше",
            "allegro_id": "253797"
        }
    ]
}


import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios'

const EUPARTS_END_POINT_URL= process.env.EUPARTS_END_POINT_URL;

export async function POST(req: NextApiRequest, res: NextApiResponse) {

    const {pk} = await req.json();
    console.log(pk)
   return Response.json({subcategories})
 
   // try {
   //     axios.get("https://euparts.com.ua/api/carmakes/?format=json").then(res=> {
   //       console.log(res)
   //     return Response.json({});
 
   //   }).catch(err=>{
   //     throw err;
   //   })
 
   // } catch (error) {
   //   return Response.json({ error });
   // }
 
 
 }