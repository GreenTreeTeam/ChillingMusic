$(document).ready(function () {
    var audioElement = document.createElement('audio');
    var CurrentSong = {}
    var Queue = []
    var loop = false

    function nextSong() {
        $.get("/random", function (data) {
            audioElement.setAttribute('src', data.url);
            CurrentSong = data
            toast(CurrentSong.name + " by " + CurrentSong.author+" has been added to queue")
        })
    }

    nextSong()

    audioElement.addEventListener('ended', async function () {
        if(loop){
            audioElement.play();
            toast("Started playing " + CurrentSong.name + " by " + CurrentSong.author)
            return
        }else if(Queue[0]){
            audioElement.setAttribute('src', Queue[0].url);
            CurrentSong = Queue[0]
            Queue.shift()
        }else nextSong()
        audioElement.play();
        toast("Started playing " + CurrentSong.name + " by " + CurrentSong.author)
        QueueEvent()
    }, false);

    function toast(text) {
        $('#snackbar').text(text)
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }

    audioElement.autoplay = true

    audioElement.addEventListener("canplay", function () {
        $("#songName").text(CurrentSong.name);
        $("#songAuthor").text("By "+CurrentSong.author);
        $("#songStatus").text("Status: Ready to play")
        $('#songDuration').text("Duration: " + Math.round(audioElement.duration) + " seconds")
        $('#songStatusBar').attr("data-value", "1")
        $('#songStatusBar').attr("data-total", Math.round(audioElement.duration).toString())
        $("#songCurrentSecond").text("Not Playing, Press play!")
        QueueEvent()
    });

    audioElement.addEventListener("timeupdate", function () {
        $("#songName").text(CurrentSong.name);
        $("#songAuthor").text("By "+CurrentSong.author);
        $("#songStatus").text("Status: Playing")
        $('#songDuration').text("Duration: " + Math.round(audioElement.duration) + " seconds")
        $('#songStatusBar').attr("data-value", Math.round(audioElement.currentTime))
        $('#songStatusBar').progress({
            total: Math.round(audioElement.duration),
            value: Math.round(audioElement.currentTime)
        })
        $('#songStatusBar').attr("data-total", Math.round(audioElement.duration).toString())
        $("#songCurrentSecond").text("Current Second: "+Math.round(audioElement.currentTime))
    });

    function triggerLoop(){
        if(loop === false)loop = true
        else loop = false
        $("#songLoop").text(loop?"Loop: Enabled":"Loop: Disabled")
        toast(loop?"Loop has been successfully Enabled":"Loop has been successfully Disabled")
    }

    $.get("/songs", function(data){
        data.forEach((song, index) => {
            $("#SongsListArea").append("<tr><td class='center aligned'>"+(index+1)+"</td><td class='center aligned'>"+song.name+"</td><td class='center aligned'>"+song.author+"</td></tr>")
        })
    })

    // Button Click Events
    $("#playButton").click(function (){
        audioElement.play();
        $("#songStatus").text("Status: Playing")
        toast("Started Playing!")
    })

    $("#pauseButton").click(function (){
        audioElement.pause();
        $("#songStatus").text("Status: Paused");
        toast("Paused the music!")
    })

    $("#restartButton").click(function(){
        audioElement.currentTime = 0;
        toast("Current song has been successfully restarted!")
    })

    $("#loopButton").click(function (){
        triggerLoop()
    })

    $("#songsListButton").click(function (){
        $('.ui.modal').modal('show');
    })

    $("#nextButton").click(function (){
        nextSong()
    })

    //Custom Play/Queue
    $("#CustomPlayButton").click(function (){
        let SongID = $("#customSongInput").val()
        if(!SongID)return toast("Song ID not provided")
        else if(!SongID.length)return toast("Song ID not provided")
        else if(SongID.length < 0)return toast("Song ID not provided")
        else if(!parseInt(SongID))return toast("Song ID is not a number")
        else {
            let xd = "/song/"+(parseInt(SongID)-1)
            $.get(xd, function (data){
                if(data === "404")return toast("Song not found!")
                else {
                    CurrentSong = data
                    audioElement.setAttribute('src', data.url);
                    audioElement.play();
                    toast("Started playing " + CurrentSong.name + " by " + CurrentSong.author)
                }
            })
        }
    })

    $("#CustomQueueButton").click(function(){
        let SongID = $("#customSongInput").val()
        if(!SongID)return toast("Song ID not provided")
        else if(!SongID.length)return toast("Song ID not provided")
        else if(SongID.length < 0)return toast("Song ID not provided")
        else if(!parseInt(SongID))return toast("Song ID is not a number")
        else {
            let xd = "/song/"+(parseInt(SongID)-1)
            $.get(xd, function (data){
                if(data === "404")return toast("Song not found!")
                else {
                    Queue.push(data)
                    toast(data.name+" has been added to queue")
                    QueueEvent()
                }
            })
        }
    })

    QueueEvent()

    function QueueEvent(){
        console.log(Queue)
        if(Queue.length > 0){
            let things = Queue.map(a => '<div class="ui centered card"><div class="content"><div class="header">'+a.name+'</div><div class="meta">by '+a.author+'</div></div></div>').join("\n")
            console.log(things)
            $("#AllSongsQueue").replaceWith(things)
        }else if(Queue.length <= 0){
            $('<div class="ui centered card"><div class="content"><div class="header">Empty Queue</div><div class="meta">No Songs to play next, So it choose a random song next!</div></div></div>').replaceAll("#AllSongsQueue")
        }
    }

    $("#DiscordButton").click(function(){
        window.open("https://discord.gg/JZjbCTWjqM")
    })

    $("#YouTubeButton").click(function(){
        window.open("https://www.youtube.com/channel/UCe21_ExA95OMEQZXco8dPmQ?sub_confirmation=1")
    })
})