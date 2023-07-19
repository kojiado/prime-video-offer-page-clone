import { background, background_mobile } from '../assets'
import { CTASection } from '../components/CTASection'

const WatchMovies = () => {
  return (
    <>
      <CTASection
        heading="Watch movies and TV shows"
        description="Enjoy exclusive Amazon Originals as well as popular movies and TV shows. Join Prime Video now for €5.99 per month. Cancel anytime."
        background={background}
        background_mobile={background_mobile}
        membershipInfo={true}
        sectionColor='black'
        className='md:pr-[55%]'
      />
    </>
  )
}

export default WatchMovies