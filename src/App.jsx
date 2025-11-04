import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'


const App = () => {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>}/>

    </Route>
  ))
  return (
    <>
    <ToastContainer/>
   
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App