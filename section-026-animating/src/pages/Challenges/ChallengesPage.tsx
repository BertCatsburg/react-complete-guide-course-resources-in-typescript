import {Header, Challenges} from '../../components'
import React from 'react'
import {ChallengesContextProvider} from '../../store/challenges-context'

export const ChallengesPage = () => {
  return (
    <ChallengesContextProvider>
      <Header />
      <main>
        <Challenges />
      </main>
    </ChallengesContextProvider>
  );
}
