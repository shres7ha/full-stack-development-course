import { useState } from 'react'
import { CurrentWeatherResult } from './components/CurrentWeatherResult'
import { Footer } from './components/layout/Footer'
import { SearchByCity } from './components/SearchByCity'
import { Card } from './components/ui/Card'
import { Error } from './components/ui/Error'
import { TypographyH1 } from './components/ui/typography/TypographyH1'
import { TypographyP } from './components/ui/typography/TypographyP'
import { Layout } from './layouts/Layout'
import { currentWeatherService } from './services/currentWeatherService'

const App = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState(null)

  const handleSearch = async (trimmedCity) => {
    setApiError(null)
    setWeatherData(null)

    if (!trimmedCity) {
      return
    }

    setLoading(true)

    try {
      const data = await currentWeatherService.getByCity(trimmedCity)
      setWeatherData(data)
    } catch (error) {
      setApiError(error.message)

      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout className="flex flex-col justify-center items-center min-h-screen gap-8">
      <main>
        <Card className="bg-white shadow-md px-8 py-8 rounded-2xl">
          <TypographyH1 className="text-slate-900 text-2xl font-medium tracking-tight text-center">
            Weather Finder
          </TypographyH1>
          <TypographyP className="text-slate-500 text-sm text-center mt-2">
            Search weather in real time
          </TypographyP>
          <SearchByCity onSearch={handleSearch} loading={loading} />

          {apiError && (
            <Error className="text-red-500 text-sm text-center mt-4">
              {apiError}
            </Error>
          )}

          {weatherData && (
            <CurrentWeatherResult
              data={weatherData}
              className="text-center mt-8"
            />
          )}
        </Card>
      </main>
      <Footer />
    </Layout>
  )
}

export { App }
