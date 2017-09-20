import solutions from './solutions'

describe('solutions reducer', () => {
  it('should handle initial state', () => {
    expect(
      solutions(undefined, {})
    ).toEqual([])
  })

  it('should handle PARSE', () => {
    expect(
      solutions([], {
        type: 'PARSE',
        text: '8-4'
      })
    ).toEqual([
      {
        text: '4'
      }
    ])

    expect(
      solutions([
        {
          text: '3+4',
          id: 0
        }
      ], {
        type: 'PARSE',
        text: '3/4',
        id: 1
      })
    ).toEqual([
      {
        text: '3+4',
        id: 0
      }, {
        text: '0.75',
        id: 1
      }
    ])

    expect(
      solutions([
        {
          text: '3*5',
          id: 0
        }, {
          text: '4(4)',
          id: 1
        }
      ], {
        type: 'PARSE',
        text: '4(4)',
        id: 2
      })
    ).toEqual([
      {
        text: '3*5',
        id: 0
      }, {
        text: '4(4)',
        id: 1
      }, {
        text: '16',
        id: 2
      }
    ])
  })

})
