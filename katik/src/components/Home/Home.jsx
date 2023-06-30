import ButtonAskMeAnything from '../Global/ButtonAskMeAnything/ButtonAskMeAnything';
import Layout from '../Global/Layout/Layout';
import HomeBanner from './HomeBanner';

const Home = () => {
 return (
  <Layout type='home'>
   <HomeBanner />
   <ButtonAskMeAnything type='home' />
  </Layout>
 );
};

export default Home;
