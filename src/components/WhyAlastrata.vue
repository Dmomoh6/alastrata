<script setup>
import briefcaseIcon from "@/assets/briefcase.svg"

const whyCards = [
  {
    title: "Sourcing Across Global Commodity Markets",
    description:
      "We cultivate strong relationships with vetted producers and suppliers worldwide, enabling consistent access to high-quality commodities while supporting dependable supply chains for our trading partners.",
    image: "/images/image6.png",
  },
  {
    title: "Disciplined Operations Driving Efficiency",
    description:
      "Our structured operational framework minimizes friction across the trading lifecycle, ensuring transactions are executed smoothly, timelines are met, and partners benefit from reliable, well-coordinated processes.",
    image: "/images/image7.png",
  },
  {
    title: "Risk-Informed Execution In Dynamic Markets",
    description:
      "By combining market intelligence with prudent trading strategies, we proactively manage exposure, support stable outcomes, and help partners navigate volatility with greater confidence.",
    image: "/images/image8.png",
  },
  {
    title: "Global Reach Supporting Diverse Trading Partners",
    description:
      "With an expanding international network, we are positioned to serve partners across key trade corridors, facilitating cross-border commodity flows with professionalism, responsiveness, and cultural understanding.",
    image: "/images/image9.png",
  },
]
</script>

<template>
  <section id="about" class="pb-4 lg:pb-16 bg-white">
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
          Why Alastrata?
        </span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div class="space-y-8">
          <h2 class="text-[40px] leading-tight text-[#000000] font-semibold">
            A Trading Partner You<br />
            Can Rely On
          </h2>
        </div>
        <div class="flex justify-end start-end align-end">
          <p class="text-[#000000] text-md max-w-[600px]">
            Alastrata combines market expertise, disciplined execution, and
            dependable networks to support seamless commodity transactions,
            giving partners the confidence to operate, scale, and compete
            effectively in evolving global markets.
          </p>
        </div>
      </div>
      <!-- 4 columns, 2 rows: image, div, image, div, div, image, div, image -->
      <div class="mt-20 grid-cols-1 sm:grid-cols-2 grid lg:grid-cols-4 gap-2">
        <!-- 1st row -->
        <div
          class="relative h-[300px] sm:h-full overflow-hidden rounded-2xl bg-gray-100"
        >
          <img
            :src="whyCards[0].image"
            :alt="whyCards[0].title"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div class="flex bg-[#faf7fb] p-4 rounded-2xl flex-col justify-center">
          <h3 class="text-xl font-semibold text-[#000000] mb-3">
            {{ whyCards[0].title }}
          </h3>
          <p class="text-[#374151] text-sm lg:text-base leading-relaxed">
            {{ whyCards[0].description }}
          </p>
          <!-- <a
            href="#"
            class="mt-4 text-blue-600 font-medium text-sm hover:underline inline-flex items-center gap-1"
          >
            Learn more
            <span aria-hidden="true">&gt;</span>
          </a> -->
        </div>
        <div
          class="relative h-[300px] sm:h-full overflow-hidden rounded-2xl bg-gray-100 sm:hidden lg:block"
        >
          <img
            :src="whyCards[1].image"
            :alt="whyCards[1].title"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div class="flex bg-[#faf7fb] p-4 rounded-2xl flex-col justify-center">
          <h3 class="text-xl font-semibold text-[#000000] mb-3">
            {{ whyCards[1].title }}
          </h3>
          <p class="text-[#374151] text-sm lg:text-base leading-relaxed">
            {{ whyCards[1].description }}
          </p>
          <!-- <a
            href="#"
            class="mt-4 text-blue-600 font-medium text-sm hover:underline inline-flex items-center gap-1"
          >
            Learn more
            <span aria-hidden="true">&gt;</span>
          </a> -->
        </div>
        <div
          class="relative h-[300px] sm:h-full overflow-hidden rounded-2xl bg-gray-100 hidden sm:block lg:hidden"
        >
          <img
            :src="whyCards[1].image"
            :alt="whyCards[1].title"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <!-- 2nd row -->
        <div
          class="relative h-[300px] sm:h-full overflow-hidden rounded-2xl bg-gray-100 lg:hidden"
        >
          <img
            :src="whyCards[2].image"
            :alt="whyCards[2].title"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div class="flex bg-[#faf7fb] p-4 rounded-2xl flex-col justify-center">
          <h3 class="text-xl font-semibold text-[#000000] mb-3">
            {{ whyCards[2].title }}
          </h3>
          <p class="text-[#374151] text-sm lg:text-base leading-relaxed">
            {{ whyCards[2].description }}
          </p>
          <!-- <a
            href="#"
            class="mt-4 text-blue-600 font-medium text-sm hover:underline inline-flex items-center gap-1"
          >
            Learn more
            <span aria-hidden="true">&gt;</span>
          </a> -->
        </div>
        <div
          class="relative h-[300px] sm:h-full overflow-hidden rounded-2xl bg-gray-100 hidden lg:block"
        >
          <img
            :src="whyCards[2].image"
            :alt="whyCards[2].title"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div
          class="relative h-[300px] sm:h-full overflow-hidden rounded-2xl bg-gray-100 sm:hidden"
        >
          <img
            :src="whyCards[3].image"
            :alt="whyCards[3].title"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div class="flex bg-[#faf7fb] p-4 rounded-2xl flex-col justify-center">
          <h3 class="text-xl font-semibold text-[#000000] mb-3">
            {{ whyCards[3].title }}
          </h3>
          <p class="text-[#374151] text-sm lg:text-base leading-relaxed">
            {{ whyCards[3].description }}
          </p>
          <!-- <a
            href="#"
            class="mt-4 text-blue-600 font-medium text-sm hover:underline inline-flex items-center gap-1"
          >
            Learn more
            <span aria-hidden="true">&gt;</span>
          </a> -->
        </div>
        <div
          class="relative h-[300px] sm:h-full overflow-hidden rounded-2xl bg-gray-100 hidden sm:block"
        >
          <img
            :src="whyCards[3].image"
            :alt="whyCards[3].title"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>
