import React, { useState, useEffect } from 'react'
import Loading from '@/components/Loading'
import styled from '@emotion/styled'

import styles from './Home.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

const ThemeWrap = styled.div`
  padding: 2rem;
  /* background-color: var(--theme-bg); */
  color: var(--theme-text);
  border: 1px solid var(--theme-border);
`

function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className="container">
          <ThemeWrap>
            <h6>Theme Mode</h6>
            <HomeContent />
          </ThemeWrap>

          <section className="p-3 mt-3 bg-gray-3">
            <div className="grid">
              <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-6">
                1
              </span>
              <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-6">
                2
              </span>
              <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-6">
                3
              </span>
              <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-6">
                4
              </span>
              <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-6">
                5
              </span>
              <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-6">
                6
              </span>
              <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-6">
                7
              </span>
              <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-6">
                8
              </span>
              <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-6">
                9
              </span>
              <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-6">
                10
              </span>
              <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-6">
                11
              </span>
              <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-6">
                12
              </span>
            </div>
          </section>

          <section className="p-3 mt-3 bg-gray-3">
            <div className="grid">
              <span className="col-lg-3 col-md-6 col-6 bg-gray-6">1</span>
              <span className="col-lg-3 col-md-6 col-6 bg-gray-6">2</span>
              <span className="col-lg-3 col-md-6 col-6 bg-gray-6">3</span>
              <span className="col-lg-3 col-md-6 col-6 bg-gray-6">4</span>
            </div>
          </section>
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
      <h1>???????????????????????????</h1>
      <p>
        ????????? ??? ?????? ??? ???????????? ??????????????????. ????????? ?????????, ???, ????????????.
        ?????? ?????? ??? ?????? ??????, ???????????? ??? ?????????.
      </p>
      <div className="mt-5 flex gap-2 justify-center">
        <button className="btn btn-primary p-2 ">primary</button>
        <button className="btn btn-secondary p-2">secondary</button>
      </div>

      <hr className="my-4" />
    </>
  )
}

export default Home
