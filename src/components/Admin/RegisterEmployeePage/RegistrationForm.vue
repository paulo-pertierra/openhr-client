<script lang="ts" setup></script>

<template>
  <div>
    <h1 class="font-bold text-3xl mb-8 mt-2">Employee Registration</h1>
<div class="min-w-[400px] max-w-3xl">
  <div
      id="accordion-collapse"
      data-accordion="collapse"
      class="bg-white rounded-xl"
    >
      <div>
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span class="uppercase">Personal Information</span>
            <svg
              data-accordion-icon
              class="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind
              CSS including buttons, dropdowns, modals, navbars, and more.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to
              <a
                href="/docs/getting-started/introduction/"
                class="text-blue-600 dark:text-blue-500 hover:underline"
                >get started</a
              >
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <span class="uppercase">Educational Background</span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma software so everything
              you see in the library has a design equivalent in our Figma file.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out the
              <a
                href="https://flowbite.com/figma/"
                class="text-blue-600 dark:text-blue-500 hover:underline"
                >Figma design system</a
              >
              based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </div>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-collapse-body-3"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-3"
        >
          <span class="uppercase">Work Information</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        class="hidden"
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you
            see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the
            <a
              href="https://flowbite.com/figma/"
              class="text-blue-600 dark:text-blue-500 hover:underline"
              >Figma design system</a
            >
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-end border-t-2 py-4">
     <button class="bg-blue-600 text-white p-2 m-1 rounded-lg font-semibold hover:bg-blue-800 transition-colors">Generate Credentials</button>
     <button class="bg-blue-600 text-white p-2 m-1 rounded-lg font-semibold hover:bg-blue-800 transition-colors">Register User</button>
    </div>
</div>
  </div>
</template>
