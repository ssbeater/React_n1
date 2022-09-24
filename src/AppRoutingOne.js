import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useNavigate} from 'react-router-dom'

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';

function AppRouting() {

  let logged = localStorage.getItem('credentials')

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'Desc 1'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'Desc 2'
    },
    {
      id: 3,
      name: 'Task 3',
      description: 'Desc 3'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials')
    console.log('User Logged?', logged)
  }, [])

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQS |</Link>
          <Link to='/any404'>| Not existing Route |</Link>
          <Link to='/login'>| LogIn |</Link>
          <Link to='/task/1'>| Task 1 |</Link>
          <Link to='/task/2'>| Task 2 |</Link>
          <Link to='/task/3'>| Task 3 |</Link>
        </aside>
        <main>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/faqs' element={<AboutPage/>}/>

            <Route path='/login'>
              {
                !logged ? 
                  <Route path='/login' element={<LoginPage/>}/>
                  :
                  <Route path='/login' element={<Navigate replace to='/'/>}/>
              }
            </Route>

            <Route path='/profile'>
              {
                logged ? 
                  <Route path='/profile' element={<ProfilePage/>}/>:
                  <Route path='/profile' element={<Navigate replace to='/login'/>}/>
              }
            </Route>

            <Route path='/tasks' element={<TasksPage/>}/>
            <Route 
              exact 
              path='/task/:id'
              element={<TaskDetailPage tasks={taskList}/>}
            />
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRouting;
