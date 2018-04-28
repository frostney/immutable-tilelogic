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

  static fromArray(arr: TileMap) {

  }

  toJS(): TileMap {
    return this._tile;
  }

  set(x: number, y: number, data: any): ImmutableTileLogic {

  }

  get(x: number, y: number): any {

  }

  swap(source, target): ImmutableTileLogic {

  }

  clone(): ImmutableTileLogic {
    return ImmutableTileLogic.fromArray(this._tile);
  }

  map(mapper: TileLogicIterator) {

  }

  forEach(iterator: TileLogicIterator) {
    this.map(iterator);
  }
}
