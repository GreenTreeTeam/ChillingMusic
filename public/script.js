$(document).ready(function () {
    var audioElement = document.createElement('audio');
    $.get("/songs", function (data) {
        data.forEach(function (song, index) {
            $('#SongsTable').append(
                "<tr><td>" + (index + 1) + "</td><td>" +
                song.name + "</td><td>" + song.author + "</td></tr>")
        })
    })
    var CurrentlPLaying = {}
    function newSong() {
        $.get("/random", function (data) {
            audioElement.setAttribute('src', data.url);
            CurrentlPLaying = data
        })
    }
    function playSong(index) {
        $.get("/" + index, function (data) {
            audioElement.setAttribute('src', data.url);
            CurrentlPLaying = data
        })
    }
    newSong()
    audioElement.addEventListener('ended', async function () {
        await newSong()
        audioElement.play();
        toast("Started playing " + CurrentlPLaying.name + " by " + CurrentlPLaying.author)
    }, false);

    function toast(text) {
        $('#snackbar').text(text)
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
    }

    audioElement.autoplay = true

    audioElement.addEventListener("canplay", function () {
        $("#length").text("Duration: " + Math.round(audioElement.duration) + " seconds");
        $("#source").text("Source: " + audioElement.src);
        $("#status").text("Status: Ready to play").css("color", "green");
        $("#MusicProgress").attr("max", Math.round(audioElement.duration))
    });

    audioElement.addEventListener("timeupdate", function () {
        $("#currentTime").text("Current second: " + Math.round(audioElement.currentTime));
        $("#author").text("Song Author: " + CurrentlPLaying.author)
        $("#name").text("Song Name: " + CurrentlPLaying.name)
        $("#MusicProgress").attr("value", Math.round(audioElement.currentTime))
    });

    $('#play').click(function () {
        audioElement.play();
        $("#status").text("Status: Playing");
    });

    $('#playdafkingnextsong').click(async function () {
        await newSong()
        audioElement.play();
        $("#status").text("Status: Playing");
    });

    $('#pause').click(function () {
        audioElement.pause();
        $("#status").text("Status: Paused");
    });

    $('#restart').click(function () {
        audioElement.currentTime = 0;
    });

    $("#CustomSongSubmit").on("click", function () {
        event.preventDefault()
        let val = parseInt($('#customSongInput').val())-1
        $.get("/song/" + val, function (data) {
            if (data === "404") {
                return toast("Invalid song returned 404")
            }
            toast("Custom Song sumbitted")
            audioElement.setAttribute('src', data.url);
            CurrentlPLaying = data
            audioElement.play();
            setTimeout(function () { toast("Started playing " + CurrentlPLaying.name + " by " + CurrentlPLaying.author) }, 3000)
            $("#status").text("Status: Playing");
        })
    });

    window.addEventListener('load', function () {
        audioElement.play();
    })
});