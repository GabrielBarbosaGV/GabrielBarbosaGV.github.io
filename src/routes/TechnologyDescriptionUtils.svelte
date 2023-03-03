<script lang="ts" context="module">
  export const timeOf = (n: number) => ({
    seconds: () => n * 1000
  });

  const { stringify } = JSON;

  export const randomFromZeroToN = (n: number) => Math.floor(Math.random() * n);

  export const randomFrom = <T,>(ts: T[]) => ts[randomFromZeroToN(ts.length)];

  export const toStringifiable = (v: any): Stringifiable<V> => ({ v, stringify });

  type Stringifiable<V> = { v: V, stringify: () => string };

  export const listWithout = <T,>(ts: Stringifiable<T>[]) => ({
    from: (originalTs: Stringifiable<T>[]) => {
      const elementsToRemove = new Set<string>();

      ts.forEach(t => elementsToRemove.add(t.stringify()));

      const stripped = originalTs.filter(t => !(elementsToRemove.has(t.stringify())));

      return stripped;
    }
  });
</script>
