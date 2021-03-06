export const selectUsers = ({ users }) => users.list

export const isLoadingUsers = ({ users }) => users.loading

export const selectErrorUsers = ({ users }) => users.error

export const getSearchedUser = (searched) => (store) => {
  const currentList = store.users.list
  const searchedUppercased = searched.toUpperCase()
  const ids = Object.keys(currentList).filter((key) => {
    const fullName = (
      currentList[key].name.first + currentList[key].name.last
    ).toUpperCase()
    if (fullName.search(searchedUppercased) === -1) {
      return false
    }
    return true
  })
  const result = ids.map((key) => currentList[key])

  return result
}
