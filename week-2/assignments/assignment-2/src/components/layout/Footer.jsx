import { TypographyP } from '../ui/typography/TypographyP'
import { TypographySmall } from '../ui/typography/TypographySmall'

const Footer = ({ children, className = '' }) => {
  return (
    <footer className={`${className}`}>
      {children && <div>{children}</div>}
      <TypographyP>
        <TypographySmall className="text-slate-400">
          © 2026 shres7ha
        </TypographySmall>
      </TypographyP>
    </footer>
  )
}

export { Footer }
