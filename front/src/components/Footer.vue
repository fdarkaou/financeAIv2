<template>
    <footer class="absolute w-full bottom-0 pb-6">
      <div class="container mx-auto px-4">
        <hr class="mb-6 border-b-1" />
        <div
          class="flex flex-wrap items-center md:justify-between justify-center"
        >
          <div class="w-full md:w-4/12 px-4">
            <div class="text-sm  font-semibold py-1">
              Copyright © {{date}}
              <a
                href="https://www.chainvision.io"
                class=" hover:text-gray-400 text-sm font-semibold py-1"
                >ChainVision.io</a
              >
            </div>
          </div>
          <div class="w-full md:w-8/12 px-4">
            <ul
              class="flex flex-wrap list-none md:justify-end  justify-center"
            >
              <li>
                <a
                  href="https://www.chainvision.io"
                  class=" hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                  >ChainVision</a
                >
              </li>
              <li>
                <a
                  href="https://www.chainvision.io/about"
                  class=" hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                  >About Us</a
                >
              </li>
              <li>
                <a
                  href="http://blog.chainvision.io"
                  class=" hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                  >Blog</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </template>
  <script>
  export default {
    data() {
      return {
        date: new Date().getFullYear()
      }
    }
  }
  </script>