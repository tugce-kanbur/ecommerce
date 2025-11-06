import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import PageContent from "./layout/PageContent";
import InfoLayout from "./layout/InfoLayout";

// Main Pages
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";

// Info Pages
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import PricingPage from "./pages/PricingPage";

// Blog & Content
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ContentPage from "./pages/ContentPage";

// Testimonials, Subscription, Stats
import TestimonialsPage from "./pages/TestimonialsPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import StatsPage from "./pages/StatsPage";

// Not Found
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      {/* Genel site layout'u */}
      <Route element={<PageContent />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />

        {/* Content/blog vs */}
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:id" element={<BlogDetailPage />} />
        <Route path="content" element={<ContentPage />} />

        {/* Diğer alt sayfalar */}
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="subscribe" element={<SubscriptionPage />} />
        <Route path="stats" element={<StatsPage />} />
      </Route>

      {/* Info sayfaları farklı bir layout'ta */}
      <Route element={<InfoLayout />}>
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="pricing" element={<PricingPage />} />
      </Route>

      {/* home yönlendirmesi */}
      <Route path="home" element={<Navigate to="/" replace />} />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
