import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import DraftBanner from './components/DraftBanner.jsx';
import { Toaster } from './components/ui/sonner.jsx';
import Layout from './components/Layout.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import HomePage from './pages/HomePage.jsx';

const PageFallback = () => <div className="min-h-screen bg-background" aria-hidden="true" />;

const PersonalTrainingPage = lazy(() => import('./pages/PersonalTrainingPage.jsx'));
const StandortPage = lazy(() => import('./pages/StandortPage.jsx'));
const ÜberRockyPage = lazy(() => import('./pages/ÜberRockyPage.jsx'));
const ShopPage = lazy(() => import('./pages/ShopPage.jsx'));
const WissenPage = lazy(() => import('./pages/WissenPage.jsx'));
const AppPage = lazy(() => import('./pages/AppPage.jsx'));
const NewsletterPage = lazy(() => import('./pages/NewsletterPage.jsx'));
const ImpressumPage = lazy(() => import('./pages/ImpressumPage.jsx'));
const DatenschutzPage = lazy(() => import('./pages/DatenschutzPage.jsx'));
const AGBPage = lazy(() => import('./pages/AGBPage.jsx'));
const WiderrufsbelehrungPage = lazy(() => import('./pages/WiderrufsbelehrungPage.jsx'));

const stadtteilRedirects = [
  '/personal-trainer-wandsbek',
  '/personal-trainer-winterhude',
  '/personal-trainer-barmbek',
  '/personal-trainer-eilbek',
  '/personal-trainer-dulsberg',
  '/personal-trainer-uhlenhorst',
  '/personal-trainer-wellingsbuettel',
].map((p) => <Route key={p} path={p} element={<Navigate to="/standort" replace />} />);

function App() {
  return (
    <>
      <ScrollToTop />
      <DraftBanner />
      <Toaster />
      <FloatingWhatsApp />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal-training" element={<PersonalTrainingPage />} />
          <Route path="/standort" element={<StandortPage />} />
          <Route path="/uber-rocky" element={<ÜberRockyPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/wissen" element={<WissenPage />} />
          <Route path="/schulterprobleme" element={<Navigate to="/wissen" replace />} />
          <Route path="/krafttraining-frauen" element={<Navigate to="/wissen" replace />} />
          <Route path="/warum-krafttraining-fuer-frauen" element={<Navigate to="/wissen" replace />} />
          <Route path="/mythos-rosa-hanteln" element={<Navigate to="/wissen" replace />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
          <Route path="/agb" element={<AGBPage />} />
          <Route path="/widerrufsbelehrung" element={<WiderrufsbelehrungPage />} />

          {/* Weiterleitungen (D) */}
          <Route path="/methodik" element={<Navigate to="/uber-rocky" replace />} />
          <Route path="/preise" element={<Navigate to="/personal-training" replace />} />
          <Route path="/testimonials" element={<Navigate to="/" replace />} />
          <Route path="/online-coaching" element={<Navigate to="/personal-training" replace />} />
          <Route path="/online-coaching/pakete" element={<Navigate to="/personal-training" replace />} />
          <Route path="/starke-frauen" element={<Navigate to="/wissen" replace />} />
          <Route path="/boxer-zusatztraining-pdf" element={<Navigate to="/shop" replace />} />
          <Route path="/schulterschmerz-beruhigen-pdf" element={<Navigate to="/shop" replace />} />
          <Route path="/programme" element={<Navigate to="/shop" replace />} />
          <Route path="/schulterprogramm" element={<Navigate to="/shop" replace />} />
          <Route path="/boxenprogramm" element={<Navigate to="/shop" replace />} />
          <Route path="/knieprobleme" element={<Navigate to="/404" replace />} />
          {stadtteilRedirects}

          <Route path="/404" element={
            <Layout title="Seite nicht gefunden | Coach Rocky" description="Diese Seite gibt es nicht.">
              <section className="section-spacing">
                <div className="max-w-md mx-auto px-4 text-center">
                  <h1 className="t-h1 mb-4 text-foreground">Seite nicht gefunden</h1>
                  <p className="text-body-lg font-body text-foreground mb-8">
                    Diese Seite gibt es nicht. Hier geht es zur{' '}
                    <Link to="/" className="text-primary hover:underline">Startseite</Link>.
                  </p>
                </div>
              </section>
            </Layout>
          } />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
