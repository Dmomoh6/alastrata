<script setup>
import briefcaseIcon from "@/assets/briefcase.svg"
import globalReachBg from "@/assets/global-reach-bg.png"
import icon2 from "@/assets/2.svg"
import icon4 from "@/assets/4.svg"
import icon6 from "@/assets/6.svg"
import icon7 from "@/assets/7.svg"

const features = [
  {
    title: "Safety & Compliance",
    description:
      "We align operations with applicable regulatory and industry standards.",
    icon: icon2,
  },
  {
    title: "Responsible Trading",
    description:
      "We promote ethical sourcing and responsible commercial practices.",
    icon: icon4,
  },
  {
    title: "Sustainability Awareness",
    description:
      "Recognizing the importance of environmental and economic balance in modern trade.",
    icon: icon6,
  },
  {
    title: "Long-Term Partnerships",
    description: "We prioritize enduring relationships over short-term gains.",
    icon: icon7,
  },
]
</script>

<template>
  <section
    id="global-reach"
    class="py-24"
    :style="{
      backgroundImage: `url(${globalReachBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top right',
    }"
  >
    <div class="container mx-auto px-3 md:px-2">
      <div class="text-center mb-10">
        <span
          class="inline-flex items-center gap-1 bg-transparent border border-[#e6e6e650] text-[#ffffff] rounded-full px-4 py-2 text-sm tracking-wider font-medium"
        >
          <img :src="briefcaseIcon" alt="" class="w-4 h-4 flex-shrink-0" />
          Global Reach
        </span>
      </div>

      <div class="text-center max-w-3xl mx-auto mb-14">
        <h2
          class="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-white leading-tight mb-6"
        >
          Positioned for Global Commerce
        </h2>
        <p class="text-[#828282] text-base sm:text-lg leading-relaxed">
          Through an expanding network of partners and intermediaries, Alastrata
          supports commodity flows across major trade corridors, enabling
          clients to operate with confidence in an increasingly interconnected
          marketplace.
        </p>
      </div>

      <div class="relative rounded-2xl overflow-hidden mb-16 max-w-5xl mx-auto">
        <img
          src="/images/image10.png"
          alt="Global network map"
          class="w-full h-auto object-contain"
        />
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        <div
          v-for="item in features"
          :key="item.title"
          class="flex flex-col items-center sm:items-start text-center sm:text-left"
        >
          <div
            class="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5 shadow-[0_0_24px_rgba(255,255,255,0.12)]"
            aria-hidden
          >
            <img :src="item.icon" alt="item.title" class="w-8 h-8 text-white" />
            <!-- Responsible Trading: circular arrows -->
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">
            {{ item.title }}
          </h3>
          <p class="text-[#828282] text-sm leading-relaxed max-w-[260px]">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
