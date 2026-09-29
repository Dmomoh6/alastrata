<template>
  <section
    id="home"
    class="container mx-auto relative min-w-screen max-h-[1500px] overflow-hidden"
  >
    <div class="absolute inset-0 bg-[#000B1D]"></div>

    <!-- Image Carousel -->
    <div class="absolute inset-0">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="absolute inset-0 transition-opacity duration-500"
        :class="{
          'opacity-100': currentSlide === index,
          'opacity-0': currentSlide !== index,
        }"
      >
        <img
          :src="slide.image"
          :alt="slide.alt"
          class="w-full h-full object-cover transform hover:scale-105 object-right transition-transform duration-500"
        />
      </div>
    </div>

    <!-- Content -->
    <div class="relative container mx-auto px-3 md:px-2 pt-36 sm:pt-48 pb-20">
      <div class="max-w-4xl text-white z-10">
        <h2
          class="text-5xl sm:text-6xl font-medium mb-6 leading-[60px] sm:leading-[70px]"
        >
          We are a Premier<br />
          Commodities Trading Firm<br />
          with a Global Reach
        </h2>
        <p class="text-md sm:text-lg text-white font-medium mb-12 max-w-xl">
          Alastrata is a diversified commodity trading firm delivering reliable
          access to energy products, agricultural goods, and mineral resources
          across international markets.
        </p>
        <div class="flex flex-wrap gap-2">
          <a
            href="mailto:enquiries@alastrataglobal.com"
            class="text-[#000B1D] bg-white font-medium py-2.5 px-8 min-w-[150px] rounded-lg"
          >
            Do Business with Us
          </a>
        </div>
      </div>
    </div>

    <!-- Blur background features section -->
    <div class="top-auto flex flex-col">
      <div
        class="relative py-10 sm:py-14 px-4 sm:px-6 md:px-10 backdrop-blur-xs"
      >
        <div
          class="container mx-auto flex flex-row items-center justify-center gap-8 sm:gap-4 md:gap-8 flex-wrap"
        >
          <template v-for="(item, index) in features" :key="item.title">
            <div
              v-if="index > 0"
              class="hidden sm:block w-px h-12 bg-gray-500/60 flex-shrink-0 self-center"
              aria-hidden
            />
            <div
              class="flex flex-col items-center text-center text-white min-w-0 max-w-[200px]"
            >
              <img :src="item.icon" :alt="item.title" class="w-8 h-8 mb-4" />
              <span class="text-sm sm:text-base font-medium leading-snug">
                {{ item.title }}
              </span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import icon1 from "@/assets/1.svg"
import icon2 from "@/assets/2.svg"
import icon3 from "@/assets/3.svg"
import icon4 from "@/assets/4.svg"
import icon5 from "@/assets/5.svg"

const slides = [
  {
    image: "/images/image1.png",
    alt: "Petroleum tanker",
  },
]

const features = [
  {
    title: "Global Supplier Network",
    icon: icon5,
  },
  {
    title: "Multi-Commodity Portfolio",
    icon: icon3,
  },
  {
    title: "Efficient Logistics Framework",
    icon: icon1,
  },
  {
    title: "Compliance-Driven Operations",
    icon: icon2,
  },
  {
    title: "Experienced Trading Team",
    icon: icon4,
  },
]

const currentSlide = ref(0)
const progress = ref(0)
const intervalTime = 7000 // 7 seconds per slide
let progressInterval = null

const startProgress = () => {
  // Clear any existing intervals
  if (progressInterval) clearInterval(progressInterval)

  // Reset progress
  progress.value = 0

  // Start new progress interval
  progressInterval = setInterval(() => {
    progress.value += 1
    if (progress.value >= 100) {
      nextSlide()
    }
  }, intervalTime / 100)
}

const nextSlide = () => {
  // Clear existing intervals
  if (progressInterval) clearInterval(progressInterval)

  // Update slide
  currentSlide.value = (currentSlide.value + 1) % slides.length

  // Start new progress
  startProgress()
}

// Start the carousel
onMounted(() => {
  startProgress()
})

// Clean up intervals
onUnmounted(() => {
  if (progressInterval) clearInterval(progressInterval)
})
</script>
