import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NATIONALITIES } from '../../constants'
import NationalityItem from '../../components/nationalityItem/NationalityItem.jsx'
import { updateNationality } from '../../store/actions'
import { selectNationality } from '../../store/selectors'

const Settings = () => {
  const dispatch = useDispatch()
  const selectedNationality = useSelector(selectNationality)
  const memoizedUpdateNationality = useCallback((nationality) => {
    dispatch(updateNationality(nationality))
  }, [])

  return (
    <div>
      {NATIONALITIES.map((item, index) => (
        <NationalityItem
          onClick={memoizedUpdateNationality}
          value={item}
          key={index}
        />
      ))}
      <div> selectedNationality : {JSON.stringify(selectedNationality)}</div>
    </div>
  )
}
export default Settings
