let nomeCanal = 'backtotriangle';
let upload_id;
let a = [1,2,3,4,5,6];

$(document).ready(function(){
    $.get("https://www.googleapis.com/youtube/v3/channels", {
        part: 'contentDetails',
        forUsername: nomeCanal,
        key: 'AIzaSyB1QckaJyK9aAf2NoYc4Mo8idwm4YgcH4A'},
        function(e) {
            console.log(e);            
            upload_id = e.items[0].contentDetails.relatedPlaylists.uploads;         
            getVideos(upload_id);
        }
    )
});
    function getVideos(id) {
        $.get("https://www.googleapis.com/youtube/v3/playlistItems", {
            part: 'snippet',
            maxResults: 50,
            playlistId: id,
            key: 'AIzaSyB1QckaJyK9aAf2NoYc4Mo8idwm4YgcH4A'},
            function (data) { 
                console.log(data);                
                let imagem, arquivo;
                $.each(data.items, function (i, item) { 
                    imagem = item.snippet.thumbnails.medium.url;
                    titulo = item.snippet.title;
                    pub =  formatardata(item.snippet.publishedAt);
                    videoId = item.snippet.resourceId.videoId;
                    arquivo = $('<li class="principal">').append(
                        $('<div class="foto">').append($('<img>').attr('src', imagem)).append(
                            $('<div class="legenda">').append(
                                $('<a data-fancybox href="https://www.youtube.com/watch?v='+videoId+'">')
                                .append($('<h5>').html(titulo)).append($('<p>').html(pub)))));
                    $('ul').append(arquivo);
                    function formatardata(a) {
                        return "Publicado em: " + a.substr(8,2) + '/' + a.substr(5,2) + '/' + a.substr(0,4);
                     }
                 })
             }
        )
    };