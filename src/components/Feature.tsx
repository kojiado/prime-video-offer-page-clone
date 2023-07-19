interface Props {
  title: string;
  description: string;
  image: any;
}

const Feature: React.FC<Props> = ({title,description,image}) => {
  return (
    <div className="flex flex-col items-center">
      <img className="w-[300px] object-contain" src={image}></img>
      <h3 className="text-[36px] text-black leading-[1.3] text-center py-[8px]">{title}</h3>
      <p className="text-[21px] text-black leading-[27px] font-light text-center">{description}</p>
    </div>
  )
}

export default Feature