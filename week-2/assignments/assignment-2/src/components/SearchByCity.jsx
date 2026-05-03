import { useState } from 'react'
import { Button } from './ui/Button'
import { Error } from './ui/Error'
import { Field } from './ui/form/Field'
import { Form } from './ui/form/Form'
import { Input } from './ui/form/Input'
import { Label } from './ui/form/Label'

const SearchByCity = ({ onSearch, loading }) => {
  const [city, setCity] = useState('')
  const [validationError, setValidationError] = useState('')

  const handleInputChange = (e) => {
    setCity(e.target.value)
    if (validationError) setValidationError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const trimmedCity = city.trim()

    if (!trimmedCity) {
      setValidationError('Please enter a city name.')
      onSearch('')
      return
    }

    onSearch(trimmedCity)
  }

  return (
    <Form className="mt-8" onSubmit={handleSubmit}>
      <Field>
        <Label
          className="block w-fit text-xs font-semibold tracking-wide"
          htmlFor="city"
        >
          City
        </Label>
        <Input
          id="city"
          className={`w-full px-4 py-3 text-sm font-medium border-2 rounded-xl focus:outline-none ${validationError ? 'border-red-500' : 'border-slate-200 focus:border-orange-500'} mt-2`}
          placeholder="Enter a city name"
          value={city}
          onChange={handleInputChange}
          error={validationError}
        />
        {validationError && (
          <Error className="text-red-500 text-sm mt-1">{validationError}</Error>
        )}
      </Field>
      <Button
        className="w-full px-4 py-3 rounded-xl text-white bg-orange-500 hover:bg-orange-600 border-none focus:outline-none focus:bg-orange-600 cursor-pointer mt-4"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Search'}
      </Button>
    </Form>
  )
}

export { SearchByCity }
