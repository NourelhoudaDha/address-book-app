import { getUsersBuilder } from '../../services/users.service'
import { mockResultRandomUser } from '../../__mock__/mocks'
let mockGet = jest.fn()
const mockAxios = {
  get: mockGet,
}
const getMockData = () => {
  const mockNationality = 'US'
  const mockSize = 10
  return {
    mockNationality,
    mockSize,
  }
}

describe('[getUsersBuilder]', () => {
  describe('Given empty object', () => {
    const parmas = {}
    it('Should rejects missing parameters', async () => {
      await expect(
        getUsersBuilder({ axios: mockAxios }, parmas)
      ).rejects.toEqual(new Error('missing parameters'))
    })
  })

  describe('Given nationality equal US and size equal 10', () => {
    const { mockNationality, mockSize } = getMockData()
    const parmas = { nationality: mockNationality, size: mockSize }
    describe('When axios.get rejects', () => {
      beforeEach(async () => {
        mockGet.mockRejectedValueOnce(new Error('error happened'))
      })
      it('Should rejects error happened', async () => {
        await expect(
          getUsersBuilder({ axios: mockAxios }, parmas)
        ).rejects.toEqual(new Error('error happened'))
      })
    })
    describe('When axios.get resolves', () => {
      beforeEach(async () => {
        mockGet.mockResolvedValueOnce(mockResultRandomUser)
      })
      it('Should resolves', async () => {
        await expect(
          getUsersBuilder({ axios: mockAxios }, parmas)
        ).resolves.toEqual(mockResultRandomUser)
      })
    })
  })
})
