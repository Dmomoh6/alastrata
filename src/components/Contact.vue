<template>
  <section
    id="contact"
    class="relative min-h-screen bg-[#F4F4F4] overflow-hidden"
  >
    <div class="absolute bottom-0 w-full">
      <img
        src="/images/contact-bg.png"
        alt="Industrial background"
        class="w-full object-cover"
      />
    </div>

    <div class="container mx-auto px-3 md:px-2 py-24">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <div class="w-full lg:w-1/2 z-10">
          <span
            class="text-[#FF8029] uppercase text-sm tracking-wider font-medium"
          >
            CONTACT US
          </span>
          <h2
            class="mt-4 text-[40px] leading-tight font-medium text-gray-900 mb-6"
          >
            Let us know how we can serve you!
          </h2>
          <p class="text-gray-600 text-lg mb-12 max-w-lg">
            Reach out if you are a buyer or seller looking to trade. We are keen
            to hear from you
          </p>

          <form class="space-y-6 max-w-xl">
            <div>
              <input
                type="text"
                id="fullName"
                required
                class="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Full Name*"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                required
                class="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Email Address*"
              />
            </div>
            <div>
              <textarea
                id="message"
                rows="4"
                class="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Type message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-[#000B1D] text-white font-medium py-4 px-8 min-w-[260px] rounded-lg transition duration-300 bg-gradient-to-b from-[#000B1D] to-[#000000] shadow-[inset_0px_1px_0px_0px_#FFFFFF33,0px_1px_4px_0px_#00000080,0px_0px_0px_1px_#00000066] hover:bg-white hover:text-white"
            >
              Send Message
            </button>
          </form>
        </div>

        <div
          class="w-[60vw] absolute bottom-0 right-14 items-end flex justify-end"
        >
          <img
            src="/images/contact.png"
            alt="CompEnergies team members"
            class="w-full max-w-2xl object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.after\:bg-gradient-to-b::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
}
</style>
