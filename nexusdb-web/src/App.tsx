import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { SearchPalette } from './components/ui/SearchPalette'
import { PageLoader } from './components/ui/PageLoader'
import { useLenis } from './hooks/useLenis'
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })))
const DirectoryPage = lazy(() => import('./pages/Pages').then(module => ({ default: module.DirectoryPage })))
const NotFound = lazy(() => import('./pages/Pages').then(module => ({ default: module.NotFound })))
const Privacy = lazy(() => import('./pages/Pages').then(module => ({ default: module.Privacy })))

export default function App() {
  const location = useLocation()
  useLenis()
  return <MotionConfig reducedMotion="user"><Navbar /><SearchPalette /><Suspense fallback={<PageLoader />}><AnimatePresence mode="wait"><Routes location={location} key={location.pathname}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<DirectoryPage type="about" />} />
    <Route path="/archive" element={<DirectoryPage type="archive" />} />
    <Route path="/issues" element={<DirectoryPage type="issues" />} />
    <Route path="/articles" element={<DirectoryPage type="articles" />} />
    <Route path="/categories" element={<DirectoryPage type="categories" />} />
    <Route path="/resources" element={<DirectoryPage type="resources" />} />
    <Route path="/contact" element={<DirectoryPage type="contact" />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="*" element={<NotFound />} />
  </Routes></AnimatePresence></Suspense><Footer /></MotionConfig>
}
