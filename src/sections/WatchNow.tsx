import { boy_background, boy_background_mobile } from "../assets"
import { CTASection } from "../components/CTASection"

const WatchNow = () => {
  return (
    <CTASection
      heading="Watch now, cancel anytime."
      description="Sign up risk free. Cancel your Amazon Prime Video membership anytime."
      background={boy_background}
      background_mobile={boy_background_mobile}
      membershipInfo={false}
      sectionColor='blue'
      className="md:pl-[55%]"
    />
  )
}

export default WatchNow