import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { NATIONALITIES } from '../../constants'
import NationalityItem from '../../components/nationalityItem/NationalityItem.jsx'
import { updateNationality } from '../../store/actions'
import { selectNationality } from '../../store/selectors'

const Settings = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const selectedNationality = useSelector(selectNationality)
  const memoizedUpdateNationality = useCallback((nationality) => {
    dispatch(updateNationality(nationality))
    localStorage.setItem('nationality', nationality)
  }, [])

  const memoizedGoToHome = useCallback(() => {
    history.push('/')
  }, [])

  return (
    <section className='px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4'>
      <header className='flex items-center justify-between'>
        <h2 className='text-lg leading-6 font-medium text-black'>
          Address Book
        </h2>
        <button
          className='hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2'
          onClick={memoizedGoToHome}
        >
          <svg
            className='group-hover:text-light-blue-600 text-light-blue-500 mr-2'
            width='20'
            height='20'
            fill='currentColor'
          >
            <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
          </svg>
          Home
        </button>
      </header>
      <p className='text-left md:text-center'>
        {selectedNationality
          ? 'Selected nationality : ' + selectedNationality
          : 'Please select a nationality'}
      </p>
      <div className='grid grid-cols-2  gap-4'>
        {NATIONALITIES.map((item, index) => (
          <NationalityItem
            onClick={memoizedUpdateNationality}
            value={item}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}
export default Settings
