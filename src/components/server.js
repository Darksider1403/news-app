const express = require('express');
const axios = require('axios');
const Parser = require('rss-parser');

const app = express();
const port = 3000;
const parser = new Parser();

let latestNews = [];

// Hàm để cập nhật tin tức từ RSS feed
const updateNews = async () => {
    try {
        const feed = await parser.parseURL('https://24h.com.vn/upload/rss/thethao.rss');
        latestNews = feed.items || []; // thêm || []
        console.log('Updated news:', latestNews);
    } catch (error) {
        console.error('Error updating news:', error.message);
    }
};

setInterval(updateNews, 5 * 60 * 1000);

app.get('/api/news', (req, res) => {
    res.json(latestNews);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});