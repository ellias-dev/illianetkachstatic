const videos = {
    rd: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/eVa1CVopRD8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    medley: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/WnxHmgKAhbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    diamonds: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/Vg9oFAd8_ec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    apologise: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/C_7bgnPWJNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    razzberty: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/j_jWbETTA1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    surlefil: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/LkWgYXfndpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    doshechka: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/HKTlkM2QqyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    lugsana: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/MvdHkoRa8P0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
}



// FUNCTION ONCLICK

const videoPlace = (id) => {
    console.log(videos[id])
    document.getElementById('videoModal').innerHTML = videos[id];
}

