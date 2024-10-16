interface StringPairArgs {
  str: string,
  index?: number
}

export class StringPair {
  private _str: string;
  private _index: number;

  constructor(args: StringPairArgs) {
    const index = args.index || 0;
    const str = args.str;

    if (index < 0 || index > str.length)
      throw new Error(`Index cannot be outside string bounds, but received ${index} for string ${args.str}`);

    this._str = str;
    this._index = index;
  }

  public getSplitString(): [string, string] {
    return [this._str.substring(0, this._index), this._str.substring(this._index)];
  }

  public stepRight(): void {
    if (this._index == this._str.length)
       throw new Error(`Stepping right outside bounds for string ${this._str}`);

    this._index++;
  }

  public stepLeft(): void {
    if (this._index == 0)
      throw new Error(`Stepping left outside bounds for string ${this._str}`);

    this._index--;
  }

  public set index(index: number) {
    if (index < 0)
      throw new Error(`Tried to set index to ${index}`);

    this._index = index;
  }

  public canStepRight(): boolean {
    return this._index < this._str.length;
  }

  public canStepLeft(): boolean {
    return this._index > 0;
  }
}
