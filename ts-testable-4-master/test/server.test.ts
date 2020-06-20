import * as Supertest from 'supertest'
import server from '../app/server'

describe('Calc', () => {
  it('', async () => {
    const response = await Supertest(server).post('/calc').send({
      firstNumber: 100,
      secondNumber: 99,
      operation: '+'
    })

    expect(response.body.result).toEqual(199)
  })
})
