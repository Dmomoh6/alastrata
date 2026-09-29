<script setup>
import Navigation from "./components/Navigation.vue"
import Hero from "./components/Hero.vue"
import About from "./components/About.vue"
import CoreDivision from "./components/CoreDivision.vue"
import WhyAlastrata from "./components/WhyAlastrata.vue"
import Team from "./components/Team.vue"
import GlobalReach from "./components/GlobalReach.vue"
import PartnerWithConfidence from "./components/PartnerWithConfidence.vue"
import Contact from "./components/Contact.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <div class="min-h-screen overflow-x-hidden mx-auto">
    <Navigation />
    <main>
      <Hero />
      <About />
      <CoreDivision />
      <WhyAlastrata />
      <GlobalReach />
      <Team />
      <PartnerWithConfidence />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
