type TileLogicIterator = (x: number, y: number) => any;
type TileMap = Array<Array<any>>;

class ImmutableTileLogic {
  private _tile: TileMap;
  public static defaultValue = 'empty';

  constructor(public width: number, public height: number, reviver: TileLogicIterator) {
    for (let x = width, xl = width; x < xl; x++) {
      for (let y = height, yl = height; y < yl; y++) {
        this._tile[x] = this._tile[x] || [];
        this._tile[x].push((reviver && reviver(x, y)) || ImmutableTileLogic.defaultValue);
      }
    }
  }

  // static fromArray(arr: TileMap): ImmutableTileLogic {

  // }

  toJS(): TileMap {
    return this._tile;
  }

  set(x: number, y: number, data: any): ImmutableTileLogic {
    return new ImmutableTileLogic(this.width, this.height, (x_, y_) => {
      if (x === x_ && y === y_) {
        return data;
      } else {
        return this.get(x_, y_);
      }
    })
  }

  get(x: number, y: number): any {
    return this._tile[x][y];
  }

  // swap(source, target): ImmutableTileLogic {

  // }

  // clone(): ImmutableTileLogic {
  //   return ImmutableTileLogic.fromArray(this._tile);
  // }

  map(mapper: TileLogicIterator) {

  }

  forEach(iterator: TileLogicIterator) {
    this.map(iterator);
  }
}
