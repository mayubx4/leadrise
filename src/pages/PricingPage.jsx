import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import CTA from '../components/CTA';
import CTAPricing from '../components/CTAPricing';
import PricingPlan from '../components/PricingPlan';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const PricingPage = () => {
  document.getElementsByTagName('body')[0].style.backgroundColor = '#fff';

  return (
    <div>
      <Helmet>
        <title>Pricing - Leadrise by Template On Demand</title>
      </Helmet>
      <Header />
      <CTAPricing />
      <PricingPlan />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default PricingPage;
