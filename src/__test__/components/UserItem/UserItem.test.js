import { render, cleanup } from '@testing-library/react'
import UserItem from '../../../components/userItem/UserItem.jsx'
const mockThumbnail = 'https://randomuser.me/api/portraits/thumb/women/43.jpg'
const mockFirstName = 'Nour Elhouda'
const mockLastName = 'Dhaouadi'
const mockUsername = 'username'
const mockEmail = 'dhaouadi.nour.elhouda@gmail.com'
afterEach(cleanup)
describe('UserItem', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(
      <UserItem
        thumbnail={mockThumbnail}
        firstName={mockFirstName}
        lastName={mockLastName}
        username={mockUsername}
        email={mockEmail}
      />
    )
    expect(
      asFragment(
        <UserItem
          thumbnail={mockThumbnail}
          firstName={mockFirstName}
          lastName={mockLastName}
          username={mockUsername}
          email={mockEmail}
        />
      )
    ).toMatchSnapshot()
  })
})
