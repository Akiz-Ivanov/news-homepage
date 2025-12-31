import retropcs from "../../assets/images/image-retro-pcs.jpg"
import laptopKeyboard from "../../assets/images/image-top-laptops.jpg"
import gameController from "../../assets/images/image-gaming-growth.jpg"

const NumberedArticles = () => {
  return (
    <section className="numbered-articles">
      <h2 className="sr-only">Featured Articles</h2>
      <ul className="numbered-articles-grid">
        <li>
          <article>
            <img src={retropcs} alt="Retro PC with colorful lighting" />
            <div>
              <span className="article-number">01</span>
              <h3>
                <a href="#">Reviving Retro PCs</a>
              </h3>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </article>
        </li>
        <li>
          <article>
            <img src={laptopKeyboard} alt="Laptop keyboard" />
            <div>
              <span className="article-number">02</span>
              <h3>
                <a href="#">Top 10 Laptops of 2022</a>
              </h3>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </article>
        </li>
        <li>
          <article>
            <img src={gameController} alt="Gaming controller" />
            <div>
              <span className="article-number">03</span>
              <h3>
                <a href="#">The Growth of Gaming</a>
              </h3>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </article>
        </li>
      </ul>
    </section>
  )
}

export default NumberedArticles