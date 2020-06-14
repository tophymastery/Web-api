//  standard function
export function repeatString (str: string, times: number): string {
  let result = ''
  for (let time = 0; time < times; time++) {
    result += str
  }

  return result
}

// arrow and function type
export const MyFunc = (a: number, b: number): number => a + b
export const MyFunc2 = (a: number, b: number): number => {
  return a + b
}

export type RepeatStringFunc = (str: string, times: number) => string
export const repeatStringFunc: RepeatStringFunc = (str, times) => {
  return repeatString(str, times)
}

// usage of function type
type User = {
  firstName: string
  lastName: string
}

type CallBack = (err: Error | null, user: User) => void

export function execute (input: string, callback: CallBack): void {
  //  do something
  console.log(input)
  callback(null, { firstName: 'tophy', lastName: 'mastery' })
}
