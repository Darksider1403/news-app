import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Page from "./crawData";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Page url="https://24h.com.vn/upload/rss/trangchu24h.rss" />} />
                <Route path="/tin-tuc-trong-ngay" element={<Page url="https://24h.com.vn/upload/rss/tintuctrongngay.rss" />} />
                <Route path="/bong-da" element={<Page url="https://24h.com.vn/upload/rss/bongda.rss" />} />
                <Route path="/asian-cup-2019" element={<Page url="https://24h.com.vn/upload/rss/asiancup2019.rss" />} />
                <Route path="/an-ninh-hinh-su" element={<Page url="https://24h.com.vn/upload/rss/anninhhinhsu.rss" />} />
                <Route path="/thoi-trang" element={<Page url="https://24h.com.vn/upload/rss/thoitrang.rss" />} />
                <Route path="/thoi-trang-hitech" element={<Page url="https://24h.com.vn/upload/rss/thoitranghitech.rss" />} />
                <Route path="/tai-chinh-bat-dong-san" element={<Page url="https://24h.com.vn/upload/rss/taichinhbatdongsan.rss" />} />
                <Route path="/am-thuc" element={<Page url="https://24h.com.vn/upload/rss/amthuc.rss" />} />
                <Route path="/lam-dep" element={<Page url="https://24h.com.vn/upload/rss/lamdep.rss" />} />
                <Route path="/phim" element={<Page url="https://24h.com.vn/upload/rss/phim.rss" />} />
                <Route path="/giao-duc-du-hoc" element={<Page url="https://24h.com.vn/upload/rss/giaoducduhoc.rss" />} />
                <Route path="/ban-tre-cuoc-song" element={<Page url="https://24h.com.vn/upload/rss/bantrecuocsong.rss" />} />
                <Route path="/ca-nhac-mtv" element={<Page url="https://24h.com.vn/upload/rss/canhacmtv.rss" />} />
                <Route path="/the-thao" element={<Page url="https://24h.com.vn/upload/rss/thethao.rss" />} />
                <Route path="/phi-thuong-ki-quac" element={<Page url="https://24h.com.vn/upload/rss/phithuongkyquac.rss" />} />
                <Route path="/cong-nghe-thong-tin" element={<Page url="https://24h.com.vn/upload/rss/congnghethongtin.rss" />} />
                <Route path="/oto" element={<Page url="https://24h.com.vn/upload/rss/oto.rss" />} />
                <Route path="/thi-truong-tieu-dung" element={<Page url="https://24h.com.vn/upload/rss/thitruongtieudung.rss" />} />
                <Route path="/du-lich" element={<Page url="https://24h.com.vn/upload/rss/dulich.rss" />} />
                <Route path="/suc-khoe-doi-song" element={<Page url="https://24h.com.vn/upload/rss/suckhoedoisong.rss" />} />
                <Route path="/cuoi-24h" element={<Page url="https://24h.com.vn/upload/rss/cuoi24h.rss" />} />
            </Routes>
            <Footer />
            <ScrollToTop />
        </Router>
    );
}

export default App;
