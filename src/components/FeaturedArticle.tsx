import web3Mobile from "../../assets/images/image-web-3-mobile.jpg"
import web3Desktop from "../../assets/images/image-web-3-desktop.jpg"

const FeaturedArticle = () => {
  return (
    <article className="featured-article">
      <picture>
        <source media="(min-width: 48rem)" srcSet={web3Desktop} />
        <img src={web3Mobile} alt="Colorful 3D geometric shapes" />
      </picture>

      <div className="featured-article-text-grid">

        <h1>The Bright Future of Web 3.0?</h1>

        <div>
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          <a 
            href="#"
            className="read-more-btn"
          >
            Read More
          </a>
        </div>

      </div>
      
    </article>
  )
}

export default FeaturedArticle