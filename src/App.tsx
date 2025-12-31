import FeaturedArticle from "./components/FeaturedArticle"
import Header from "./components/Header"
import NewSection from "./components/NewSection"
import NumberedArticles from "./components/NumberedArticles"

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="top-section-grid">

          <FeaturedArticle />
          <NewSection />
        
        </div>

        <NumberedArticles />

      </main>
    </div>
  )
}

export default App