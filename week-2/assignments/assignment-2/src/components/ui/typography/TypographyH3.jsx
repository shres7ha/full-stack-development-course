const TypographyH3 = ({ children, className = '' }) => {
  return (
    <h3
      className={`capitalize text-orange-600 text-sm font-semibold tracking-wide ${className}`}
    >
      {children}
    </h3>
  )
}

export { TypographyH3 }
