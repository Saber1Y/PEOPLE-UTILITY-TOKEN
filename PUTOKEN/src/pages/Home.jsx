import React from 'react';
import styles from '../style';

import {
  Business,
  CardDeal,

  Hero,
  Stats,
  Choose,
} from '../components';
// import Marketplace from '../components/Marketplace';

const Home = () => {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <CardDeal />
          <Choose />
        </div>
      </div>
    </>
  );
};

export default Home;
