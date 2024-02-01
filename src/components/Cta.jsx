import React from "react";

function Cta() {
  return (
    <section class="bg-gray-900 container-wrapper rounded-lg ">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            Integrated Efforts Towards Excellence
          </h2>
          <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Everyone wants to be successful and aspires to live a cozy life. Our
            business modules are distinctive but simple and earning-oriented.
            Irrespective of educational or religious background and away from
            gender bias attitude we are like a close-knit family who believes in
            working and creating a vast network. These integrated efforts bring
            them towards excellence and provide a better standard of living and
            comforts of life.
          </p>
          <a
            href="/"
            class="text-black btn-main px-8 py-2 font-bold focus:ring-4 focus:ring-primary-300 rounded-lg text-sm  mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Join Us Today{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cta;
