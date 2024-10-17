interface CycleArgs<T> {
  items: T[]
}

export class Cycle<T> {
  private _items: T[];

  constructor(args: CycleArgs<T>) {
    this._items = args.items;
  }

  * cycle() {
    while (true) {
      for (const item of this._items) {
        yield item;
      }
    }
  }
}

export function cycleFor<T>(items: T[]) {
  return new Cycle({ items }).cycle();
}
