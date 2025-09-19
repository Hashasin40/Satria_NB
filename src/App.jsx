import React from "react"
import { Suspense, useEffect, useState } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import LoadingScreen from "./component/LoadingScreen"
import PageWrapper from "./component/PageWrapper"

const Layout = React.lazy(() => import("./component/DashboardLayout"))
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Project = React.lazy(() => import("./pages/Project"))
const About = React.lazy(() => import("./pages/About"))
const Contact = React.lazy(() => import("./pages/Contact"))

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(timeout)
  }, [location.pathname])

  return (
    <>
      {loading && <LoadingScreen />}
      <Suspense fallback={<LoadingScreen />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route index element={<PageWrapper><Dashboard /></PageWrapper>} />
              <Route path="/project" element={<PageWrapper><Project /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  )
}

export default App
