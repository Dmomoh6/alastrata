<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
    <div
      @click="$emit('close')"
      class="fixed inset-0 bg-black opacity-90 transition-opacity"
    ></div>
    <div class="flex min-h-screen items-center justify-center p-4">
      <div
        class="relative w-full max-w-6xl rounded-2xl bg-[#000B1D] overflow-hidden"
      >
        <button
          @click="$emit('close')"
          class="absolute cursor-pointer w-10 h-10 !py-0 !px-0 flex items-center justify-center right-6 top-6 text-[#000B1D] hover:text-[#FF8029] z-20"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div class="flex flex-col md:flex-row min-h-[550px]">
          <div class="md:w-1/3">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="relative md:w-2/3 p-8 md:p-12 overflow-hidden">
            <img
              src="/images/team-ribbon.png"
              alt=""
              class="absolute -top-5 -left-22 w-40 h-auto z-10"
            />
            <img
              src="/images/team-ribbon.png"
              alt=""
              class="absolute -bottom-5 -right-22 w-40 h-auto z-10 rotate-180"
            />
            <div class="absolute inset-0 z-0">
              <img
                :src="member.secondImage"
                alt=""
                class="absolute -right-70 h-full object-cover opacity-50"
              />
              <div
                class="absolute inset-0 bg-[linear-gradient(281.72deg,rgba(207,68,140,0.71)_1.17%,#000B1D_57.83%)]"
              ></div>
            </div>
            <div class="relative mt-16 z-10">
              <h2 class="text-5xl font-medium text-white mb-2">
                {{ member.name }}
              </h2>
              <p class="text-xl text-white/80 mb-12">{{ member.position }}</p>
              <div class="space-y-6 bg-[#00000014] p-6">
                <ul class="list-disc">
                  <li
                    v-for="(detail, index) in member.details"
                    :key="index"
                    class="text-white/80 text-lg leading-relaxed ml-6"
                  >
                    {{ detail }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  member: {
    type: Object,
    required: true,
  },
})

defineEmits(["close"])
</script>
