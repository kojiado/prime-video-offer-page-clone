import { CTASection } from "../components/CTASection"
import { background_reverse, background_mobile } from "../assets"

const GreatEntertainment = () => {
  return (
    <CTASection
      heading="Great Entertainment."
      description="Watch The Grand Tour, award-winning Amazon Originals such as The Man in the High Castle and Mozart in the Jungle, as well as popular movies and TV shows, with all titles available to download."
      background={background_reverse}
      background_mobile={background_mobile}
      membershipInfo={false}
      sectionColor='black'
      className="md:pl-[55%]"
      gradientRotation={true}
    />
  )
}

export default GreatEntertainment