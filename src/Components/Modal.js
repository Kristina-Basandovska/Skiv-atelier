import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Modal({ isOpen, setIsOpen }) {
  const [data, setData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode:'all'});

  function onSubmit(d) {
    setData({...data,...d})
    setIsOpen(!isOpen);
  }

  return (
    <div class="w-screen h-screen fixed top-0 left-0 bg-black/40">
      <form
        class="fixed top-[20%] left-[10%] lg:top-1/4 lg:left-1/3 w-[80%] lg:w-1/3 lg:h-1/2 bg-white shadow-md px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-end mb-4">
          <button
            type="button"
            className="text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            X
          </button>
        </div>

        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Ім'я
          </label>
          <input
            {...register("name", { required: 'true', minLength:2 })}
            class=" border border-black w-full  py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:font-light"
            id="username"
            type="text"
            placeholder=" Ім'я"
          />
          {errors.name&&<spam className='text-red-500 text-xs pl-2'>Введіть ваше ім'я</spam>}
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
            Тел
          </label>
          <input
            class=" border border-black w-full    py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:border-[#d2c8bc] placeholder:text-xs placeholder:font-light"
            {...register("phone", { required: true, minLength:10 })}
            id="phone"
            type="number"
            placeholder="+38 063 000 00 00"
          />
          {errors.phone&&<spam className='text-red-500 text-xs pl-2'>Введіть номер телефону</spam>}
        </div>

        <div class="flex items-center justify-center">
          <button
            type="submit"
            className="border w-1/2 border-[#d2c8bc] p-4 text-sm flex justify-center hover:bg-[#d2c8bc] hover:text-white cursor-pointer transition duration-300 ease-in-out"
          >
            Замовити консультацію
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
