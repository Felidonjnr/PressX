/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
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
import { LoadingScreen } from "./components/LoadingScreen";
import { BackgroundEffects } from "./components/BackgroundEffects";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial system load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-background min-h-screen selection:bg-accent selection:text-background relative">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <div className={isLoading ? "opacity-0 invisible" : "opacity-100 visible transition-all duration-1000"}>
        <BackgroundEffects />
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
      </div>
    </main>
  );
}
