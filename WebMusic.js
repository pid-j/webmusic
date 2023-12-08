// WebMusic.js

console.clear();

console.log(
    `%cWebMusic\n%cLoading...`,
    `font-family: 'SF Pro Display', -apple-system, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',  'Helvetica Neue', sans-serif;
    color: #43ae21;
    font-size: 48px;`,
    `font-family: 'SF Pro Display', -apple-system, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',  'Helvetica Neue', sans-serif;
    color: #ffffff;
    font-size: 12px;`
)

const musicSelection = {
    "Luis Fonsi - Despacito": new Audio(
        "https://ia800104.us.archive.org/5/items/LuisFonsiDespacitoFt.DaddyYankee_201712/Luis%20Fonsi%20-%20Despacito%20ft.%20Daddy%20Yankee.mp3"
    ),
    "Taylor Swift - Look What You Made Me Do": new Audio(
        "https://ia803006.us.archive.org/9/items/taylor-swift-look-what-you-made-me-do/taylor-swift-look-what-you-made-me-do.mp3"
    ),
    "Wham! - Last Christmas": new Audio(
        "https://ia801507.us.archive.org/22/items/wham-last-christmas-official/Wham%20%20Last%20Christmas%20Official%20Video.mp3"
    ),
    "Rick Astley - Never Gonna Give You Up": new Audio(
        "https://archive.org/download/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4"
    ),
    "ABBA - SOS": new Audio(
        "https://ia802307.us.archive.org/21/items/abba-sos-official-music-video/ABBA%20-%20SOS%20%28Official%20Music%20Video%29.mp4"
    ),
    "ABBA - Gimme, Gimme, Gimme! (A Man After Midnight)": new Audio(
        "https://ia802306.us.archive.org/16/items/abba-gimme-gimme-gimme-a-man-after-midnight_202109/ABBA%20-%20Gimme%21%20Gimme%21%20Gimme%21%20%28A%20Man%20After%20Midnight%29.mp4"
    ),
    "ABBA - Slipping Through My Fingers": new Audio(
        "https://ia904609.us.archive.org/21/items/YYYY.ABBA.The.Visitors.YYYY/1981%20-%20ABBA%20-%20The%20Visitors/08.%20ABBA%20-%20Slipping%20Through%20My%20Fingers.mp3"
    ),
    "ABBA - One of Us": new Audio(
        "https://ia904609.us.archive.org/21/items/YYYY.ABBA.The.Visitors.YYYY/1981%20-%20ABBA%20-%20The%20Visitors/06.%20ABBA%20-%20One%20Of%20Us.mp3"
    ),
    "ABBA - Money, Money, Money!": new Audio(
        "https://ia804508.us.archive.org/17/items/abba-money-money-money-official-music-video/Abba%20-%20Money%2C%20Money%2C%20Money%20%28Official%20Music%20Video%29.mp4"
    ),
    "ABBA - Voulez-Vous": new Audio(
        "https://ia904504.us.archive.org/3/items/abba-voulez-vous-video/ABBA%20-%20Voulez-Vous%20%28Video%29.mp4"
    ),
    "ABBA - Thank You For The Music": new Audio(
        "https://ia804506.us.archive.org/29/items/abba-thank-you-for-the-music/Abba%20-%20Thank%20You%20For%20The%20Music.mp4"
    )
}; // Example music, replaceable

for (musicItem in musicSelection) {
    musicSelection[musicItem].looped = true;
};

const chooseSong = name => {
    for (musicItem in musicSelection) {
        musicSelection[musicItem].pause();
        musicSelection[musicItem].currentTime = 0;
    };

    if (!musicSelection.hasOwnProperty(name)) {
        return null;
    };

    musicSelection[name].play();
    console.log(
        `%cWebMusic\n%cNow playing: ${name}`,
        `font-family: 'SF Pro Display', -apple-system, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',  'Helvetica Neue', sans-serif;
        color: #43ae21;
        font-size: 48px;`,
        `font-family: 'SF Pro Display', -apple-system, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',  'Helvetica Neue', sans-serif;
        color: #ffffff;
        font-size: 12px;`
    )
};

const chooseSongIndex = index => {
    chooseSong(Object.keys(musicSelection)[index]);
}

console.log(
    `%cWebMusic\n%cIf you are seeing this, that means that the JS file successfully loaded with no errors.`,
    `font-family: 'SF Pro Display', -apple-system, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',  'Helvetica Neue', sans-serif;
    color: #43ae21;
    font-size: 48px;`,
    `font-family: 'SF Pro Display', -apple-system, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',  'Helvetica Neue', sans-serif;
    color: #ffffff;
    font-size: 12px;`
)

const stopSongs = () => {
    for (musicItem in musicSelection) {
        musicSelection[musicItem].pause();
        musicSelection[musicItem].currentTime = 0;
    };

    console.log(
        `%cWebMusic\n%cAll music has been stopped.`,
        `font-family: 'SF Pro Display', -apple-system, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',  'Helvetica Neue', sans-serif;
        color: #43ae21;
        font-size: 48px;`,
        `font-family: 'SF Pro Display', -apple-system, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',  'Helvetica Neue', sans-serif;
        color: #ffffff;
        font-size: 12px;`
    )
}
