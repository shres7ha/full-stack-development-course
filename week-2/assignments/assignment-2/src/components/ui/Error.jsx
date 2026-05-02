const Error = ({ children, className = '' }) => {
  return <p className={`text-red-500 text-sm ${className}`}>{children}</p>
}

export { Error }
