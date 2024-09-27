import './App.css'
import { RouterProvider } from 'react-router-dom'
import Router from "./Router/Router"
import { Provider } from 'react-redux'
import store from './Redux/Store/Store'
import '@fontsource/inter';


function App() {

  return (
    <Provider store={store}>
      < div className='w-screen h-screen p-0 m-0 bg-slate-300'>
        <RouterProvider router={Router}/>
      </div>
    </Provider>
  )
}

export default App
