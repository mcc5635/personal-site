import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Books = () => (
  <Main
    title="Books"
    description="A list of powerful novels throughout the ages"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Books</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p><strong>Meditations</strong>: Philosophy on life&apos;s trials and inner peace.</p>
        <p><strong>The Space Economy</strong>: Future of commercial space flight.</p>
        <p><strong>Best Day Hikes in Spain</strong>: Mysterious adventures in Spain.</p>
        <p><strong>Accidentally</strong>: A collection of memories &amp; about Earth.</p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Books;
