import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
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
        <a href="https://icme.stanford.edu/">USC MS Biostats</a> graduate, NASA Scientist, 
          and founding team member at{' '}
        <a href="https://www.odysseyai.io">Odyssey AI</a>. Previously, I
        was a lead ai/ml engineer at <a href="https://edfx.com">Moody&apos;s EDFX</a>,
        lead ml researcher <a href="https://contilab.usc.edu">USC Conti Lab</a>, and worked at{' '}
        <a href="https://planet.com">NASA</a>'}
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/projects" className="button">
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
        &copy; Michael Chase <Link to="/">mikechase.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
