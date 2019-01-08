import { convertMDToUTF } from './mdUtil'

describe('mdUtil', () => {
  it('getBoldPhrases', () => {
    expect(true).toBeTruthy()
    const input = 'hello **world**. ok _wor_ ld. ha ~~haha~~'
    const output = convertMDToUTF(input)
    console.log(output)
  })
})
