const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`w-full px-4 py-3 rounded-xl text-white bg-orange-500 hover:bg-orange-600 border-none focus:outline-none focus:bg-orange-600 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }
