import React, { useState } from "react";
import Modal from "./Modal";
import Service from "./Service";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="lg:w-[80%] mx-auto mt-40 ">
      <div className="lg:flex lg:my-32  " id='about'>
        <div className="flex justify-center mt-8 lg:w-[50%] ">
          <img
            className="w-[320px] lg:w-[600px] "
            src="https://img.freepik.com/free-photo/sewing-keeps-my-mind-relaxed-cropped-shot-female-tailor-working-new-project-making-clothes-with-sewing-machine-workshop-being-busy-young-designer-making-her-ideas-come-true_176420-14579.jpg?w=996&t=st=1649260034~exp=1649260634~hmac=cf53888a5e80bba6f9631bb7019aa26090094d0561ccd1a3b103b48d7fb608ab"
          />
        </div>
        <div className="flex justify-center items-center flex-col p-4 lg:w-[50%]">
          <p className=" px-10 pt-6 pb-2 text-center text-md uppercase">
            Ательє пошиття та ремонту одягу
          </p>
          <p className="text-sm font-light flex text-center px-10 pb-4">
            SKIV - ательє з ремонту та пошиття одягу у Бoрисполі. Ми знаємо, як
            важливо підкреслити індивідуальність за допомогою сукні чи пальта
            особливого крою. Ми беремося за ремонт будь-яких тканин та
            матеріалів. Повернемо улюбленим предметам гардероба первісний вигляд
            або змусимо сидіти за новим.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="border border-[#d2c8bc] p-4 flex justify-center hover:bg-[#d2c8bc] hover:text-white cursor-pointer transition duration-300 ease-in-out"
            >
              Замовити консультацію
            </button>
          </div>
          {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>

      <div className="flex justify-center m-10 " id="services">
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="#d2c8bc"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      <div className="my-32">
        <p className="text-xl font-semibold flex justify-center mb-8">
          Наші послуги
        </p>
        <div className="flex flex-wrap justify-center lg:flex-row lg:justify-around">
        <Service imgSrc ='https://img.freepik.com/free-photo/woman-tailor-working-sewing-factory_1303-15841.jpg?w=2000' mainText='Ремонт одягу' secondaryText='Креативний підхід. Висока якість роботи'/>
        <Service imgSrc ='https://img.freepik.com/free-photo/woman-creates-clothing-patterns-mannequin_197531-24026.jpg?t=st=1649349391~exp=1649349991~hmac=f77b973aaef201ae0da2666def364c1f3c28c5c50de561e71f9b322e611e08b9&w=996' mainText='Індивідуальний пошив жіночого одягу' secondaryText='Ми шиємо жіночий одяг за індивідуальними мірками'/>
        <Service imgSrc ='https://img.freepik.com/free-photo/male-tailor-cutting-fabric_236854-8023.jpg?w=996' mainText='Індивідуальний пошив чоловічого одягу' secondaryText='Ми шиємо чоловічий одяг за індивідуальними мірками'/>
        </div>
      </div>
    </main>
  );
}
