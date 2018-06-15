import React, { Fragment } from 'react'
import Pitch from '../components/pitch/Pitch'
import Quote from '../components/quote/Quote'
import GetStarted from '../components/getStarted/GetStarted'
import Supported from '../components/supportedApps/Supported'

const IndexPage = () => (
  <Fragment>
    <Pitch />
    <Quote
      quote="Mathematics is the art of giving the same name to different things."
      author="Henri Poincare"
    />
    <GetStarted />
    <Supported />
  </Fragment>
)

export default IndexPage
