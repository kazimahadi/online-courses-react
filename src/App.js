import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistic from './components/Statistic/Statistic';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: 'topics',
          element: <Topics></Topics>
        },
        {
          path: 'statistic',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistic></Statistic>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: '/courses/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quiz></Quiz>
        }
      ]
    },
    {
      path: '*',
      element: <h1>404 not found</h1>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
