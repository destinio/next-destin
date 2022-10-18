import { BaseContext } from 'next/dist/shared/lib/utils'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next/types'
import { useEffect, useState } from 'react'

export interface City {
  LocalObservationDateTime: string
  EpochTime: number
  WeatherText: string
  WeatherIcon: number
  HasPrecipitation: boolean
  PrecipitationType?: null
  IsDayTime: boolean
  Temperature: Temperature
  MobileLink: string
  Link: string
}
export interface Temperature {
  Metric: MetricOrImperial
  Imperial: MetricOrImperial
}
export interface MetricOrImperial {
  Value: number
  Unit: string
  UnitType: number
}

export default function City({ city }: { city: City }) {
  const router = useRouter()
  const { id } = router.query

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // if (!id) return
    // const cityId = typeof id === 'string' ? id : id[0]
    // console.log(cityId)
    // fetch(`/api/weather/city`, {
    //   method: 'POST',
    //   body: JSON.stringify({ sk: cityId }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data[0])
    //     setCity(data[0])
    //     setLoading(false)
    //   })
  }, [id])

  if (!city) return <h1>Loading...</h1>

  return <div>{city.WeatherText}</div>
}

export const getServerSideProps: GetServerSideProps = async (
  context: BaseContext
) => {
  const response = await fetch(
    `${process.env.VERCEL_URL}/weather/api/weather/city`,
    {
      method: 'POST',
      body: JSON.stringify({ sk: context.params.id }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  const city = await response.json()

  return {
    props: {
      city,
    },
  }
}
