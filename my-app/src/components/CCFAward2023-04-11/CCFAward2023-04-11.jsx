import React, { useEffect, useState } from 'react'
import './CCFAward2023-04-11.css'
import { useCart } from "react-use-cart";

const ccf_data = await (await fetch('https://gov-scrape-1.herokuapp.com/CCFAward2023-04-11/')).json();
// const ccf_data = await (await fetch('http://localhost:5000/CCFAward2023-04-11/')).json();
// const sen_dibbs_data = await (await fetch('http://localhost:5000/sen_CCFAward2023-04-11/')).json();

const CCFAward2023_04_11 = () => {


  return (
    <>
      <div id="altshoponly">
      <h1 class="title">CCF Award</h1>
      <div style={{ textAlign: 'center' }}>
<p class='splash'>List of keywords and their related topics obtained from topic modeling</p>
</div>
        <br></br>
        <div className="container portfolio__container">

          {ccf_data.map((p) => {
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

export default CCFAward2023_04_11