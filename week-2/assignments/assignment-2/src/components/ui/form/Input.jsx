const Input = ({ error, className = '', ...props }) => {
  return (
    <input
      className={`w-full px-4 py-3 text-sm font-medium border-2 rounded-xl focus:outline-none ${error ? 'border-red-500' : 'border-slate-200 focus:border-orange-500'} ${className}`}
      {...props}
    />
  )
}

export { Input }
