import { useCallback } from 'react'
import PropTypes from 'prop-types'

const NationalityItem = ({ onClick, value }) => {
  const memoizedUpdateNationality = useCallback(() => {
    onClick(value)
  }, [])
  return (
    <view type='text' onClick={memoizedUpdateNationality}>
      {value}
    </view>
  )
}

NationalityItem.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
}

export default NationalityItem
