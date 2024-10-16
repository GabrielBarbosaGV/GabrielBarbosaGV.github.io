interface TypoArgs {
  typing: [string, string],
  typo: string,
  index: number
}

export function typo(args: TypoArgs): [string, string] {
  const [toTypo, rest] = args.typing;

  const typo = args.typo.substring(0, toTypo.length - args.index);

  return [`${toTypo.substring(0, args.index)}${typo}${toTypo.substring(args.index + args.typo.length)}`, rest];
}
