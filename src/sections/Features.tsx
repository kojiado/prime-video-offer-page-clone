import { features } from "../constants"
import Feature from "../components/Feature"

const Features = () => {
  return (
    <div className="bg-white p-[60px_5%_30px_5%] grid grid-cols-1 md:grid-cols-3 justify-between gap-[28px]">
      {features.map((feature)=>(
        <Feature
          title={feature?.title}
          description={feature?.description}
          image={feature?.image}
        />
      ))}
    </div>
  )
}

export default Features