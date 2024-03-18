const Footer = () => {
  return (
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-20">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0 lg:w-29">
          <a href="/" class="flex items-center">
            <img src="/ai.svg" class="h-10 me-3" alt="" />
            <span class="self-center text-3xl  whitespace-nowrap dark:text-white">
              IQTEST.ai
            </span>
          </a>
          <p class="text-gray-500 dark:text-gray-500  mt-5 text-xl text-left">
            Test your IQ in a very easy and simple step not complex.
          </p>
        </div>
        <div class="grid grid-cols-3 lg:gap-24  sm:gap-6 sm:grid-cols-3 text-left">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              IQ Test
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="/" class="hover:underline">
                  Quiz
                </a>
              </li>
              <li>
                <a href="/" class="hover:underline">
                  Results
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Support
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="/" class="hover:underline ">
                  Github
                </a>
              </li>
              <li>
                <a href="/" class="hover:underline">
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
