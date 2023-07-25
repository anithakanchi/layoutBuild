// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      const displayContent = showContent ? '' : 'content-display-none'
      const displayLeft = showLeftNavbar ? '' : 'left-display-none'
      const displayRight = showRightNavbar ? '' : 'right-display-none'
      return (
        <div className="body-container">
          <div className={`left-navbar-container ${displayLeft}`}>
            <h1 className="left-navbar-heading">Left Navbar Menu</h1>
            <ul className="ul-container">
              <li className="list-item">Item 1</li>
              <li className="list-item">Item 2</li>
              <li className="list-item">Item 3</li>
              <li className="list-item">Item 4</li>
            </ul>
          </div>
          <div className={`content-container ${displayContent}`}>
            <h1 className="content-heading">Content</h1>
            <p className="paragraph">Lorem ipsum</p>
          </div>
          <div className={`right-navbar-container ${displayRight}`}>
            <h1 className="right-navbar-heading">Right Navbar </h1>
            <p className="ad-container">Ad 1</p>
            <p className="ad-container">Ad 2</p>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
