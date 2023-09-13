const express = require("express");
const app = express();
const { proxy, scriptUrl } = require("rtsp-relay")(app);

// Increase the maximum number of listeners
process.setMaxListeners(0);

// Create proxy handlers
const streams = [
  "523",
  "522",
  "525",
  "526",
  "517",
  "531",
  "514",
  "533",
  "530",
  "532",
  "535",
  "534",
];

const handlers = streams.map((stream) =>
  proxy({
    url: `rtsp://admin:saira2023@202.123.141.238:${stream}/h264Preview_01_sub`,
    verbose: false,
  })
);

// Register WebSocket routes
streams.forEach((stream, index) => {
  app.ws(`/api/stream/${index + 1}`, handlers[index]);
});

// Define error handling middleware
app.use((err, req, res, next) => {
  console.error("Error occurred:", err);
  res.status(500).send("An error occurred.");
});

// Serve HTML with player scripts
app.get("/", (req, res) => {
  res.send(`
    <div style="display: flex;">
      ${streams
        .map(
          (stream, index) =>
            `<canvas id='canvas${
              index + 1
            }' style="border: 1px solid black;"></canvas>`
        )
        .join("")}
    </div>

    <script src='${scriptUrl}'></script>
    <script>
      ${streams
        .map(
          (stream, index) => `
        loadPlayer({
          url: 'ws://' + location.host + '/api/stream/${index + 1}',
          canvas: document.getElementById('canvas${index + 1}')
        });
      `
        )
        .join("")}
    </script>
  `);
});

// Start the server
const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
