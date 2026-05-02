const Layout = ({ children, className = '' }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen gap-8 ${className}`}
    >
      {children}
    </div>
  )
}

export { Layout }
