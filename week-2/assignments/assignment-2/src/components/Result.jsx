import { Image } from './ui/Image'
import { TypographyH2 } from './ui/typography/TypographyH2'
import { TypographyH3 } from './ui/typography/TypographyH3'
import { TypographyP } from './ui/typography/TypographyP'

const Result = ({ data, className = '' }) => {
  const { name, main, weather } = data

  const { icon, description } = weather[0]

  const { temp, humidity } = main

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

  return (
    <div className={`${className}`}>
      <TypographyH2>{name}</TypographyH2>

      <Image src={iconUrl} alt={description} />

      <TypographyH3>{description}</TypographyH3>

      <TypographyP className="font-bold mt-4">
        Temperature: {Math.round(temp)}°C
      </TypographyP>

      <TypographyP className="font-bold mt-2">
        Humidity: {humidity}%
      </TypographyP>
    </div>
  )
}

export { Result }
