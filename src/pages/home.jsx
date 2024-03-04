import Footer from '../components/footer';
import HomeHeader from './home-component/home-header';
import HomeVideo from './home-component/home-video';
import KnmaOpen from './home-component/knma-open';
import SectionThree from './home-component/section3';
import SpotLight from './home-component/spotlite';
import LiveUser from './home-component/liveUser';
import Discover from './home-component/discover';
import BecomeMember from './home-component/becomeMember';
import Announcements from './home-component/announcements';
import Collection from './home-component/collection';

const HomePage=()=> {
  return (
    <>
      <HomeHeader />
      <HomeVideo />
      <SpotLight />
      <SectionThree />
      <KnmaOpen />
      <LiveUser />
      <Discover />
      <BecomeMember />
      <Announcements />
      <Collection />
      <Footer />
    </>
  );
}

export default HomePage;