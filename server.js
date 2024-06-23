require('@babel/register')({
  ignore: [/node_modules/],
  extensions: ['.js', '.jsx']
});
require('dotenv').config();

// ignore css
require('ignore-styles');
require('@babel/register')({
  ignore: [/node_modules/],
  extensions: ['.js', '.jsx']
});

const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const App = require("./src/App").default;
const app = express();
const path = require('path'); // ignore css
const port = process.env.PORT || 3000;

const axios = require('axios');
const YT_API_KEY = process.env.YOUTUBE_API_KEY;

app.use((req, res, next) => {
  try {
    decodeURIComponent(req.path);
    next();
  } catch (e) {
    console.error('Failed to decode URL:', req.path);
    res.status(400).send('Bad Request: Invalid URL');
  }
});

app.use(express.static('public'))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  const filePath = path.join(__dirname, 'build', 'index.html');
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Cannot send file:', err);
      if (err.code === "ENOENT") {
        res.status(404).send('404 Not Found');
      } else {
        res.status(500).send('Internal Server Error');
      }
    }
  });
});

const PORT = process.env.PORT || 3000;

app.post("/search", async (req, res) => {
  const CHANNEL_NAME = req.body.channelName;
  // 검색창으로 채널명 입력

  try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        part: 'snippet',
        q: CHANNEL_NAME,
        type: 'channel',
        key: YT_API_KEY
      }
    });

    res.json(response.data); // 결과를 JSON 형태로 클라이언트에 전송
  } catch (error) {
    console.error('Error fetching YouTube channel:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});


app.listen(port, () => {
    console.log(`Server running on ${port}`);
});