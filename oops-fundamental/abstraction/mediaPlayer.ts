abstract class MediaPlayer {
    private playerName: string;

    constructor(playerName: string) {
        this.playerName = playerName;
    }


    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;


    displayStatus(): void {
         console.log(`[${this.playerName}] Status: Ready`);
    }

    logAction(action: string): void {
        console.log(`[${this.playerName}] Action: ${action}`);
    }

}


class PlayerController {
    private player: MediaPlayer;

    constructor(player: MediaPlayer) {
        this.player = player;
    }

    startPlayback(): void {
        this.player.displayStatus();
        this.player.play();
    }

    pausePlayback(): void { this.player.pause(); }
    stopPlayback(): void { this.player.stop(); }
}


class AudioPlayer extends MediaPlayer {
    private audioFile: string;

    constructor(audioFile: string) {
        super("AudioPlayer");
        this.audioFile = audioFile;
    }

    play(): void { this.logAction(`Playing audio: ${this.audioFile}`); }
    pause(): void { this.logAction(`Paused audio: ${this.audioFile}`); }
    stop(): void { this.logAction(`Stopped audio: ${this.audioFile}`); }
}

class StreamingPlayer extends MediaPlayer {
    private streamUrl: string;
    private bufferSize: number;

    constructor(streamUrl: string, bufferSize: number) {
        super("StreamingPlayer");
        this.streamUrl = streamUrl;
        this.bufferSize = bufferSize;
    }

    play(): void {
        this.logAction(`Streaming from: ${this.streamUrl} (buffer: ${this.bufferSize}KB)`);
    }
    pause(): void { this.logAction(`Paused stream: ${this.streamUrl}`); }
    stop(): void { this.logAction(`Stopped stream: ${this.streamUrl}`); }
}

class VideoPlayer extends MediaPlayer {
    private videoFile: string;
    private resolution: string;

    constructor(videoFile: string, resolution: string) {
        super("VideoPlayer");
        this.videoFile = videoFile;
        this.resolution = resolution;
    }

    play(): void {
        this.logAction(`Playing video: ${this.videoFile} at ${this.resolution}`);
    }
    pause(): void { this.logAction(`Paused video: ${this.videoFile}`); }
    stop(): void { this.logAction(`Stopped video: ${this.videoFile}`); }
}



const audioCtrl = new PlayerController(new AudioPlayer("song.mp3"));
audioCtrl.startPlayback();
audioCtrl.pausePlayback();

console.log();

const videoCtrl = new PlayerController(new VideoPlayer("movie.mp4", "1080p"));
videoCtrl.startPlayback();
videoCtrl.stopPlayback();

console.log();

const streamCtrl = new PlayerController(
    new StreamingPlayer("https://stream.example.com/live", 2048));
streamCtrl.startPlayback();
streamCtrl.stopPlayback();