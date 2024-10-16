interface IntervalsBetweenArgs {
  min: number,
  max: number,
  rng: ZeroToOneRng,
  count?: number
}

interface ZeroToOneRng {
  generate: () => number
}

export class IntervalsBetween {
  private _rng: ZeroToOneRng;
  private _min: number;
  private _max: number;
  private _count: number;

  constructor(args: IntervalsBetweenArgs) {
    this._rng = args.rng;
    this._min = args.min;
    this._max = args.max;
    this._count = args.count || Infinity;
  }

  * generate() {
    for (let i = 0; i < this._count; i++) {
      const interval = this._max - this._min;

      yield Math.round(this._rng.generate() * interval) + this._min;
    }
  }

  set min(min: number) {
    this._min = min;
  }

  set max(max: number) {
    this._max = max;
  }
}
