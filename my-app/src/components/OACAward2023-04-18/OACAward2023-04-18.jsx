import React, { useEffect, useState } from 'react'
import './OACAward2023-04-18.css'
import { useCart } from "react-use-cart";

const dibbs_data = await (await fetch('https://gov-scrape-1.herokuapp.com/OACAward2023-04-18/')).json();
// const dibbs_data = await (await fetch('http://localhost:5000/OACAward2023-04-18/')).json();
// const sen_dibbs_data = await (await fetch('http://localhost:5000/sen_OACAward2023-04-18/')).json();

const OACAward2023_04_18 = () => {


  return (
    <>
      <div id="altshoponly">
      <h1 class="title">OAC Award</h1>
      <div style={{ textAlign: 'center' }}>
<p class='splash'>List of keywords and their related topics obtained from topic modeling</p>
</div>
        <br></br>
        <div className="container portfolio__container">

          {dibbs_data.map((p) => {
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

export default OACAward2023_04_18