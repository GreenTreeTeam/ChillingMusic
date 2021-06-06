import EventEmitter from "events"

interface ISong{
    name: string
    author: string
    url: string
}

class Player extends EventEmitter{
    public queue: ISong[] = [];
    public loop: boolean = false;
    public playing: boolean = false;
    public nowPlaying: ISong | null = null;

    constructor(
        public audio: HTMLAudioElement
    ){
        super()

        this.audio.addEventListener('canplay', () => {
            this.audio.play()
            this.emit("nowPlaying", this.nowPlaying)//Loaded and started playing
        })

        this.audio.addEventListener('timeupdate', () => {
            this.emit("time", { current: this.audio.currentTime, total: this.audio.duration })
        })

        this.audio.addEventListener('ended', () => {
            if(this.loop && this.nowPlaying)this.Play(this.nowPlaying)
            else if(this.queue[0])this.Play(this.queue[0])
            else return;
        })
    }

    public Play(song: ISong){
        this.playing = true
        this.audio.src = song.url
        this.nowPlaying = song
        this.emit("nowPlaying", song, true)//true for loading
    }

    public Pause(){
        this.audio.pause()
        this.playing = false
        this.emit("pause")
    }

    public Resume(){
        this.audio.play()
        this.emit("resume")
    }

    public Restart(){
        this.audio.currentTime = 0
        this.emit("restart")
    }

    public AddSong(song: ISong){
        this.queue.push(song)
        this.emit("queue", song)
    }

    public RemoveSong(index: number){
        this.emit("queueRemove", this.queue[index])
        this.queue.splice(index, 1);
    }
}

export default Player