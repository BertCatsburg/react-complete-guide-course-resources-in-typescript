import React from 'react';

export const Tabs = ({children, buttons, buttonsContainer}: {
  children: React.ReactNode,
  buttons: React.ReactNode,
  buttonsContainer: string,
}) => {
  console.log(buttonsContainer)
  const ButtonsContainer = 'menu'
  return (
    <React.Fragment>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      {children}
    </React.Fragment>
  )
}
