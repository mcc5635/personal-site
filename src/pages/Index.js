import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Michael Chase's personal website"
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Michael Chase</Link>
          </h2>
          <p>
            Hey, I'm Michael. I grew up in Pennsylvania near the first oil well on Earth, and have been passionate about energy & biotech from a young age. I have spent my life working across machine learning (remote sensing, markov chain monte carlo, recurrent neural networks, vision transformers), 
            energy systems (climate loss forecasting, extreme weather, weather derivative pricing, policy sentiment), and biotech (foundation models, polygenic risk scores, clinical trials, food systems).
          </p>
        </div>
      </header>
      <p>
        {' '}
        You can find me elsewhere on {' '}
        <Link to="https://x.com/mikechase_">X</Link>, 
        <Link to="https://www.linkedin.com/in/michael-chase-57a0b5182/">LinkedIn</Link>,
        <Link to="https://github.com/mcc5635">Github</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {' '}
        Also, we're building the first geodesic dome community for veterans on Earth by 2030.{' '}
        <a href="https://veteransdomevillage.com">here</a>.
      </p>
      <p>
        {' '}
        Depreciated Site{' '}
        <a href="https://mikechase.xyz">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
