import { toPartialNames } from './utils'

describe('toPartialnames()', () => {

  it('creates correct array', () => {
    const names = toPartialNames('private.accounts.details')

    expect(names.length).toBe(3)
    expect(names[0]).toBe('private')
    expect(names[1]).toBe('private.accounts')
    expect(names[2]).toBe('private.accounts.details')
  })
})
