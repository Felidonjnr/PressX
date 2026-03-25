/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Difference } from "./components/Difference";
import { AudienceFilter } from "./components/AudienceFilter";
import { Services } from "./components/Services";
import { Urgency } from "./components/Urgency";
import { AccessForm } from "./components/AccessForm";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { Admin } from "./components/Admin";

const LandingPage = () => (
  <main className="bg-background min-h-screen selection:bg-accent selection:text-background">
    <Hero />
    <Problem />
    <Solution />
    <Difference />
    <AudienceFilter />
    <Services />
    <Urgency />
    <AccessForm />
    <FinalCta />
    <Footer />
  </main>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
