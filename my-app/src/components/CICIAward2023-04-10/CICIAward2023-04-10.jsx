import React, { useEffect, useState } from 'react'
import './CICIAward2023-04-10.css'
import { useCart } from "react-use-cart";

const cici_data = await (await fetch('https://gov-scrape-1.herokuapp.com/CICIAward2023-04-10/')).json();
// const cici_data = await (await fetch('http://localhost:5000/CICIAward2023-04-10/')).json();
// const sen_cici_data = await (await fetch('http://localhost:5000/sen_CICIAward2023-04-10/')).json();

const CICIAward2023_04_10 = () => {


  return (
    <>
      <div id="altshoponly">
      <h1 class="title">CICI Award</h1>
      <div style={{ textAlign: 'center' }}>
<p class='splash'>List of keywords and their related topics obtained from topic modeling</p>
</div>
        <br></br>
        <div className="container portfolio__container">

          {cici_data.map((p) => {
            return (
              <article key={p.id} className='portfolio__item'>
                <p class='splash'>Key: {p.keyword}</p>
                <p class="reg">Topics:   {p.topics.join(', ')}</p>
                <p class='splash'>coherence: {p.coherence.toFixed(4)}</p>
                <p class='splash'>perplexity: {p.perplexity.toFixed(4)}</p>
                <p class='splash'>sentiment: {p.sentiment.toFixed(4)}</p>
<p class='splash'>subjectivity: {p.subjectivity.toFixed(4)}</p>
              </article>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CICIAward2023_04_10