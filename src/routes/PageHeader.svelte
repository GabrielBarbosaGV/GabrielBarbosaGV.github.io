<script lang="ts">
    // Values in "em"
    let imageSize = 8;
    let imageTop = 3;
    let coloredHeight = 4;
</script>

<div
    style="
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    "
    >

    <div
        style="
            width: 100vw;
            height: {coloredHeight}em;
            background-color: lightblue;
            display: flex;
            justify-content: center;
            align-items: center;
        "
        >

        <div
            style="
                background-image: url('profile_picture.png');
                background-size: contain;
                height: {imageSize}em;
                width: {imageSize}em;
                position: relative;
                border-radius: 100%;
                top: {imageTop}em;
            "
            >

        </div>

    </div>

    <div
        style="
            width: 100vw;
            height: {imageSize - imageTop}em;
        "
        >

    </div>

</div>