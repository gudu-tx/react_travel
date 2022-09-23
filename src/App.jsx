import React, { memo, Suspense, useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import useScrollTop from './hooks/useScrollTop'
import routes from './router'

const App = memo(() => {

  // const location = useLocation()
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // },[location.pathname])
  useScrollTop()

  return (
    <div className='app'>
      {/* <AppHeader/> */}
      <Suspense fallback="loading">
      <div className='page'>
        {useRoutes(routes)}
      </div>
      </Suspense>
      <AppFooter/>
    </div>
  )
})

export default App