import * as React from 'react'
import { useRoutes } from 'react-router-dom'

// components
import BaseLayout from '@/components/Layouts/BaseLayout'
import Error404 from '@/components/Error/Error404'
import Home from '@/pages/Home'

const App: React.FC = (): JSX.Element => {
  const routes = {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '*',
        element: <Error404 />,
        title: 'error',
      },
      {
        path: '/',
        element: <Home />,
        title: 'home',
      },
    ],
  }

  const routing = useRoutes([routes])

  return <>{routing}</>
}
export default App

// const App = (): JSX.Element => {
//   return (
//     <>
//       <Routes>
//         {/* Nav Layout */}
//         <Route path="/" element={<BaseLayout />}>
//           <Route path="home" element={<Home />} />
//           <Route path="example" element={<Example />} />
//         </Route>

//         {/* None Layout */}
//         <Route path="*" element={<Error404 />} />
//       </Routes>
//     </>
//   )
// }
// export default App
