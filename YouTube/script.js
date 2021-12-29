let div = document.getElementById('video_div')
async function searchVideos() {
    div.innerHTML = null;
    let video = document.getElementById('video').value;

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${video}&type=video&key=&maxResults=20`);
    let data = await res.json();

    for ({
        id: { videoId }
    } of data.items) {
        let video_frame = document.createElement('iframe')
        video_frame.src = `https://www.youtube.com/embed/${videoId}`

        video_frame.allow = `fullscreen`
        div.appendChild(video_frame)
    }
}

async function defaultVideo(){
    let res = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=&maxResults=16');
    let data = await res.json();

    for ({id} of data.items) {
        let video_frame = document.createElement('iframe')
        video_frame.src = `https://www.youtube.com/embed/${id}`

        video_frame.allow = `fullscreen`
        div.appendChild(video_frame)
    }
}
defaultVideo()