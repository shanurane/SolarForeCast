import React from "react";

const Searchbar = () => {
  return (
    <div>
      <div className="md:w-80">
        <div className="flex w-full">
          <input
            type="search"
            className="relative block min-w-0 flex-auto rounded-l-full border-[1.4px] border-solid border-zinc-900 bg-transparent bg-clip-padding px-3 py-[0.1rem] text-base font-normal text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-whitw focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-white dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon3"
          />

          {/* <!--Search button--> */}
          <div>
            <button
              className="relative rounded-r-full border-[1.4px] border-l-0 border-zinc-600 px-4 py-3 text-xs text-white inset-0 backdrop-blur-md bg-white/20 font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              type="button"
              id="button-addon3"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
