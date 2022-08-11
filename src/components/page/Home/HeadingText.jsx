const HeadingText = ({text, content, color, contentColor, size}) => {
  return (
    <div className={`text-${size} text-${color} font-extrabold relative z-10`}>
        <p className={`after:absolute after:left-[3px] after:top-[1px] after:content-['${content}'] after:text-${contentColor} after:-z-10`}>{text}</p>
    </div>
  )
}

export default HeadingText