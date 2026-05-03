import { Image } from './ui/Image'
import { TypographyH2 } from './ui/typography/TypographyH2'
import { TypographyH3 } from './ui/typography/TypographyH3'
import { TypographyP } from './ui/typography/TypographyP'

const CurrentWeatherResult = ({ data, className = '' }) => {
  const { name, main, weather } = data

  const { icon, description } = weather[0]

  const { temp, humidity } = main

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

  return (
    <article className={`${className}`}>
      <TypographyH2 className="text-slate-900">{name}</TypographyH2>

      <Image src={iconUrl} alt={description} />

      <TypographyH3 className="capitalize text-orange-600 text-sm font-semibold tracking-wide">
        {description}
      </TypographyH3>

      <TypographyP className="text-slate-500 text-sm font-bold mt-4">
        Temperature: {Math.round(temp)}°C
      </TypographyP>

      <TypographyP className="text-slate-500 text-sm font-bold mt-2">
        Humidity: {humidity}%
      </TypographyP>
    </article>
  )
}

export { CurrentWeatherResult }
