import type { NextApiRequest, NextApiResponse } from 'next'

export default function searchHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { term } = req.body as { term: string }
    const cleanTerm = term.toLowerCase().split(' ').join('%20')

    console.log(req.body)

    fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.WEATHER_API_KEY}&q=${cleanTerm}`
    )
      .then(res => res.json())
      .then(data => res.json(data))
  }
}
