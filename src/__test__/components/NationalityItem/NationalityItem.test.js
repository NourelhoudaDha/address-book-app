import { render, cleanup } from '@testing-library/react'
import NationalityItem from '../../../components/nationalityItem/NationalityItem.jsx'
const mockOnClick = jest.fn()
const mockNationalityValue = 'ES'
afterEach(cleanup)
describe('NationalityItem', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(
      <NationalityItem onClick={mockOnClick} value={mockNationalityValue} />
    )
    expect(
      asFragment(
        <NationalityItem onClick={mockOnClick} value={mockNationalityValue} />
      )
    ).toMatchSnapshot()
  })
})
