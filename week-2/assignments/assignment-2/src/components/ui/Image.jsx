const Image = ({ className = '', ...props }) => {
  return (
    <div>
      <img className={`${className}`} {...props} />
    </div>
  )
}

export { Image }
