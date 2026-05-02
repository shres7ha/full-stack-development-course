import { useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Result } from './components/Result'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card'
import { Error } from './components/ui/Error'
import { Field } from './components/ui/form/Field'
import { Form } from './components/ui/form/Form'
import { Input } from './components/ui/form/Input'
import { Label } from './components/ui/form/Label'
import { TypographyH1 } from './components/ui/typography/TypographyH1'
import { TypographyP } from './components/ui/typography/TypographyP'
import { TypographySmall } from './components/ui/typography/TypographySmall'
import { Layout } from './layouts/Layout'
import { fetchWeather } from './services/api'

const App = () => {
  const [weather, setWeather] = useState(null)
  const [cityInput, setCityInput] = useState('')
  const [validationError, setValidationError] = useState('')
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState(null)

  const handleInputChange = (e) => {
    setCityInput(e.target.value)
    if (validationError) setValidationError('')
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!cityInput.trim()) {
      setValidationError('Please enter a city name.')
      setApiError(null)
      setWeather(null)
      return
    }

    setValidationError('')
    setLoading(true)
    setApiError(null)

    try {
      const data = await fetchWeather(cityInput)
      setWeather(data)
    } catch (error) {
      setApiError(error.message)
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <Card className="px-8 py-8 rounded-2xl">
        <TypographyH1 className="text-center">Weather Finder</TypographyH1>
        <TypographyP className="text-center mt-2">
          Search weather in real time
        </TypographyP>
        <Form className="mt-8" onSubmit={handleSearch}>
          <Field>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              className="mt-2"
              placeholder="Enter a city name"
              value={cityInput}
              onChange={handleInputChange}
              error={validationError}
            />
            {validationError && (
              <Error className="mt-1">{validationError}</Error>
            )}
          </Field>
          <Button className="mt-4" type="submit">
            {loading ? 'Searching...' : 'Search'}
          </Button>
        </Form>

        {apiError && <Error className="text-center mt-4">{apiError}</Error>}

        {weather && <Result data={weather} className="text-center mt-8" />}
      </Card>
      <Footer>
        <TypographyP>
          <TypographySmall>© 2026 shres7ha</TypographySmall>
        </TypographyP>
      </Footer>
    </Layout>
  )
}

export { App }
