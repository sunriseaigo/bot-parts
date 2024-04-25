import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios'

const EUPARTS_END_POINT_URL= process.env.EUPARTS_END_POINT_URL;

const models = 
[
    {
        "allegro_title": "INTEGRA coupe (1985.01 - 1990.12)",
        "pk": 15
    },
    {
        "allegro_title": "INTEGRA liftback (1985.01 - 1990.12)",
        "pk": 16
    },
    {
        "allegro_title": "INTEGRA sedan (1985.01 - 1990.12)",
        "pk": 17
    },
    {
        "allegro_title": "LEGEND (1986.01 - 1991.08)",
        "pk": 18
    },
    {
        "allegro_title": "LEGEND coupe (1987.01 - 1991.08)",
        "pk": 19
    },
    {
        "allegro_title": "LEGEND II (1991.08 - 1996.08)",
        "pk": 20
    },
    {
        "allegro_title": "LEGEND II coupe (1991.08 - 1996.08)",
        "pk": 21
    },
    {
        "allegro_title": "MDX (YD1) (2000.08 - 2006.09)",
        "pk": 22
    },
    {
        "allegro_title": "MDX (YD2) (2006.04 - )",
        "pk": 23
    },
    {
        "allegro_title": "MDX (YD3) (2013.06 - )",
        "pk": 24
    },
    {
        "allegro_title": "NSX (1990.01 - 2005.12)",
        "pk": 25
    },
    {
        "allegro_title": "NSX targa (NA1) (1995.01 - 2005.12)",
        "pk": 26
    },
    {
        "allegro_title": "RDX (2006.04 - 2012.12)",
        "pk": 27
    },
    {
        "allegro_title": "RDX (2012.01 - 2018.05)",
        "pk": 28
    },
    {
        "allegro_title": "RL (1995.10 - 2004.09)",
        "pk": 29
    },
    {
        "allegro_title": "RL (2004.10 - )",
        "pk": 30
    },
    {
        "allegro_title": "TL (UA8, UA9) (2009.01 - )",
        "pk": 31
    },
    {
        "allegro_title": "TL (UC_) (2003.10 - 2012.11)",
        "pk": 32
    },
    {
        "allegro_title": "TLX (2014.07 - )",
        "pk": 33
    },
    {
        "allegro_title": "TSX (CL_) (2003.10 - 2008.12)",
        "pk": 34
    },
    {
        "allegro_title": "TSX (CU_) (2009.01 - )",
        "pk": 35
    }
]

export async function POST(req: NextApiRequest, res: NextApiResponse) {

   const {pk} = await req.json();
   console.log(pk)
  return Response.json({models})

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