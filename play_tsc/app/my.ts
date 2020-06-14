import 'source-map-support/register'
import * as basic from './01_types/01_basictype'
import * as cls from './01_types/02_class'
import * as interf from './01_types/03_interface'
import * as custom from './01_types/04_custom_type'

// inport examples
// import { Func1, Func2 } from './funcs'
// import { Func1 as Func } from './funcs'
// import * as Func from './funcs'
// import TheDefault from './funcs'

console.log(basic.repeatString('top', 3))
console.log(basic.MyFunc(1, 2))
console.log(basic.repeatStringFunc('tophy', 4))

basic.execute('input', (err, res) => {
  console.log(err)
  console.log(res.firstName)
})

const reg = new cls.Regtangle(2, 3)
console.log(reg.area())

const reg2 = interf.SecondRect
const secondReg = interf.area(reg2)
console.log(secondReg)

const reg3 = new custom.Rect()
reg3.width = 3
reg3.height = 4
console.log(custom.getArea(reg3))

const cube: custom.Cube = {
  width: 2,
  height: 3,
  depth: 4,
  area: (): number => 24
}
console.log(cube.area())
console.log(custom.plus(1, 2))
console.log(custom.plus(1, null))
console.log(custom.xTaskStatus)
console.log(custom.isString('123'))
console.log(custom.isString(123))

custom.processInput('456')
custom.processInput(456)
