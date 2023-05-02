import React from 'react'
import './Visuals.css'
import cloud from '../../assets/wordclouds/CICIAward2023-04-10_all.png'
import cloud2 from '../../assets/wordclouds/CSSIAward2023-04-16_all.png'
import cloud3 from '../../assets/wordclouds/DIBBSAward2023-04-13_all.png'
import cloud4 from '../../assets/wordclouds/MRIAward2023-04-16_analysis.png'
import cloud5 from '../../assets/wordclouds/OACAward2023-04-18_computer.png'
import sentiment from '../../assets/total_sentiment.png'

const Visuals = () => {
  return (
    <>
      <p class='title'>Visuals</p>
      <p class='splash'>Here are some visuals for the data we collected on government projects</p>
      
      <div className="portfolio__item-image" style={{ textAlign: 'center' }}>
        <p class='splash'>Overall Sentiment</p>
        <img src={sentiment} alt={'Image not available'} />
      </div>
      <div className="portfolio__item-image" style={{ textAlign: 'center' }}>
        <p class='splash'>CICI Word Cloud</p>
        <img src={cloud} alt={'Image not available'} />
      </div>
      <div className="portfolio__item-image" style={{ textAlign: 'center' }}>
        <p class='splash'>CSSI Word Cloud</p>
        <img src={cloud2} alt={'Image not available'} />
      </div>
      <div className="portfolio__item-image" style={{ textAlign: 'center' }}>
        <p class='splash'>DIBBS Word Cloud</p>
        <img src={cloud3} alt={'Image not available'} />
      </div>
      <div className="portfolio__item-image" style={{ textAlign: 'center' }}>
        <p class='splash'>MRI Word Cloud</p>
        <img src={cloud4} alt={'Image not available'} />
      </div>
      <div className="portfolio__item-image" style={{ textAlign: 'center' }}>
        <p class='splash'>OAC Word Cloud</p>
        <img src={cloud5} alt={'Image not available'} />
      </div>
      {/* <p class='splash'>gameshop@gmail.com</p> */}
    </>
  )
}

export default Visuals