let div = document.getElementById('video_div')
async function searchVideos() {
    let video = document.getElementById('video').value;

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${video}&type=video&key=AIzaSyBjmgRNkeCgc7GK4TTJUV0DcaDzwXBC23c&maxResults=20`);
    let data = await res.json();
    console.log(data)

    for ({
        id: { videoId }
    } of data.items) {
        //console.log(videoId)
        let video_frame = document.createElement('iframe')
        video_frame.src = `https://www.youtube.com/embed/${videoId}`

        video_frame.allow = `fullscreen`
        div.appendChild(video_frame)
    }
}