import 'source-map-support/register'

function abc () {
  throw Error('some error')
}

abc()
