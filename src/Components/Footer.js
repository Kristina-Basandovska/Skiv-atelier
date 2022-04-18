import React from "react";

export default function Footer() {
  return (
      <footer id="contact">
        <p className="text-xl font-semibold lg:flex justify-center mb-10 hidden ">
          Контакти
        </p>

        <div className="relative mb-16">
          <div className="flex flex-col justify-center items-center lg:items-start lg:pl-24 bg-white lg:w-1/3 lg:h-2/3 lg:absolute lg:top-[100px] lg:left-[100px]">
            <p className="text-xl font-semibold mb-6">Контакти</p>
            <div className="flex mb-[12px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p className="pl-2 text-sm font-light">+ 380679468434</p>
            </div>

            <div className="flex mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="pl-2 text-sm font-light">
                м.Бориспіль, вул.Київський шлях,27{" "}
              </p>
            </div>

            <div className=" mb-4 text-sm font-light text-center lg:text-left">
              <p> пн-пт</p>
              <p>з 10-00 до 19-00</p>
            </div>

            <div className=" mb-4 text-sm font-light text-center lg:text-left">
              <p> сб-нд</p>
              <p>вихідні</p>
            </div>

            <div className="flex">
              <svg
                className="mr-4 hover:fill-[#d2c8bc] cursor-pointer transition duration-300 ease-in-out"
                id="Layer_1"
                x="0px"
                y="0px"
                width="25px"
                height="25px"
                viewBox="0 0 48 48"
                enable-background="new 0 0 48 48"
              >
                <desc>Facebook</desc>
                <path d="M21.1 7.8C22.5 6.5 24.5 6 26.4 6h6v6.3h-3.9c-.8-.1-1.6.6-1.8 1.4v4.2h5.7c-.1 2-.4 4.1-.7 6.1h-5v18h-7.4V24h-3.6v-6h3.6v-5.9c.1-1.7.7-3.3 1.8-4.3z"></path>
              </svg>

              <svg
                className="hover:fill-[#d2c8bc] cursor-pointer transition duration-300 ease-in-out"
                id="Layer_1"
                x="0px"
                y="0px"
                width="25px"
                height="25px"
                viewBox="0 0 25 25"
                enable-background="new 0 0 25 25"
              >
                <desc>Instagram</desc>
                <path d="M16.396,3.312H8.604c-2.921,0-5.292,2.371-5.292,5.273v7.846c0,2.886,2.371,5.256,5.292,5.256h7.791c2.922,0,5.292-2.37,5.292-5.274V8.586C21.688,5.683,19.317,3.312,16.396,3.312L16.396,3.312z M7.722,12.5c0-2.64,2.142-4.778,4.778-4.778c2.636,0,4.777,2.138,4.777,4.778s-2.142,4.777-4.777,4.777C9.864,17.277,7.722,15.14,7.722,12.5zM17.756,8.182c-0.615,0-1.104-0.487-1.104-1.102s0.488-1.103,1.104-1.103c0.614,0,1.102,0.488,1.102,1.103S18.37,8.182,17.756,8.182L17.756,8.182z"></path>
                <path d="M12.5,9.376c-1.731,0-3.124,1.398-3.124,3.124c0,1.725,1.393,3.124,3.124,3.124c1.732,0,3.124-1.399,3.124-3.124C15.624,10.775,14.211,9.376,12.5,9.376L12.5,9.376z"></path>
              </svg>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4790.954562826223!2d30.931939153330394!3d50.362550972094375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4e89b5ed66f7f%3A0x8d9ec1140b4cc16a!2z0YPQuy4g0JrQuNC10LLRgdC60LjQuSDRiNC70Y_RhSwgMjcsINCR0L7RgNC40YHQv9C-0LvRjCwg0JrQuNC10LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDQuNC90LAsIDA4MzAw!5e0!3m2!1sru!2spl!4v1649433147205!5m2!1sru!2spl"
            className="lg:w-[90%] mx-auto lg:h-[500px] hidden lg:block"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </footer>
  );
}
