import React from "react";
import { assert } from "../assets/imag/ImageFile";
import {motion } from 'framer-motion'
import { assertImage } from "../assets/imag/product-img/product";

const Brands = () => {
  return (
    <section>
      <motion.div
              initial={{opacity:0, x:100}}
                whileInView={{opacity:1, x:0}}  
                transition={{duration:1.5}}
      >

      <h1 className="text-2xl md:text-4xl font-semibold  text-slate-800 text-center">
        Explore Our Brands
      </h1>
      <p className="text-sm text-center">
        Hakuna matata energy ltd based on this brands, explore our original products.
      </p>
      </motion.div> nk nk nk nk nk nk nk nk,

      <motion.div
      initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 1.5}}
      className="hero-con mt-9 gap-4">
        <div
        
        className="py-4 px-5 bg-white shadow-md border border-slate-200 rounded-md ">
          <img
            src={assertImage.sss}
            alt=""
            className="h-50 w-full rounded-2xl mb-4"
          />
          <div className="flex items-center justify-between w-full mb-4">
            <i
              class="ri-lightbulb-flash-line text-[var(--m-c)] font-bold text-2xl p-3 border rounded-full inline-flex w-10 h-10 items-center justify-center border-[var(--m-c)]"

            ></i>
            <h2 className="text-slate-900 font-extrabold  text-[23px]">
              Sukam Product
            </h2>
          </div>
          <div className="w-full h-[1px] bg-slate-700 mb-9"></div>
          <p className="text-slate-800 mb-4">
            We have original battery from sukam. Essential for powering inverters and providing backup power.   
          </p>
          <span className="text-blue-400 ">
            <b className="text-black">Avaiable product:</b> Lithum ion battery,
            Solar System, Inverter
          </span>
        </div>


        <div className="py-4 px-5 bg-white shadow-md border border-slate-200 rounded-md ">
          <img src={assert.felicity} alt="" className="h-50 w-full rounded-2xl mb-4" />
          <div className="flex items-center justify-between w-full mb-4">
            <i
              class="ri-lightbulb-flash-line text-[var(--m-c)] font-bold text-2xl p-3 border rounded-full inline-flex w-10 h-10 items-center justify-center border-[var(--m-c)]"
            ></i>
            <h2 className="text-slate-900 font-extrabold  text-[23px]">Felicity Product</h2>
          </div>
          <div className="w-full h-[1px] bg-slate-700 mb-9"></div>
          <p className="text-slate-800 mb-4">Felicity Solar IVEM 5KVA 48V Solar System Hybrid Inverter</p>
          <span className="text-blue-400">
            <b className="text-black">Avaiable product:</b> Lithum ion battery,
            Street Light, Polycrystalline, Inverter, Home Ess
          </span>
        </div>


        <div className="py-4 px-5 bg-white shadow-md border border-slate-200 rounded-md ">
          <img
            src={assert.cworth}
            alt=""
            className="h-50 w-full rounded-2xl mb-4"
          />
          <div className="flex items-center justify-between w-full mb-4">
            <i
              class="ri-lightbulb-flash-line text-[var(--m-c)] font-bold text-2xl p-3 border rounded-full inline-flex w-10 h-10 items-center justify-center border-[var(--m-c)]"
            ></i>
            <h2 className="text-slate-900 font-extrabold  text-[20px]">
              Cworth brand
            </h2>
          </div>
          <div className="w-full h-[1px] bg-slate-700 mb-9"></div>
          <p className="text-slate-800">
           Cworth brand  is the integrated supplier to meet the needs of many fields of micro-energy storage..
          </p>
          <span className="text-blue-400">
            <b className="text-black">Avaiable product:</b> Lithum ion battery,
            Street Light, Polycrystalline, Inverter, Home Ess
          </span>
        </div>

         <div className="py-4 px-5 w-full bg-white shadow-md border border-slate-200 rounded-md ">
          <img
            src={assert.blu}
            alt=""
            className="h-50 w-full rounded-2xl mb-4"
          />
          <div className="flex items-center justify-between w-full mb-4">
            <i
              class="ri-lightbulb-flash-line text-[var(--m-c)] font-bold text-2xl p-3 border rounded-full inline-flex w-10 h-10 items-center justify-center border-[var(--m-c)]"
            ></i>
            <h2 className="text-slate-900 font-extrabold  text-[20px]">
               Blue Carbon
            </h2>
          </div>
          <div className="w-full h-[1px] bg-slate-700 mb-9"></div>
          <p className="text-slate-800">
            Blue Carbon is the integrated supplier to meet the needs of many fields of micro-energy storage..
          </p>
          <span className="text-blue-400">
            <b className="text-black">Avaiable product:</b> Lithum ion battery,
            Street Light, Sola,r Panel Inverter,
          </span>
        </div>


         <div className=" w-full py-4 px-5 bg-white shadow-md border border-slate-200 rounded-md ">
          <img
            src={assert.afri}
            alt=""
            className="h-50 w-full mb-4"
          />
          <div className="flex items-center justify-between w-full mb-4">
            <i class="ri-lightbulb-flash-line text-[var(--m-c)] font-bold text-2xl p-3 border rounded-full inline-flex w-10 h-10 items-center justify-center border-[var(--m-c)]" ></i>
            <h2 className="text-slate-900 font-extrabold  text-[20px]">
              Africell Solar Panel
            </h2>
          </div>
          <div className="w-full h-[1px] bg-slate-700 mb-9"></div>
          <p className="text-slate-800">
            Africell Solar Energy was established in 2003, locating in Ningbo, China.
          </p>
          <span className="text-blue-400">
            <b className="text-black">Avaiable product:</b> Lithum ion battery, Solar Panel, Inverter,
          </span>
        </div>


       
      </motion.div>
    </section>
  );
};

export default Brands;
