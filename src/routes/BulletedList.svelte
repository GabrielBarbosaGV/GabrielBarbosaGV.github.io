<script lang="ts">
    import { crossfade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
	import { onDestroy } from 'svelte';
    import { tweened } from 'svelte/motion';
    
    const [send, receive] = crossfade({});

    export let points: string[];

    let bulletedList: HTMLDivElement;

    let unhighlightedPoints = points;

    let pointPositions: HTMLDivElement[] = new Array(points.length);

    let highlightedPoints: string[] = [];

    // in em
    let dotSize = 3;

    $: focusedDotSize = dotSize * 1.5;

    let shaftWidth = 1;

    $: ballHorizonalOffset = - (dotSize - shaftWidth) / 2;

    $: focusedBallHorizontalOffset = - (focusedDotSize - shaftWidth) / 2;

    let currentScrollY = 0;

    $: pointCount = points?.length ?? 1;

    // in vh
    let distanceBetweenPoints = 100;

    $: shaftHeight = distanceBetweenPoints * (pointCount - 1);

    // in %
    $: dotPositions = points.map((_, i) => i / (pointCount - 1) * 100);

    let viewportHeight: number;

    $: middleOfScreenDistance = viewportHeight / 2;

    $: middleOfScreenScrollY = middleOfScreenDistance + currentScrollY;

    $: bulletedListTop = bulletedList?.getBoundingClientRect()?.top ?? 0;

    $: bulletedListBottomDistanceToTop = bulletedListTop + bulletedListHeight;

    let bulletedListHeight: number = 0;

    $: isWithinScroll = middleOfScreenScrollY > bulletedListTop
        && middleOfScreenScrollY < bulletedListBottomDistanceToTop;

    $: hasActivePoint = isWithinScroll;

    const repeat = <T,>(elem: T, n: number) => new Array(n).map(_ => elem);

    const pointDivTop = tweened(0);

    function manipulateHighlightedPoints() {
        const [_, closestPointIndex] = pointPositions.map(p => p.getBoundingClientRect().top).reduce(([dist, oldI], b, i) => {
            const aDistanceToMiddle = dist;
            const bDistanceToMiddle = Math.abs(b - middleOfScreenDistance);

            return bDistanceToMiddle < aDistanceToMiddle && (bDistanceToMiddle < viewportHeight * 0.3 || oldI === -1)
                ? [bDistanceToMiddle, i]
                : [aDistanceToMiddle, oldI];
        }, [Infinity, -1]);

        setHighlightedPointsForClosestIndex(closestPointIndex);
        setOpacitiesForClosestIndex(closestPointIndex);
    }

    function setHighlightedPointsForClosestIndex(closestIndex: number) {
        if (!hasActivePoint) {
            highlightedPoints = [];
            unhighlightedPoints = points;
        } else if (-1 !== closestIndex) {
            highlightedPoints = [points[closestIndex]];
            unhighlightedPoints = [...points.slice(0, closestIndex), ...points.slice(closestIndex + 1)];
        }
    }

    const pointOpacities = tweened(repeat(0, points.length), {
        interpolate: (from, to) => {
            const intervals = from.map((n, i) => to[i] - n);

            return (t) => intervals.map((n, i) => from[i] + n * t);
        }
    });

    function setOpacitiesForClosestIndex(closestIndex: number) {
        pointOpacities.set(points.map((_, i) => i === closestIndex ? 100 : 0));
    }

    function newIntervalForcer(beginning: number, end: number) {
        return (n: number) => n < beginning
            ? beginning
            : n > end
            ? end
            : n;
    }

    $: forceDivTop = newIntervalForcer(0, bulletedListHeight);

    function calculatePointDivTop() {
        const top = forceDivTop(middleOfScreenScrollY - bulletedListTop);

        pointDivTop.set(top);
    };

    const interval = setInterval(() => {
        manipulateHighlightedPoints();
        calculatePointDivTop();
    }, 100);

    onDestroy(() => clearInterval(interval));
</script>

<svelte:window
    bind:scrollY={currentScrollY}
    bind:innerHeight={viewportHeight}
    />

<div
    style="
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    "

    bind:this={bulletedList}
    bind:clientHeight={bulletedListHeight}

    >

    <div
        style="
            display: flex;
            justify-content: center,
            align-items: center;
            flex-direction: column;
            flex-grow: 1;
        "
        >
        <div
            style="
                display: flex;
                justify-content: center;
                align-items: center;
            "
            >
            <div
                style="
                    width: {shaftWidth}em;
                    height: {shaftHeight}vh;
                    background-color: lightblue;
                    border-radius: 5px;
                "
                >

                {#each points as point, index (point)}
                <!-- position tracking div -->
                <div
                    style="
                        position: relative;
                        top: {dotPositions[index]}%;
                        width: 0em;
                        height: 0em;
                        background-color: lightblue;
                        border-radius: 100%;
                    "

                    bind:this={pointPositions[index]}

                    >

                </div>
                {/each}

                {#each unhighlightedPoints as point (point)}
                <!-- actual ball div -->
                <div
                    style="
                        position: relative;
                        top: {dotPositions[points.indexOf(point)]}%;
                        left:  {ballHorizonalOffset}em;
                        width: {dotSize}em;
                        height: {dotSize}em;
                        background-color: lightblue;
                        border-radius: 100%;
                        transform: translate(0%, -{(points.indexOf(point)) * 150}%);
                    "

                    out:send={{ key: point }}
                    in:receive={{ key: point }}

                    animate:flip

                    >
                    
                </div>
                {/each}

                {#each highlightedPoints as point (point)}
                <div
                    style="
                        position: fixed;
                        top: 50%;
                        width: {focusedDotSize}em;
                        height: {focusedDotSize}em;
                        background-color: lightblue;
                        border-radius: 100%;
                        transform: translate({focusedBallHorizontalOffset}em, -50%);
                    "

                    in:receive={{ key: point }}
                    out:send={{ key: point }}

                    animate:flip

                    >

                </div>
                {/each}
            </div>
        </div>
    </div>

    <div
        style="
            flex-grow: 4;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            height: {bulletedListHeight}px;
        "
        >
        <div>
            {#each points as point, index (point)}
            <div
                style="
                    position: absolute;
                    top: {$pointDivTop}px;
                    opacity: {$pointOpacities[index] / 100};
                "
                >
                {point}
            </div>
            {/each}
        </div>
    </div>

</div>
