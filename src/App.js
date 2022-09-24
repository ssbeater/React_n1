import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import LoginPage from './pages/auth/LoginPage';
import Dashboard from './pages/dashboard/Dashboard';
import TasksPage from './pages/tasks/TasksPage';
import NotFoundPage from './pages/404/NotFoundPage';
import RegisterPage from './pages/auth/RegisterPage';

function App() {

  // todo change to value from sessionStorage
  let loggedIn = true

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw'
    }}>
      <Router>
        {/** Route Switch */}
        <Routes>

          {/** Redirect to protect our routes */}
          <Route exact path='/'>
            {loggedIn ?
              <Route path='/' element={<Navigate replace to='/dashboard'/>}/>
              :
              <Route path='/' element={<Navigate replace to='/login'/>}/>
            }
          </Route>

          {/** Register Route */}
          <Route path='/newAccount' element={<RegisterPage/>}/>

          {/** Login Route */}
          <Route path='/login' element={<LoginPage/>}/>

          {/** Dashboard Route (protected) */}
          <Route exact path='/dashboard'>
            {loggedIn ?
              <Route path='/dashboard' element={<Dashboard/>}/>
              :
              <Route path='/dashboard' element={<Navigate replace to='/login'/>}/>
            }
          </Route>

          {/** Task Page (protected) */}
          <Route exact path='/tasks'>
            {loggedIn ?
              <Route path='/tasks' element={<TasksPage/>}/>
              :
              <Route path='/tasks' element={<Navigate replace to='/login'/>}/>
            }
          </Route>

          {/** Not Found */}
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
