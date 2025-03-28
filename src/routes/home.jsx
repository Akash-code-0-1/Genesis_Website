import Hero_section from '../components/Hero_Section';
import Logo_Showcase from '../components/LogoShowcase';
import AboutGenesis from '../components/AboutGenesis';
import SolutionsSection from '../components/SolutionsSection';
import ExpertiseSection from '../components/ExpertiseSection';
import SpecializedSection from '../components/SpecializedSection';
import ServiceDetails from '../components/ServiceDetails';
import PartnersAwardsSection from '../components/partnersSection';
import CaseStudy from '../components/CaseStudy';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <div>
      <Hero_section />
      <Logo_Showcase />
      <AboutGenesis />
      <SolutionsSection />
      <ExpertiseSection />
      <SpecializedSection />
      <ServiceDetails />
      <PartnersAwardsSection />
      <CaseStudy />
      <Testimonial />
    </div>
  )
}

export default Home;

