import React from 'react';

import Home from 'home/Home';
import Hobbies from 'hobbies/Hobbies';
import Contacts from 'contacts/Contacts';

const Main = () => (
  <main>
    <section>
      <Home />
    </section>
    <section>
      <Hobbies />
    </section>
    <section>
      <Contacts />
    </section>
  </main>
);

export default Main;
