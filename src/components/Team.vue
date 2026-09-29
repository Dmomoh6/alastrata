<template>
  <section id="team" class="pb-20 pt-16 bg-white">
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
          Our Team
        </span>
        <h2 class="mt-4 text-[40px] font-medium text-[#000000]">
          Experienced Leadership. Structured Oversight.
        </h2>
        <p class="mt-6 text-[#353535] max-w-4xl mx-auto text-lg">
          Alastrata is guided by a leadership team with diverse expertise across
          trading, finance, and operations — supported by governance practices
          that reinforce accountability and strategic direction.
        </p>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4 mx-auto max-w-6xl"
      >
        <article
          v-for="member in team"
          :key="member.firstName + member.lastName"
          class="flex flex-col md:flex-row rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm"
        >
          <div
            class="relative flex-shrink-0 w-full md:w-[45%] aspect-[4/5] md:aspect-auto max-h-[400px] sm:max-h-unset md:min-h-[320px]"
          >
            <img
              :src="member.image"
              :alt="member.firstName + ' ' + member.lastName"
              class="absolute rounded-lg m-1.5 inset-0 w-[97.5%] sm:w-full h-[97.5%] object-cover object-top"
            />
            <div
              class="absolute h-[80px] rounded-b-lg inset-x-0 bottom-2 w-[95.5%] sm:w-[97.5%] md:w-[96.5%] left-2.5 md:left-3 lg:left-2.5 bg-white"
            >
              <div class="left-0 right-0 p-3 pr-14">
                <h3 class="text-lg font-semibold text-[#353535]">
                  {{ member.firstName }}
                  <span class="font-medium">{{ member.lastName }}</span>
                </h3>
                <p class="text-sm text-[#828282] mt-0.5">
                  {{ member.position }}
                </p>
              </div>
              <a
                :href="member.linkedIn || '#'"
                target="_blank"
                rel="noopener noreferrer"
                class="absolute bottom-2.5 right-2.5 w-9 h-9 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <span class="text-xs font-bold leading-none">in</span>
              </a>
            </div>
          </div>
          <div class="flex-1 p-6 flex flex-col justify-center">
            <ul class="space-y-3 list-none pl-0">
              <li
                v-for="(detail, i) in member.details"
                :key="i"
                class="flex gap-3 text-[#353535] text-sm leading-relaxed"
              >
                <span
                  class="flex-shrink-0 w-0 h-0 mt-1.5 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-[#316CF4]"
                  aria-hidden
                />
                <span>{{ detail }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import briefcaseIcon from "@/assets/briefcase.svg"

const team = [
  {
    firstName: "Hilary Chisom",
    lastName: "Nwankwo",
    position: "MD/CEO",
    image: "/images/team-1.jpg",
    linkedIn:
      "https://www.linkedin.com/in/hilary-chisom-nwankwo-acib-6561388b/",
    details: [
      "Experienced professional across Banking and Oil & Gas Trading & Finance",
      "Formerly CFO of Oil trading firm Propetrol",
      // "Prior to this, he enjoyed an 8-year banking career across Access, Fidelity, and Sterling Bank",
      "Holds an MA Intl. Political Economy from King's College London and a BA Intl. Relations from University of St. Andrews, Scotland",
    ],
  },
  {
    firstName: "Ekemezie",
    lastName: "Uche",
    position: "DMD",
    image: "/images/team-2.jpg",
    linkedIn: "https://www.linkedin.com/in/ekemezie-uche-64840559/",
    details: [
      "Experienced professional across Management Consulting & Energy Finance",
      "Formerly an Associate with CrossBoundary's Energy Innovation Lab",
      "Formerly a Consultant with McKinsey & Company serving African & Middle Eastern clients across Banking, Oil & Gas, and Consumer Goods",
      "Holds an MSc. from the London School of Economics and a BA from St. John's College, MD, USA.",
    ],
  },
]
</script>
