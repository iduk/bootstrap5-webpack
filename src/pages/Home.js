import React, { useState, useEffect } from 'react'
import styles from './Home.module.scss'
import classnames from 'classnames/bind'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const cx = classnames.bind(styles)

const ThemeWrap = styled.div`
  height: 280px;
  padding: 3rem 2rem;
  margin-top: 2rem;
  &[data-theme='dark'] {
    background-color: var(--bg);
    color: var(--color);
    border: 1px solid var(--border);
  }
  &[data-theme='light'] {
    background-color: var(--bg);
    color: var(--color);
    border: 1px solid var(--border);
  }
`

function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 0)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className={cx('home')}>
          <ThemeWrap
            data-theme="light"
            className="flex flex-col justify-center text-center"
          >
            <h6>Theme Mode: Light</h6>
            <HomeContent />
          </ThemeWrap>

          <ThemeWrap
            data-theme="dark"
            className="flex flex-col justify-center text-center"
          >
            <h6>Theme Mode: Dark</h6>
            <HomeContent />
          </ThemeWrap>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

function HomeContent() {
  return (
    <>
      <h5>Welcome, Pictor World</h5>

      <p>
        별빛이 이 가을 못 슬퍼하는 버리었습니다. 청춘이 강아지, 패, 계십니다.
        남은 풀이 옥 내린 노새, 아름다운 못 봅니다.
      </p>
      <div className="mt-5 flex gap-2 justify-center">
        <button className="btn btn-primary p-2 ">primary</button>
        <button className="btn btn-secondary p-2">secondary</button>
      </div>
    </>
  )
}

export default Home
