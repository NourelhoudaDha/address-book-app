import { useEffect, useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { getUsers } from '../../store/actions'
import {
  selectUsers,
  getSearchedUser,
  selectNationality,
} from '../../store/selectors'
import UserItem from '../../components/userItem/UserItem.jsx'
import { MAX_LOADED_USERS } from '../../constants'

const Home = () => {
  const history = useHistory()

  const dispatch = useDispatch()
  const [searched, setSearched] = useState('')
  const users = useSelector(selectUsers)

  const selectedNationality = useSelector(selectNationality)
  const searchedUser = useSelector(getSearchedUser(searched))

  const usersList = searched
    ? Object.keys(searchedUser).map((key) => users[key])
    : Object.keys(users).map((key) => users[key])
  useEffect(() => {
    dispatch(getUsers({ size: 50, nationality: 'GB' }))
  }, [dispatch, selectedNationality])

  const memoizedGetUser = useCallback(() => {
    dispatch(getUsers({ size: 50, nationality: 'GB' }))
  }, [])

  const memoizedSearch = useCallback((event) => {
    setSearched(event.target.value)
  }, [])

  const memoizedGoToSettings = useCallback(() => {
    history.push('/settings')
  }, [])

  return (
    <section className='px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4'>
      <header className='flex items-center justify-between'>
        <h2 className='text-lg leading-6 font-medium text-black'>
          Address Book
        </h2>
        <button
          className='hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2'
          onClick={memoizedGoToSettings}
        >
          <svg
            className='group-hover:text-light-blue-600 text-light-blue-500 mr-2'
            width='20'
            height='20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
              clipRule='evenodd'
            />
          </svg>
          Settings
        </button>
      </header>
      <form className='relative'>
        <svg
          width='20'
          height='20'
          fill='currentColor'
          className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
          />
        </svg>
        <input
          className='focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10'
          type='text'
          aria-label='Filter users'
          placeholder='Filter users'
          value={searched}
          onChange={memoizedSearch}
        />
      </form>
      <InfiniteScroll
        dataLength={usersList.length}
        next={memoizedGetUser}
        hasMore={usersList.length < MAX_LOADED_USERS}
        loader={<h4>Loading...</h4>}
      >
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {usersList &&
            usersList.map((user, index) => (
              <UserItem
                key={index}
                thumbnail={user.picture.thumbnail}
                firstName={user.name.first}
                lastName={user.name.last}
                username={user.login.username}
                email={user.email}
              />
            ))}
        </ul>
      </InfiniteScroll>
    </section>
  )
}
export default Home
