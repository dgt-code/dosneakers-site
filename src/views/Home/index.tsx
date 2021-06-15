import React, { useState } from 'react';
import { ModalSignup } from 'src/components';

export const Home: React.FC = () => {
  const [ open, setOpen ] = useState(false);

  return(
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <ModalSignup
        openModal={open}
        closeModal={() => setOpen(false)} />
    </>
  );
};

Home.displayName = 'Home';
