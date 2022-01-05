import React from 'react'
import styles from './Home.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

const Home = () => {
  return (
    <div>
      <div className={cx('wrap', 'border-secondary')}>
        <p className="display-1">Hello?</p>
        <p className="display-1">I'm Pictor.</p>
      </div>
    </div>
  )
}

export default Home
