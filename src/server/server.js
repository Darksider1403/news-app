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
        const feed = await parser.parseURL('https://vnexpress.net/rss/the-thao.rss'); // Thay URL RSS feed thực tế vào đây
        latestNews = feed.items || []; // thêm || []
        console.log('Updated news:', latestNews);
    } catch (error) {
        console.error('Error updating news:', error.message);
    }
};

// Định kỳ cập nhật tin tức sau mỗi 5 phút
setInterval(updateNews, 5 * 60 * 1000); // Đổi số 5 thành số phút bạn muốn định kỳ cập nhật

// API endpoint để lấy tin tức mới nhất
app.get('/api/news', (req, res) => {
    res.json(latestNews);
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
