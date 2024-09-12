import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main description="Michael Chase's personal website">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Michael Chase</Link>
          </h2>
          <p>
            Hey, I&apos;m Michael. I grew up near the first oil well on Earth, passionate about
            energy & biotech from a young age. I have spent my life working across biotech
            (longevity, foundation models, polygenic risk scores, clinical trials, food systems),
            machine learning (remote sensing, Markov chain Monte Carlo, recurrent neural networks,
            vision transformers), and energy systems (climate loss forecasting, extreme weather,
            weather derivative pricing, policy sentiment).
          </p>
        </div>
      </header>
      <p>
        You can find me elsewhere on{' '}
        <Link to="https://x.com/mikechase_"><strong>X</strong></Link>,{' '}
        <Link to="https://github.com/mcc5635"><strong>Github</strong></Link>, or{' '}
        <Link to="/contact"><strong>Contact</strong></Link> me.
      </p>
      <p>
        Also, we&apos;re building the first <strong><a href="https://veteransdomevillage.com">Geodesic Dome Community For Veterans</a></strong> on Earth by 2030 in Los Angeles, California.{' '}
      </p>
      <p>
        Depreciated Site <a href="https://mikechase.xyz">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
