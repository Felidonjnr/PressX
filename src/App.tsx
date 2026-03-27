/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
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
import { BackgroundEffects } from "./components/BackgroundEffects";

export default function App() {
  return (
    <main className="bg-background min-h-screen selection:bg-accent selection:text-background relative">
      <div className="opacity-100 visible">
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
