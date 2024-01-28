import { getAllowedTransitions } from './statusTransitions'

describe('getAllowedTransitions()', () => {
  it('always returns current status among the results', () => {
    expect(getAllowedTransitions('todo')).toContain('todo')
    expect(getAllowedTransitions('inProgress')).toContain('inProgress')
    expect(getAllowedTransitions('blocked')).toContain('blocked')
    expect(getAllowedTransitions('inQa')).toContain('inQa')
    expect(getAllowedTransitions('done')).toContain('done')
    expect(getAllowedTransitions('deployed')).toContain('deployed')
  })
  it('returns allowed next states given the current state', () => {
    expect(getAllowedTransitions('todo')).toContain('inProgress')

    expect(getAllowedTransitions('inProgress')).toContain('blocked')
    expect(getAllowedTransitions('inProgress')).toContain('inQa')

    expect(getAllowedTransitions('blocked')).toContain('todo')

    expect(getAllowedTransitions('inQa')).toContain('todo')
    expect(getAllowedTransitions('inQa')).toContain('done')

    expect(getAllowedTransitions('done')).toContain('deployed')
  })
})
