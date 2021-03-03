import PropTypes from 'prop-types'

const UserItem = ({ thumbnail, firstName, lastName, username, email }) => (
  <div key={email}>
    {JSON.stringify({ thumbnail, firstName, lastName, username, email })}
  </div>
)

UserItem.propTypes = {
  thumbnail: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
}
export default UserItem
