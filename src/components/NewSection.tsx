const NewSection = () => {
  return (
    <section className="new-section">
      <h2>New</h2>
      <ul>
        <li>
          <article>
            <h3>
              <a href="#">Hydrogen VS Electric Cars</a>
            </h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>
        </li>
        <li>
          <article>
            <h3>
              <a href="#">The Downsides of AI Artistry</a>
            </h3>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
          </article>
        </li>
        <li>
          <article>
            <h3>
              <a href="#">Is VC Funding Drying Up?</a>
            </h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </article>
        </li>
      </ul>
    </section>
  )
}

export default NewSection