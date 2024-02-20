import React, { createContext, useState } from 'react';
import {ChallengeInterface} from '../types'

interface ChallengesContextInterface {
  challenges: ChallengeInterface[]
  addChallenge: (challenge: ChallengeInterface) => void
  updateChallengeStatus: (challengeId: string, newStatus: string) => void

}
export const ChallengesContext = createContext<ChallengesContextInterface>({
  challenges: [],
  addChallenge: () => {},
  updateChallengeStatus: () => {},
});

interface ChallengesContextProviderInterface {
  children: React.ReactNode
}

export const ChallengesContextProvider = ({ children }: ChallengesContextProviderInterface) => {
  const [challenges, setChallenges] = useState<ChallengeInterface[]>([]);

  function addChallenge(challenge: ChallengeInterface) {
    setChallenges((prevChallenges: ChallengeInterface[]) => [
      { ...challenge, id: Math.random().toString(), status: 'active' },
      ...prevChallenges,
    ]);
  }

  function deleteChallenge(challengeId: string) {
    setChallenges((prevChallenges) =>
      prevChallenges.filter((challenge) => challenge.id !== challengeId)
    );
  }

  function updateChallengeStatus(challengeId: string, newStatus: string) {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) => {
        if (challenge.id === challengeId) {
          return { ...challenge, status: newStatus };
        }
        return challenge;
      })
    );
  }

  const challengesContext = {
    challenges,
    addChallenge,
    deleteChallenge,
    updateChallengeStatus,
  };

  return (
    <ChallengesContext.Provider value={challengesContext}>
      {children}
    </ChallengesContext.Provider>
  );
}
