import React, { Fragment, useState } from 'react'

const AnimatedNavigation = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Fragment>
      <button className='nav-btn open-btn' onClick={() => setNavOpen(true)}>
        <i className='fas fa-bars'></i>
      </button>

      <img
        src='https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png'
        alt='Logo'
        className='logo'
      />

      <p className='text'>Mobile Navigation</p>

      <div className={navOpen ? 'nav nav-black visible' : 'nav nav-black '}>
        <div className={navOpen ? 'nav nav-red visible' : 'nav nav-red '}>
          <div className={navOpen ? 'nav nav-white visible' : 'nav nav-white '}>
            <button
              className='nav-btn close-btn'
              onClick={() => setNavOpen(false)}
            >
              <i className='fas fa-times'></i>
            </button>

            <img
              src='https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png'
              alt='Logo'
              className='logo'
            />

            <ul className='list'>
              <li>
                <a href='#'>Teams</a>
              </li>
              <li>
                <a href='#'>Locations</a>
              </li>
              <li>
                <a href='#'>Life at Netflix</a>
              </li>
              <li>
                <ul>
                  <li>
                    <a href='#'>Netflix culture memo</a>
                  </li>
                  <li>
                    <a href='#'>Work life balance</a>
                  </li>
                  <li>
                    <a href='#'>Inclusion & diversity</a>
                  </li>
                  <li>
                    <a href='#'>Blog</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AnimatedNavigation
