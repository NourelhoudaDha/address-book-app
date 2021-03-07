import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import RootNavigator from './navigation/RootNavigator.jsx'
import { updateNationality } from './store/actions'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const nationality = localStorage.getItem('nationality')
    dispatch(updateNationality(nationality))
  }, [])
  return <RootNavigator />
}
export default App
