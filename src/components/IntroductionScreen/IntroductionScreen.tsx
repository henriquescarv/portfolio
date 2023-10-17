import React from 'react';
import { portfolioLocale } from '../../locales/portfolio.br';

const IntroductionScreen = () => {
  const someFunc = () => {
    return null
  }

  return (
    <>
      {portfolioLocale.initialSection.name}
      {portfolioLocale.initialSection.titleFront}
      {portfolioLocale.initialSection.titleDev}
      {portfolioLocale.initialSection.description}
    </>
  )
}

export default IntroductionScreen;