import React, { useEffect, useState } from 'react'
import './DIBBSAward2023-04-13.css'
import { useCart } from "react-use-cart";

// const dibbs_data = await (await fetch('http://localhost:5000/DIBBSAward2023-04-13/')).json();
const dibbs_data = await (await fetch('https://gov-scrape-1.herokuapp.com/DIBBSAward2023-04-13/')).json();
// const sen_dibbs_data = await (await fetch('http://localhost:5000/sen_DIBBSAward2023-04-13/')).json();

const DIBBSAward2023_04_13 = () => {


  return (
    <>
      <div id="altshoponly">
      <h1 class="title">DIBBS Award</h1>
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

export default DIBBSAward2023_04_13