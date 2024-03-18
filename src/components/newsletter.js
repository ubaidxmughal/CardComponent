const NewsLetter = () => {
  return (
    <div class="flex flex-wrap items-center w-full  mx-auto text-left p-14">
      <div class="flex-1   ss:text-center  xs:text-center w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
        <img
          src="/mail.png"
          className="mb-5   xs:mx-auto  ss:mx-auto"
          alt="#"
        />
        <h1 class="mb-2   text-gray-700 dark:text-gray-200 text-6xl">
          Keep Up With The Latest
        </h1>
        <p class="text-white mt-10 text-xl">
          Join our newsletter to stay up to date on features and releases.
        </p>
      </div>
      <div class="w-full px-1 flex-1 md:w-auto lg:w-1/2 text-center">
        <h1 class="mb-10  text-gray-700 dark:text-gray-200 text-2xl font-bold">
          Stay up to date
        </h1>
        <form novalidate="">
          <input type="hidden" name="tags" value="earlyaccess" />

          <div class="flex flex-col sm:flex-row">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              class="  bg-white flex-1 px-3 py-2 placeholder-white border border-gray-300 rounded-full sm:mr-5 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
            <button
              type="submit"
              class="w-full px-8 py-3 mt-5 text-white text-2xl bg-customBlue rounded-full sm:mt-0 sm:w-auto whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </form>
        <h1 class="mt-8  text-white dark:text-white text-xl ">
          By subscribing you agree with our Privacy Policy
        </h1>
      </div>
    </div>
  );
};

export default NewsLetter;
