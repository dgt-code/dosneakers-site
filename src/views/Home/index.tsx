import React, { useState } from 'react';
import { Modal } from 'src/components';

export const Home: React.FC = () => {
  const [ open, setOpen ] = useState(false);

  return(
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        openModal={open}
        closeModal={() => setOpen(false)}>
        <div>
          <h2>Modal</h2>
          <h4>DoSneakers</h4>
        </div>
      </Modal>
    </>
  );
};

Home.displayName = 'Home';
