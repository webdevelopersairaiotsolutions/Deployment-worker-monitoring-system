const Stream = require("node-rtsp-stream");

const streams = [
  {
    name: "Bunny",
    streamUrl: "http://admin:Saira2020@202.123.141.238:8012/video2.mjpg",
    wsPort: 6789,
  },
  {
    name: "Bunny",
    streamUrl: "http://admin:Saira2020@202.123.141.238:8012/video1.mjpg",
    wsPort: 6790,
  },
  {
    name: "Bunny",
    streamUrl: "http://admin:Saira2020@202.123.141.238:8016/video1.mjpg",
    wsPort: 6791,
  },
  {
    name: "Bunny",
    streamUrl: "http://admin:Saira2020@202.123.141.238:8018/video2.mjpg",
    wsPort: 6792,
  },
  {
    name: "Bunny",
    streamUrl: "http://admin:Saira2020@202.123.141.238:8019/video2.mjpg",
    wsPort: 6793,
  },
  {
    name: "Bunny",
    streamUrl: "http://admin:Saira2020@202.123.141.238:8020/video2.mjpg",
    wsPort: 6794,
  },
  {
    name: "Bunny",
    streamUrl: "http://admin:Saira2020@202.123.141.238:8021/video2.mjpg",
    wsPort: 6795,
  },
  {
    name: "Bunny",
    streamUrl: "http://admin:Saira2020@202.123.141.238:8017/video2.mjpg",
    wsPort: 6796,
  },
  {
    name: "Bunny",
    streamUrl: "http://admin:Saira2020@202.123.141.238:8013/video2.mjpg",
    wsPort: 6797,
  },
];

const ffmpegOptions = {
  "-f": "mpegts",
  "-codec:v": "mpeg1video",
  "-b:v": "1000k",
  "-stats": "",
  "-r": 25,
  "-s": "640x480",
  "-bf": 0,
  "-codec:a": "mp2",
  "-ar": 44100,
  "-ac": 1,
  "-b:a": "128k",
};

const streamInstances = streams.map((stream) => {
  return new Stream({
    name: stream.name,
    streamUrl: stream.streamUrl,
    wsPort: stream.wsPort,
    ffmpegOptions,
  });
});

// Access each stream instance with streamInstances[i]

// Example usage:
// streamInstances[0] to access the first stream instance
// streamInstances[1] to access the second stream instance
// and so on...