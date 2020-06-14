interface InterfaceRegtangle {
  width: number
  height: number
  area(): number
}

export class Reg implements InterfaceRegtangle {
  width: number
  height: number

  area (): number {
    return this.width * this.height
  }
}

export const SecondRect = { width: 3, height: 4, area: (): number => 12 }

export function area (rect: InterfaceRegtangle): number {
  return rect.area()
}
