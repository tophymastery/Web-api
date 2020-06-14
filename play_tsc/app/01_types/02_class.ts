export class Regtangle {
  private width: number = 0
  private height: number = 0

  constructor (width: number, height: number) {
    this.width = width
    this.height = height
  }

  area (): number {
    return this.width * this.height
  }
}
