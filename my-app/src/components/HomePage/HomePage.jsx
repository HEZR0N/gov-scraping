import React from 'react'
import './HomePage.css'
// const dibbs_data = await (await fetch('http://localhost:5000/DIBBSAward2023-04-13/')).json();
// console.log(dibbs_data)
const HomePage = () => {
  return (
    <>
      <div id="homepageonly">
        <h1 class="title">Project Trace</h1>
        {/* <p class="splash">Information about government projects scraped from the web!</p> */}
        <p class="splash">This project is made by UTSA students! We scraped gigabytes of data from the web related to government awards.</p>
        <p class="splash">We processed this data and slimmed it down. In each tab, you will find keywords we discovered after processing the data.</p>
        <p class="splash">We performed topic modeling on the data and also derived the coherence, perplexity, sentiment, and subjectivity of the topics generated.</p>

        {/* <div className="container portfolio__container">
          {
            dibbs_data.map((d) => {
              return (
                // <p class="reg:">keyword {d.keyword}:</p>
                <article key={d.id} className='portfolio__item'>
                  <h1>Keyword {d.keyword}</h1>
                  <p class="reg:">Topics:   {d.topics.join(', ')}</p>
                  <h3>coherence {d.coherence}</h3>
                  <h3>perplexity {d.perplexity}</h3>
                </article>
              )
            })
          }
        </div> */}

        <div id="center">
          {/* <a href="#/routename" class="btn-h">{'>'} Description!</a> */}
        </div>
      </div>
    </>
  )
}

export default HomePage