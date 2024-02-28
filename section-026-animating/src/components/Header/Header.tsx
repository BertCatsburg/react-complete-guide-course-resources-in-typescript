import {useState} from 'react';
import React from 'react'
import {motion, AnimatePresence} from "framer-motion";

import {NewChallenge} from '../index';

export const Header = () => {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState<boolean | null>(null);

  function handleStartAddNewChallenge() {
    setIsCreatingNewChallenge(true);
  }

  function handleDone() {
    setIsCreatingNewChallenge(false);
  }

  return (
    <>
      <AnimatePresence>
        {
          isCreatingNewChallenge && <NewChallenge onDone={handleDone}/>
        }
      </AnimatePresence>

      <header id="main-header">
        <h1>Your Challenges</h1>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: {type: 'spring', stiffness: 500, mass: 10}
          }}
          onClick={handleStartAddNewChallenge}
          className="button"
        >
          Add Challenge
        </motion.button>
      </header>
    </>
  );
}
