import { useState, useEffect } from 'react'
import logo from '../../assets/images/logo.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const onLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header>
      <img src={logo} alt="Logo" className="logo" />

      <button
        className="hamburger"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg">
            <g fill="#00001A" fillRule="evenodd">
              <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
              <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
            </g>
          </svg>
        ) : (
          <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg">
            <g fill="#00001A" fillRule="evenodd">
              <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
            </g>
          </svg>
        )}
      </button>

      <nav className={`nav ${isOpen ? 'nav--open' : ''}`}>
        <ul>
          <li><a href="#" onClick={onLinkClick}>Home</a></li>
          <li><a href="#" onClick={onLinkClick}>New</a></li>
          <li><a href="#" onClick={onLinkClick}>Popular</a></li>
          <li><a href="#" onClick={onLinkClick}>Trending</a></li>
          <li><a href="#" onClick={onLinkClick}>Categories</a></li>
        </ul>
      </nav>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </header>
  )
}

export default Header