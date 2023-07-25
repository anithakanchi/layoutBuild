// Write your code here

import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const isShowContent = showContent ? 'checked' : ''
      const isShowLeftNavbar = showLeftNavbar ? 'checked' : ''
      const isShowRightNavbar = showRightNavbar ? 'checked' : ''
      const toggleShowContent = () => {
        onToggleShowContent()
      }
      const toggleShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const toggleShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="layout-container">
          <h1 className="layout-heading">Layout</h1>
          <div>
            <div className="input-container">
              <input
                type="checkbox"
                id="content"
                onChange={toggleShowContent}
                checked={isShowContent}
              />
              <label htmlFor="content">Content</label>
            </div>
            <div className="input-container">
              <input
                type="checkbox"
                id="left"
                onChange={toggleShowLeftNavbar}
                checked={isShowLeftNavbar}
              />
              <label htmlFor="left">Left Navbar</label>
            </div>
            <div className="input-container">
              <input
                type="checkbox"
                id="right"
                onChange={toggleShowRightNavbar}
                checked={isShowRightNavbar}
              />
              <label htmlFor="right">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
