import PropTypes from 'prop-types'

const UserItem = ({ thumbnail, firstName, lastName, username, email }) => (
  <li>
    <a className='hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200'>
      <img
        src={thumbnail}
        x-for='user in item.users'
        width='48'
        height='48'
        className='w-7 h-7 rounded-full bg-gray-100 border-2 border-white'
      />
      <dl className='grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center'>
        <div>
          <dt className='sr-only'>Name</dt>
          <dd className='group-hover:text-white leading-6 font-medium text-black'>
            {firstName + ' ' + lastName}
          </dd>
        </div>
        <div>
          <dt className='sr-only'>Username</dt>
          <dd className='group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4'>
            {username}
          </dd>
        </div>
        <div>
          <dt className='sr-only'>Email</dt>
          <dd className='group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4'>
            {email}
          </dd>
        </div>
      </dl>
    </a>
  </li>
)

UserItem.propTypes = {
  thumbnail: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
}
export default UserItem
