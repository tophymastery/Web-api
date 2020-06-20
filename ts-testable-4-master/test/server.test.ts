import * as Supertest from 'supertest'
import server from '../app/server'

describe('Calc', () => {
  it('Can plus', async () => {
    const response = await Supertest(server).post('/calc').send({
      firstNumber: 100,
      secondNumber: 99,
      operation: '+'
    })

    expect(response.body.result).toEqual(199)
  })

  it('Can subtract', async () => {
    const response = await Supertest(server).post('/calc').send({
      firstNumber: 100,
      secondNumber: 99,
      operation: '-'
    })

    expect(response.body.result).toEqual(1)
  })

  it('Can multiply', async () => {
    const response = await Supertest(server).post('/calc').send({
      firstNumber: 100,
      secondNumber: 99,
      operation: '*'
    })

    expect(response.body.result).toEqual(9900)
  })

  it('Can divide', async () => {
    const response = await Supertest(server).post('/calc').send({
      firstNumber: 100,
      secondNumber: 2,
      operation: '/'
    })

    expect(response.body.result).toEqual(50)
  })

  it('Error of invalid operation', async () => {
    const response = await Supertest(server).post('/calc').send({
      firstNumber: 100,
      secondNumber: 2,
      operation: 'do_something'
    })

    expect(response.status).toEqual(422)
    expect(response.body.error).toBeTruthy()
    expect(response.body.message).toEqual('Invalid operation')
  })
})
