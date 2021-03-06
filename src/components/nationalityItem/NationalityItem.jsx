import { useCallback } from 'react'
import PropTypes from 'prop-types'

const NationalityItem = ({ onClick, value }) => {
  const memoizedUpdateNationality = useCallback(() => {
    onClick(value)
  }, [])
  return (
    <button
      onClick={memoizedUpdateNationality}
      className='hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200 flex items-center justify-center'
    >
      <div>{value}</div>
    </button>
  )
}

NationalityItem.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
}

export default NationalityItem
