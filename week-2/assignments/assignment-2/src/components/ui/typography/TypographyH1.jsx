const TypographyH1 = ({ children, className = '' }) => {
  return (
    <h1
      className={`text-slate-900 text-2xl font-medium tracking-tight ${className}`}
    >
      {children}
    </h1>
  )
}

export { TypographyH1 }
