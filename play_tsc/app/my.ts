import 'source-map-support/register'
import * as basic from './01_types/01_basictype'

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
