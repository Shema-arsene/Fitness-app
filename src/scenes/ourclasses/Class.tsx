type Props = {
  name: string
  description?: string
  image: string
}

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-20 flex h-[380px] w-[450px] flex-col items-center justify-center
                            whitespace-normal bg-primary-500 text-center text-white opacity-0 transition 
                            duration-1000 hover:opacity-90 cursor-pointer`

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <h3 className="text-2xl">{name}</h3>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={name} />
    </li>
  )
}

export default Class
