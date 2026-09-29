<template>
  <section id="team" class="pb-20 bg-white">
    <div class="container mx-auto px-3 md:px-2">
      <div class="text-center mb-16">
        <span
          class="inline-flex items-center gap-1 text-[#353535] rounded-full px-4 py-2 text-sm tracking-wider font-medium"
          style="background: linear-gradient(180deg, #ffffff 0%, #e6e6e6 100%)"
        >
          <img
            :src="briefcaseIcon"
            alt="Briefcase"
            class="w-4 h-4 flex-shrink-0"
          />
          What we do
        </span>
        <h2 class="mt-4 text-[40px] font-medium text-[#000000]">
          Core Trading Divisions
        </h2>
        <p class="mt-6 text-[#000000] max-w-4xl mx-auto text-lg">
          Structured commodity trading across energy, agriculture, and mineral
          markets — executed with discipline, scale, and reliability.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div class="space-y-0 order-2 lg:order-1">
          <button
            v-for="(division, index) in divisions"
            :key="division.title"
            type="button"
            class="w-full text-left py-6 border-b border-gray-200 last:border-b-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer"
            :class="
              activeIndex === index
                ? 'border-b-2 border-b-blue-600 rounded-none -mb-px pb-6'
                : ''
            "
            @click="setActive(index)"
          >
            <div class="flex items-start gap-3">
              <span
                v-if="activeIndex === index"
                class="flex-shrink-0 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-blue-600 mt-1.5"
                :class="activeIndex === index ? 'border-b-blue-600' : ''"
                aria-hidden
              />
              <!-- <span v-else class="flex-shrink-0 w-[10px]" aria-hidden /> -->
              <div class="min-w-0 flex-1">
                <h3
                  class="text-lg font-semibold leading-snug"
                  :class="
                    activeIndex === index ? 'text-[#316cf4]' : 'text-[#353535]'
                  "
                >
                  {{ division.title }}
                </h3>
                <p
                  class="mt-2 text-sm leading-relaxed"
                  :class="
                    activeIndex === index ? 'text-[#000b1d]' : 'text-[#353535]'
                  "
                >
                  {{ division.description }}
                </p>
              </div>
            </div>
          </button>
          <a
            href="#contact"
            class="inline-block mt-8 text-white font-medium py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors relative overflow-hidden"
            style="background: #3c74f5"
          >
            <span
              class="absolute inset-0 pointer-events-none"
              style="
                background: linear-gradient(180deg, #3c74f5 0%, #000000 100%);
                opacity: 0.35;
                border-radius: 0.5rem;
              "
              aria-hidden="true"
            ></span>
            <span class="relative z-10">Contact us today</span>
          </a>
        </div>

        <div
          class="relative rounded-3xl order-1 lg:order-2 overflow-hidden w-full bg-gray-100 aspect-[4/3] lg:aspect-auto lg:min-h-[500px]"
        >
          <Transition name="fade" mode="out-in">
            <img
              :key="activeIndex"
              :src="divisions[activeIndex].image"
              :alt="divisions[activeIndex].title"
              class="absolute inset-0 w-full h-full object-cover rounded-3xl"
            />
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import briefcaseIcon from "@/assets/briefcase.svg"

const divisions = [
  {
    title: "Reliable Supply for a World in Motion",
    description:
      "We facilitate the sourcing and delivery of refined petroleum products including LPG, AGO, PMS and drilling chemicals, ensuring dependable access through structured procurement and logistics coordination.",
    image: "/images/image3.png",
  },
  {
    title: "Connecting Global Markets to Essential Crops",
    description:
      "From cocoa and coffee to cashew and palm oil, we support the flow of high-demand agricultural commodities with an emphasis on quality, traceability, and consistency.",
    image: "/images/image4.png",
  },
  {
    title: "Supporting Industrial Growth Through Critical Resources",
    description:
      "We trade key mineral assets such as gold, silver, lead, and lithium commodities vital to modern infrastructure and emerging technologies.",
    image: "/images/image5.png",
  },
]

const activeIndex = ref(0)
const countdownSeconds = 6
let countdownInterval = null

const setActive = (index) => {
  activeIndex.value = index
  resetCountdown()
}

const nextDivision = () => {
  activeIndex.value = (activeIndex.value + 1) % divisions.length
  resetCountdown()
}

const resetCountdown = () => {
  if (countdownInterval) clearInterval(countdownInterval)
  countdownInterval = setInterval(nextDivision, countdownSeconds * 1000)
}

onMounted(() => {
  resetCountdown()
})

onUnmounted(() => {
  if (countdownInterval) clearInterval(countdownInterval)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
