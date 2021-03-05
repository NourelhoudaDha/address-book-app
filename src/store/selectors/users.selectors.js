export const selectUsers = ({ users }) => users.list

export const isLoadingUsers = ({ users }) => users.loading

export const selectErrorUsers = ({ users }) => users.error

export const getSearchedUser = (searched) => (store) => {
  const currentList = store.users.list
  return Object.keys(currentList).filter((key) => {
    const fullName = currentList[key].name.first + currentList[key].name.last
    if (fullName.search(searched)) {
      return true
    }
    return false
  })
}
