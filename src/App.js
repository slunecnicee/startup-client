import "./App.css";
import Header from "./Header/Header";
import FAQ from "./Pages/FAQPage/FAQ";
import HomePage from "./Pages/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeOffer from "./Pages/WeOfferPage/weOffer";
import Footer from "./Footer/Footer";
import CommonForm from "./Pages/FormPage/Form";
import UsaidPg from "./Pages/USAIDPage/UsaidPg";
import TermsPg from "./Pages/RulesPage/RulesPg";
import WinnersPage from "./Pages/WinnersPage/WinnersPg";
import NewsPage from "./Pages/NewsPage/NewsPg";
import Winner from "./Pages/WinnersPage/Winner";
import SingleNews from "./Pages/NewsPage/singleNews";
import ContactPage from "./Pages/ContactPage/Contact";
import NotFoundPg from "./Pages/NotFoundPg/NotFoundPg";

function App() {
  return (
    <div style={{ marginTop: "95px" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/offer" element={<WeOffer />} />
          <Route path="/application" element={<CommonForm isUsaid={false} />} />
          <Route
            path="/application/usaid"
            element={<CommonForm isUsaid={true} />}
          />
          <Route path="/usaid" element={<UsaidPg />} />
          <Route path="/terms" element={<TermsPg />} />
          <Route path="/winners" element={<WinnersPage />} />
          <Route path="/winners/:id" element={<Winner />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<SingleNews />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<NotFoundPg />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
