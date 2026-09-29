<template>
  <footer class="bg-[#E7E7E7] -mt-60 pt-48 text-[#333333] pb-10">
    <div class="container mx-auto px-3 md:px-2">
      <div class="border-t border-[#AFAFAF] pt-10"></div>
      <div
        class="grid grid-cols-1 md:items-start md:grid-cols-2 gap-10 lg:gap-16"
      >
        <!-- Company Info -->
        <div
          class="space-y-4 flex items-center justify-center md:justify-start md:items-start flex-col"
        >
          <div class="flex items-center gap-3">
            <img :src="logo" alt="Alastrata" class="h-8 w-auto" />
          </div>
          <p
            class="text-[#4A4A4A] text-sm md:text-left text-center lg:text-base max-w-[420px] leading-relaxed"
          >
            Alastrata is a diversified commodity trading firm focused on delivering
            structured access to global energy, agricultural, and mineral
            markets.
          </p>
          <!-- <a
            href="https://www.linkedin.com/company/hosc-global"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#4A4A4A] text-[#4A4A4A] hover:bg-[#4A4A4A] hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <span class="text-xs font-bold leading-none">in</span>
          </a> -->
        </div>

        <!-- Contact Info -->
        <div>
          <h3
            class="text-xl font-semibold text-[#333333] mb-6 text-center md:text-left"
          >
            Contact us
          </h3>
          <div
            class="space-y-4 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <p
              class="text-[#4A4A4A] text-sm md:text-left text-center lg:text-base leading-relaxed max-w-md"
            >
              <span class="font-semibold text-[#333333]">Lagos:</span> No. 4
              Engineer George Enenmoh Street, Lekki 1, Lagos
            </p>
            <p
              class="text-[#4A4A4A] text-sm md:text-left text-center lg:text-base leading-relaxed max-w-md"
            >
              <span class="font-semibold text-[#333333]">Abia:</span> No. 17
              Factory Road, Umuahia, Abia State
            </p>
            <div class="flex items-center gap-2">
              <svg
                class="w-5 h-5 text-[#4A4A4A] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <a
                href="tel:08122000480"
                class="text-[#4A4A4A] text-sm lg:text-base hover:underline"
              >
                0812 200 0480
              </a>
            </div>
            <div class="flex items-center gap-2">
              <svg
                class="w-5 h-5 text-[#4A4A4A] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              <a
                href="mailto:enquiries@alastrataglobal.com"
                class="text-[#4A4A4A] text-sm lg:text-base hover:underline"
              >
                enquiries@alastrataglobal.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-[#AFAFAF] mt-10 pt-8">
        <div class="text-center text-[#666666] text-sm">
          Alastrata Limited, 2026. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import logo from "@/assets/logo-color.png"
</script>
