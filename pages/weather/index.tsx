import { ChangeEvent, SyntheticEvent, useState } from 'react'
import Link from 'next/link'

export interface City {
  Version: number
  Key: string
  Type: string
  Rank: number
  LocalizedName: string
  EnglishName: string
  PrimaryPostalCode: string
  Region: RegionOrCountry
  Country: RegionOrCountry
  AdministrativeArea: AdministrativeArea
  TimeZone: TimeZone
  GeoPosition: GeoPosition
  IsAlias: boolean
  SupplementalAdminAreas?: (SupplementalAdminAreasEntity | null)[] | null
  DataSets?: string[] | null
  ParentCity?: ParentCity | null
}
export interface RegionOrCountry {
  ID: string
  LocalizedName: string
  EnglishName: string
}
export interface AdministrativeArea {
  ID: string
  LocalizedName: string
  EnglishName: string
  Level: number
  LocalizedType: string
  EnglishType: string
  CountryID: string
}
export interface TimeZone {
  Code: string
  Name: string
  GmtOffset: number
  IsDaylightSaving: boolean
  NextOffsetChange?: string | null
}
export interface GeoPosition {
  Latitude: number
  Longitude: number
  Elevation: Elevation
}
export interface Elevation {
  Metric: MetricOrImperial
  Imperial: MetricOrImperial
}
export interface MetricOrImperial {
  Value: number
  Unit: string
  UnitType: number
}
export interface SupplementalAdminAreasEntity {
  Level: number
  LocalizedName: string
  EnglishName: string
}
export interface ParentCity {
  Key: string
  LocalizedName: string
  EnglishName: string
}

export default function Weather() {
  const [searchTerm, setSearchTerm] = useState('')
  const [cities, setCities] = useState<City[]>(null!)

  function handleSearchSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch('/api/weather/search', {
      method: 'POST',
      body: JSON.stringify({ term: searchTerm }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => setCities(data))
  }
  function handleTermChange(e: ChangeEvent<HTMLInputElement>) {
    if (cities) {
      setCities(null!)
    }
    const term = e.target.value
    setSearchTerm(term.toLowerCase())
  }

  return (
    <div className="h-screen bg-blue-900">
      <div className="h-full container px-2 flex flex-col pt-[2rem]">
        <h2>City Search</h2>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            name="city-search"
            placeholder="Please enter a city name"
            onChange={handleTermChange}
            value={searchTerm}
            className="block outline-none m-4 w-full bg-transparent border-b-2 border-solid border-blue-100"
          />
        </form>
        <div className="px-5">
          {cities &&
            cities.map(c => (
              <Link key={c.Key} passHref href={`/weather/${c.Key}`}>
                <div>
                  <div>{c.EnglishName}</div>
                  <div className="text-blue-300 text-sm">
                    {c.AdministrativeArea.ID}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
