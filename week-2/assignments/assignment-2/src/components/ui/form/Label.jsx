const Label = ({ children, className = '', ...props }) => {
  return (
    <label
      className={`block w-fit text-xs font-semibold tracking-wide ${className}`}
      {...props}
    >
      {children}
    </label>
  )
}

export { Label }
