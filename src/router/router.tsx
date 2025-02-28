import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "@/app/layout";
import Home from "@/app/page";
import {
  AboutPage,
  ArticlePage,
  ArticlesPage,
  ContactPage,
  GrantsPage,
  PrivacyPolicyPage,
  TermsPage,
} from "@/app/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/articles/:slug" element={<ArticlePage />} />
      <Route path="/grants" element={<GrantsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Route>
  )
);

export default router;
