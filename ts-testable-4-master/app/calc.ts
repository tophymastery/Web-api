export enum Operation {
  Add = '+',
  Subtract = '-',
  Multiply = '*',
  Divide = '/'
}

export function calc(firstNumber: number, secondNumber: number, operation: Operation): number {
  switch (operation) {
    case Operation.Add:
      return firstNumber + secondNumber

    case Operation.Subtract:
      return firstNumber - secondNumber

    case Operation.Multiply:
      return firstNumber * secondNumber

    case Operation.Divide:
      return firstNumber / secondNumber
  }
}
