import { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { getUsers } from '../../store/actions'
import { selectUsers, getSearchedUser } from '../../store/selectors'
import UserItem from '../../components/userItem/UserItem.jsx'
import { MAX_LOADED_USERS } from '../../constants'

const Home = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)
  const usersList = Object.keys(users).map((key) => users[key])
  const [searched, setSearched] = useState('')

  useEffect(() => {
    dispatch(getUsers({ size: 50, nationality: 'CH' }))
  }, [dispatch])

  const memoizedGetUser = useCallback(() => {
    dispatch(getUsers({ size: 50, nationality: 'CH' }))
  }, [])

  const memoizedSearch = useCallback((event) => {
    setSearched(event.target.value)
  }, [])
  const searchedUser = useSelector(getSearchedUser(searched))

  return (
    <div>
      <div>
        <input type='text' value={searched} onChange={memoizedSearch} />
      </div>
      <div>
        *********************
        {searchedUser}
        *********************
      </div>
      *********************
      <InfiniteScroll
        dataLength={usersList.length}
        next={memoizedGetUser}
        hasMore={usersList.length < MAX_LOADED_USERS}
        loader={<h4>Loading...</h4>}
      >
        {usersList.map((user, index) => (
          <UserItem
            key={index}
            thumbnail={user.picture.thumbnail}
            firstName={user.name.first}
            lastName={user.name.last}
            username={user.login.username}
            email={user.email}
          />
        ))}
      </InfiniteScroll>
    </div>
  )
}
export default Home
