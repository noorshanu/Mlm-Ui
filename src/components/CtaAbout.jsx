import React from "react";

function CtaAbout() {
  return (
    <section class="bg-gray-900 container-wrapper rounded-lg ">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          {/* <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            Integrated Efforts Towards Excellence
          </h2> */}
          <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            We invite you to join us on this journey of wellness. Whether you
            are seeking to improve your health, find natural solutions, or
            simply explore the potential of biomagnetic products, Unify Wellness
            is here for you. Connect with us to learn more about our products,
            our philosophy, and how we can help you achieve your wellness goals.
          </p>
          <a
            href="mailto:director@unifywellness.co.in"
            class="text-black btn-main px-8 py-2 font-bold focus:ring-4 focus:ring-primary-300 rounded-lg text-sm  mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Connect with Us{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

export default CtaAbout;
