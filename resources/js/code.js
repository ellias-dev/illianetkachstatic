const videos = {
    rd: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/dGJtTX7V8mc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    medley: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/PQteuhCVKzY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    diamonds: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/PDhRyDQXDFk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    apologise: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/86U8rm9M-1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    razzberty: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/2DIor5rdY_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    surlefil: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/vfoPcJndPtw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    doshechka: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/c824S19-d8Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    lugsana: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/q-61dp7BWik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
}



// FUNCTION ONCLICK

const videoPlace = (id) => {
    console.log(videos[id])
    document.getElementById('videoModal').innerHTML = videos[id];
}

