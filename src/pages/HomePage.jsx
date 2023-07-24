import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import HomeText from '../components/HomeText';
import FeedbackText from '../components/FeedbackText';
import BookACall from '../components/BookACall';
import Testi from '../components/Testi';
import Integrations from '../components/Integrations';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage = () => {
  document.getElementsByTagName('body')[0].style.backgroundColor = '#fff';

  return (
    <div>
      <Helmet>
        <title>Homepage - Leadrise by Template On Demand</title>
      </Helmet>
      <Header />
      <HomeHero />
      <HomeText />
      <FeedbackText />
      <BookACall />
      <Testi />
      <Integrations />
      <CTA />
      <Footer />
    </div>
  );
};
export default HomePage;
