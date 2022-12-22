import {createBrowserRouter} from 'react-router-dom'
import Welcome from './pages/Welcome';
import ErrorPage from './pages/ErrorPage';
import SlotMachine from './pages/SlotMachine';
import ShareTrade from './pages/ShareTrade';
import PreTradePrompt from './pages/PreTradePrompt';
import Chart from './pages/Chart';
import App from './App';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/welcome',
      element: <Welcome/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/slotmachine',
      element: <SlotMachine/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/share',
      element: <ShareTrade/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/prompt',
      element: <PreTradePrompt/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/chart',
      element: <Chart/>,
      errorElement: <ErrorPage/>
    }
  ])

  export default router