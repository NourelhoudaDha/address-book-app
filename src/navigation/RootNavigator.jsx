import Home from '../pages/home/Home.jsx'
import Settings from '../pages/settings/Settings.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/settings'>
          <Settings />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
