type MyRect = {
  width: number
  height: number
  area (): number
}

// typescript has type inference so we don't need to add keyword implement MyRect
export class Rect {
  width: number
  height: number

  area (): number {
    return this.width * this.height
  }
}

export function getArea (rect: MyRect): number {
  return rect.area()
}

//  intersection type
export type Object3D = {
  depth: number
}

export type Cube = MyRect & Object3D

//  constant type
export type Complete = 'completed'
export const xType: Complete = 'completed'

//  union type
type NullableNumber = number | null
export const nullable1: NullableNumber = 10
export const nullable2: NullableNumber = null

export function plus (lhs: NullableNumber, rhs: NullableNumber): number {
  if (!lhs || !rhs) {
    return 0
  }

  return lhs + rhs // typescript can infer lhs and rhs type as number
}

type TaskStatus = 'complete' | 'pending'
export const xTaskStatus: TaskStatus = 'pending'

// type guard
export function isString (input: string | number): input is string {
  return typeof input === 'string'
}

export function processInput (input: string | number): void {
  if (isString(input)) {
    //  typescript can infer input type as string
    console.log(input + input)
  } else {
    //  typescript can infer input type as number
    console.log(input + input)
  }
}

//  discriminated union
interface Square {
  kind: 'square'
  size: number
}

interface Regtandle {
  kind: 'regtandle'
  width: number
  height: number
}

interface Circle {
  kind: 'circle'
  radius: number
}

export type Shape = Square | Regtandle | Circle
export function areaShape (shape: Shape): number {
  switch (shape.kind) {
    case 'square': return shape.size * shape.size
    case 'regtandle': return shape.width * shape.height
    case 'circle': return Math.PI * shape.radius ** 2
  }
}

interface DisconnectedDb {
  status: 'disconnected'
  connect: () => void
}

interface ConnectedDb {
  status: 'connected'
  query: () => Array<any>
  disconnect: () => void
}

type DbConnection = DisconnectedDb | ConnectedDb
export function connect (connection: DbConnection) {
  if (connection.status === 'disconnected') {
    connection.connect()
  }
}

export function query (connection: DbConnection) {
  if (connection.status === 'connected') {
    connection.query()
  }
}

export function disconnect (connection: DbConnection) {
  if (connection.status === 'connected') {
    connection.disconnect()
  }
}
