import { useState } from 'react';
import React from 'react'

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
      {
        isCreatingNewChallenge && <NewChallenge onDone={handleDone} />
      }

      <header id="main-header">
        <h1>Your Challenges</h1>
        <button onClick={handleStartAddNewChallenge} className="button">
          Add Challenge
        </button>
      </header>
    </>
  );
}
