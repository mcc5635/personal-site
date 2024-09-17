import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

// add PUBLIC_URL for deployment needs

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="images/me2.jpeg" alt="" />
      </Link>
      <header>
        <h2>Michael Chase</h2>
        <p>
          <a href="mailto:themikechase@gmail.com">themikechase@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Michael. I am a{' '}
        <a href="https://usc.edu/"><strong>USC MS Biostats</strong></a> graduate,
        <strong><a href="https://www.nasa.gov/"> NASA</a></strong> Scientist, and
        founder of <a href="https://www.122longevity.com"><strong>122 Longevity</strong></a>.
        Previously, I was a lead ai/ml engineer at <a href="https://edfx.com"><strong>Moody&apos;s EDFX</strong></a>,
        lead data scientist at{' '}<a href="https://contilab.usc.edu"><strong>USC Conti Lab</strong></a>, and
        co-founder of{' '}<a href="https://darwincloud.xyz"><strong>Darwin</strong></a> and <a href="https://biofusionlabs.co"><strong>Biofusion Labs.</strong></a>

        {' '}Contact for <a href="https://cofractional.com"><strong>Fractional CTO</strong> services</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="https://x.com/mikechase_" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Michael Chase <Link to="/">mikecchase.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
