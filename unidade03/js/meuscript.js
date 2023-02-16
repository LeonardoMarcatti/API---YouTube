$(document).ready(() => {
    $.get("https://www.googleapis.com/youtube/v3/videos", {
            part: 'contentDetails',
            id: 'H4FnHsrnBI8',
            key: 'AIzaSyB1QckaJyK9aAf2NoYc4Mo8idwm4YgcH4A'},
            data => console.log(data)
    )
});