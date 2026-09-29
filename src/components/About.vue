<script setup>
import briefcaseIcon from "@/assets/briefcase.svg"
</script>

<template>
  <section id="about" class="py-24 bg-white">
    <div class="container mx-auto px-3 md:px-2">
      <div class="mb-8">
        <span
          class="inline-flex items-center gap-1 text-[#353535] rounded-full px-4 py-2 text-sm tracking-wider font-medium"
          style="background: linear-gradient(180deg, #ffffff 0%, #e6e6e6 100%)"
        >
          <img
            :src="briefcaseIcon"
            alt="Briefcase"
            class="w-4 h-4 flex-shrink-0"
          />
          About Us
        </span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div class="space-y-8">
          <h2 class="text-[40px] leading-tight text-[#000000] font-semibold">
            Built on Discipline. <br />
            Driven by Market Insight.
          </h2>
        </div>
        <div class="flex justify-end start-end align-end">
          <p class="text-[#000000] text-md max-w-[600px]">
            Alastrata is a forward-looking commodity trading company committed to
            facilitating efficient movement of essential resources across global
            supply chains.<br />
            We operate with a long-term perspective, prioritizing reliability,
            transparency, and strategic relationships that create sustained
            value for our partners.
          </p>
        </div>
      </div>

      <div class="mt-16 w-full">
        <img
          src="/images/about-us.jpg"
          alt="About Us"
          class="w-full h-[250px] md:h-[500px] object-cover rounded-2xl"
        />
      </div>
    </div>
  </section>
</template>
