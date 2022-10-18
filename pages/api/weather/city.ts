import type { NextApiRequest, NextApiResponse } from 'next'

export default function searchHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { sk } = req.body as { sk: string }
    // const cleanTerm = term.toLowerCase().split(' ').join('%20')

    // console.log(req.body)

    fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${sk}?apikey=${process.env.WEATHER_API_KEY}`
    )
      .then(res => res.json())
      .then(data => res.json(data))
  }
}
