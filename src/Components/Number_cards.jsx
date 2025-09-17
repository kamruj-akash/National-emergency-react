function Number_cards() {
  return (
    <>
      <section class="bg-[#F5FFF6]">
        <section class="container mx-auto flex flex-col-reverse justify-between gap-8 pt-12 pb-28 px-5 md:flex-row md:gap-2 lg:gap-8">
          <div
            id="card_parent_div"
            class="grid grid-cols-1 gap-8 w-full md:w-2/3 lg:grid-cols-2 lg:w-3/4 xl:grid-cols-3"
          >
            <div class="drop-shadow-md grid-cols-1 bg-white p-8 rounded-xl">
              <div class="flex justify-between items-center">
                <div class="w-[60px] h-[60px] rounded-2xl bg-[#FFE3E2] flex justify-center items-center">
                  <img
                    class="w-8"
                    src="assets/emergency.png"
                    alt="Icon-photo"
                  />
                </div>
                <button class="heart_add_btn btn bg-white border-none">
                  <i class="text-3xl text-[#5C5C5C] bx bx-heart"></i>
                </button>
              </div>
              <h2 class="card-title mt-4 mb-1 text-xl font-bold text-[#111111]">
                National Emergency Number
              </h2>
              <p class="text-[#5C5C5C] text-sm font-normal">
                National Emergency
              </p>
              <p class="text-2xl font-bold text-[#111111] mt-5 pb-1">999</p>
              <p class="bg-[#F2F2F2] py-[#6px] px-4 text-[#5C5C5C] text-sm font-normal inline-block rounded-full">
                All
              </p>
              <div class="flex justify-between mt-5 gap-2">
                <button class="card_copy_btn w-1/2 btn border-1 border-[#D4D6D5] rounded-xl bg-white text-[#5C5C5C] text-[16px] hover:drop-shadow-md hover:bg-[#00a63d3c] transition">
                  <i class="fa-solid fa-copy"></i>
                  Copy
                </button>
                <button class="card_call_btn w-1/2 btn rounded-xl bg-[#00A63E] text-white text-[16px] hover:drop-shadow-md hover:bg-[#5C5C5C] transition">
                  <i class="card_call_btn fa-solid fa-phone"></i> Call
                </button>
              </div>
            </div>

            <div class="drop-shadow-md grid-cols-1 bg-white p-8 rounded-xl">
              <div class="flex justify-between items-center">
                <div class="w-[60px] h-[60px] rounded-2xl bg-[#DFEFFF] flex justify-center items-center">
                  <img class="w-8" src="assets/police.png" alt="Icon-photo" />
                </div>
                <button class="heart_add_btn btn bg-white border-none">
                  <i class="text-3xl text-[#5C5C5C] bx bx-heart"></i>
                </button>
              </div>
              <h2 class="card-title mt-4 mb-1 text-xl font-bold text-[#111111]">
                Police Helpline Number
              </h2>
              <p class="text-[#5C5C5C] text-sm font-normal">Police</p>
              <p class="text-2xl font-bold text-[#111111] mt-5 pb-1">999</p>
              <p class="bg-[#F2F2F2] py-[#6px] px-4 text-[#5C5C5C] text-sm font-normal inline-block rounded-full">
                Police
              </p>
              <div class="flex justify-between mt-5 gap-2">
                <button class="card_copy_btn w-1/2 btn border-1 border-[#D4D6D5] rounded-xl bg-white text-[#5C5C5C] text-[16px] hover:drop-shadow-md hover:bg-[#00a63d3c] transition">
                  <i class="fa-solid fa-copy"></i>
                  Copy
                </button>
                <button class="card_call_btn w-1/2 btn rounded-xl bg-[#00A63E] text-white text-[16px] hover:drop-shadow-md hover:bg-[#5C5C5C] transition">
                  <i class="fa-solid fa-phone"></i> Call
                </button>
              </div>
            </div>

            <div class="drop-shadow-md grid-cols-1 bg-white p-8 rounded-xl">
              <div class="flex justify-between items-center">
                <div class="w-[60px] h-[60px] rounded-2xl bg-[#FFE3E2] flex justify-center items-center">
                  <img
                    class="w-8"
                    src="assets/fire-service.png"
                    alt="Icon-photo"
                  />
                </div>
                <button class="heart_add_btn btn bg-white border-none">
                  <i class="text-3xl text-[#5C5C5C] bx bx-heart"></i>
                </button>
              </div>
              <h2 class="card-title mt-4 mb-1 text-xl font-bold text-[#111111]">
                Fire Service Number
              </h2>
              <p class="text-[#5C5C5C] text-sm font-normal">Fire Service</p>
              <p class="text-2xl font-bold text-[#111111] mt-5 pb-1">999</p>
              <p class="bg-[#F2F2F2] py-[#6px] px-4 text-[#5C5C5C] text-sm font-normal inline-block rounded-full">
                Fire
              </p>
              <div class="flex justify-between mt-5 gap-2">
                <button class="card_copy_btn w-1/2 btn border-1 border-[#D4D6D5] rounded-xl bg-white text-[#5C5C5C] text-[16px] hover:drop-shadow-md hover:bg-[#00a63d3c] transition">
                  <i class="fa-solid fa-copy"></i>
                  Copy
                </button>
                <button class="card_call_btn w-1/2 btn rounded-xl bg-[#00A63E] text-white text-[16px] hover:drop-shadow-md hover:bg-[#5C5C5C] transition">
                  <i class="fa-solid fa-phone"></i> Call
                </button>
              </div>
            </div>

            <div class="drop-shadow-md grid-cols-1 bg-white p-8 rounded-xl">
              <div class="flex justify-between items-center">
                <div class="w-[60px] h-[60px] rounded-2xl bg-[#FFE3E2] flex justify-center items-center">
                  <img
                    class="w-8"
                    src="assets/ambulance.png"
                    alt="Icon-photo"
                  />
                </div>
                <button class="heart_add_btn btn bg-white border-none">
                  <i class="text-3xl text-[#5C5C5C] bx bx-heart"></i>
                </button>
              </div>
              <h2 class="card-title mt-4 mb-1 text-xl font-bold text-[#111111]">
                Ambulance Service
              </h2>
              <p class="text-[#5C5C5C] text-sm font-normal">Ambulance</p>
              <p class="text-2xl font-bold text-[#111111] mt-5 pb-1">
                1994-999999
              </p>
              <p class="bg-[#F2F2F2] py-[#6px] px-4 text-[#5C5C5C] text-sm font-normal inline-block rounded-full">
                Health
              </p>
              <div class="flex justify-between mt-5 gap-2">
                <button class="card_copy_btn w-1/2 btn border-1 border-[#D4D6D5] rounded-xl bg-white text-[#5C5C5C] text-[16px] hover:drop-shadow-md hover:bg-[#00a63d3c] transition">
                  <i class="fa-solid fa-copy"></i>
                  Copy
                </button>
                <button class="card_call_btn w-1/2 btn rounded-xl bg-[#00A63E] text-white text-[16px] hover:drop-shadow-md hover:bg-[#5C5C5C] transition">
                  <i class="fa-solid fa-phone"></i> Call
                </button>
              </div>
            </div>

            <div class="drop-shadow-md grid-cols-1 bg-white p-8 rounded-xl">
              <div class="flex justify-between items-center">
                <div class="w-[60px] h-[60px] rounded-2xl bg-[#FFE3E2] flex justify-center items-center">
                  <img
                    class="w-8"
                    src="assets/emergency.png"
                    alt="Icon-photo"
                  />
                </div>
                <button class="heart_add_btn btn bg-white border-none">
                  <i class="text-3xl text-[#5C5C5C] bx bx-heart"></i>
                </button>
              </div>
              <h2 class="card-title mt-4 mb-1 text-xl font-bold text-[#111111]">
                Women & Child Helpline
              </h2>
              <p class="text-[#5C5C5C] text-sm font-normal">
                Women & Child Helpline
              </p>
              <p class="text-2xl font-bold text-[#111111] mt-5 pb-1">109</p>
              <p class="bg-[#F2F2F2] py-[#6px] px-4 text-[#5C5C5C] text-sm font-normal inline-block rounded-full">
                Help
              </p>
              <div class="flex justify-between mt-5 gap-2">
                <button class="card_copy_btn w-1/2 btn border-1 border-[#D4D6D5] rounded-xl bg-white text-[#5C5C5C] text-[16px] hover:drop-shadow-md hover:bg-[#00a63d3c] transition">
                  <i class="fa-solid fa-copy"></i>
                  Copy
                </button>
                <button class="card_call_btn w-1/2 btn rounded-xl bg-[#00A63E] text-white text-[16px] hover:drop-shadow-md hover:bg-[#5C5C5C] transition">
                  <i class="fa-solid fa-phone"></i> Call
                </button>
              </div>
            </div>

            <div class="drop-shadow-md grid-cols-1 bg-white p-8 rounded-xl">
              <div class="flex justify-between items-center">
                <div class="w-[60px] h-[60px] rounded-2xl bg-[#FFE3E2] flex justify-center items-center">
                  <img
                    class="w-8"
                    src="assets/emergency.png"
                    alt="Icon-photo"
                  />
                </div>
                <button class="heart_add_btn btn bg-white border-none">
                  <i class="text-3xl text-[#5C5C5C] bx bx-heart"></i>
                </button>
              </div>
              <h2 class="card-title mt-4 mb-1 text-xl font-bold text-[#111111]">
                Anti-Corruption Helpline
              </h2>
              <p class="text-[#5C5C5C] text-sm font-normal">Anti-Corruption</p>
              <p class="text-2xl font-bold text-[#111111] mt-5 pb-1">106</p>
              <p class="bg-[#F2F2F2] py-[#6px] px-4 text-[#5C5C5C] text-sm font-normal inline-block rounded-full">
                Govt.
              </p>
              <div class="flex justify-between mt-5 gap-2">
                <button class="card_copy_btn w-1/2 btn border-1 border-[#D4D6D5] rounded-xl bg-white text-[#5C5C5C] text-[16px] hover:drop-shadow-md hover:bg-[#00a63d3c] transition">
                  <i class="fa-solid fa-copy"></i>
                  Copy
                </button>
                <button class="card_call_btn w-1/2 btn rounded-xl bg-[#00A63E] text-white text-[16px] hover:drop-shadow-md hover:bg-[#5C5C5C] transition">
                  <i class="fa-solid fa-phone"></i> Call
                </button>
              </div>
            </div>

            <div class="drop-shadow-md grid-cols-1 bg-white p-8 rounded-xl">
              <div class="flex justify-between items-center">
                <div class="w-[60px] h-[60px] rounded-2xl bg-[#FFE3E2] flex justify-center items-center">
                  <img
                    class="w-8"
                    src="assets/emergency.png"
                    alt="Icon-photo"
                  />
                </div>
                <button class="heart_add_btn btn bg-white border-none">
                  <i class="text-3xl text-[#5C5C5C] bx bx-heart"></i>
                </button>
              </div>
              <h2 class="card-title mt-4 mb-1 text-xl font-bold text-[#111111]">
                Electricity Helpline
              </h2>
              <p class="text-[#5C5C5C] text-sm font-normal">
                Electricity Outage
              </p>
              <p class="text-2xl font-bold text-[#111111] mt-5 pb-1">16216</p>
              <p class="bg-[#F2F2F2] py-[#6px] px-4 text-[#5C5C5C] text-sm font-normal inline-block rounded-full">
                Electricity
              </p>
              <div class="flex justify-between mt-5 gap-2">
                <button class="card_copy_btn w-1/2 btn border-1 border-[#D4D6D5] rounded-xl bg-white text-[#5C5C5C] text-[16px] hover:drop-shadow-md hover:bg-[#00a63d3c] transition">
                  <i class="fa-solid fa-copy"></i>
                  Copy
                </button>
                <button class="card_call_btn w-1/2 btn rounded-xl bg-[#00A63E] text-white text-[16px] hover:drop-shadow-md hover:bg-[#5C5C5C] transition">
                  <i class="fa-solid fa-phone"></i> Call
                </button>
              </div>
            </div>

            <div class="drop-shadow-md grid-cols-1 bg-white p-8 rounded-xl">
              <div class="flex justify-between items-center">
                <div class="w-[60px] h-[60px] rounded-2xl bg-[#FFE3E2] flex justify-center items-center">
                  <img class="w-8" src="assets/brac.png" alt="Icon-photo" />
                </div>
                <button class="heart_add_btn btn bg-white border-none">
                  <i class="text-3xl text-[#5C5C5C] bx bx-heart"></i>
                </button>
              </div>
              <h2 class="card-title mt-4 mb-1 text-xl font-bold text-[#111111]">
                Brac Helpline
              </h2>
              <p class="text-[#5C5C5C] text-sm font-normal">Brac</p>
              <p class="text-2xl font-bold text-[#111111] mt-5 pb-1">16445</p>
              <p class="bg-[#F2F2F2] py-[#6px] px-4 text-[#5C5C5C] text-sm font-normal inline-block rounded-full">
                NGO
              </p>
              <div class="flex justify-between mt-5 gap-2">
                <button class="card_copy_btn w-1/2 btn border-1 border-[#D4D6D5] rounded-xl bg-white text-[#5C5C5C] text-[16px] hover:drop-shadow-md hover:bg-[#00a63d3c] transition">
                  <i class="fa-solid fa-copy"></i>
                  Copy
                </button>
                <button class="card_call_btn w-1/2 btn rounded-xl bg-[#00A63E] text-white text-[16px] hover:drop-shadow-md hover:bg-[#5C5C5C] transition">
                  <i class="fa-solid fa-phone"></i> Call
                </button>
              </div>
            </div>

            <div class="drop-shadow-md grid-cols-1 bg-white p-8 rounded-xl">
              <div class="flex justify-between items-center">
                <div class="w-[60px] h-[60px] rounded-2xl bg-[#FFE3E2] flex justify-center items-center">
                  <img
                    class="w-8"
                    src="assets/Bangladesh-Railway.png"
                    alt="Icon-photo"
                  />
                </div>
                <button class="heart_add_btn btn bg-white border-none">
                  <i class="text-3xl text-[#5C5C5C] bx bx-heart"></i>
                </button>
              </div>
              <h2 class="card-title mt-4 mb-1 text-xl font-bold text-[#111111]">
                Bangladesh Railway Helpline
              </h2>
              <p class="text-[#5C5C5C] text-sm font-normal">
                Bangladesh Railway
              </p>
              <p class="text-2xl font-bold text-[#111111] mt-5 pb-1">163</p>
              <p class="bg-[#F2F2F2] py-[#6px] px-4 text-[#5C5C5C] text-sm font-normal inline-block rounded-full">
                Travel
              </p>
              <div class="flex justify-between mt-5 gap-2">
                <button class="card_copy_btn w-1/2 btn border-1 border-[#D4D6D5] rounded-xl bg-white text-[#5C5C5C] text-[16px] hover:drop-shadow-md hover:bg-[#00a63d3c] transition">
                  <i class="fa-solid fa-copy"></i>
                  Copy
                </button>
                <button class="card_call_btn w-1/2 btn rounded-xl bg-[#00A63E] text-white text-[16px] hover:drop-shadow-md hover:bg-[#5C5C5C] transition">
                  <i class="fa-solid fa-phone"></i> Call
                </button>
              </div>
            </div>
          </div>

          <aside class="drop-shadow-md w-full bg-white p-6 rounded-xl md:w-1/3 md:p-2 lg:w-1/4 lg:p-6">
            <div class="flex justify-between md:flex-col md:items-center lg:flex-row lg:items-center">
              <div class="flex items-center justify-center text-xl font-medium text-[#111111] gap-2">
                <i class="fa-solid fa-clock-rotate-left"></i>
                <h1>Call History</h1>
              </div>
              <div>
                <button
                  id="clear_callHistory_btn"
                  class="btn p-3 bg-[#00A63E] flex items-center gap-3 text-white font-semibold text-[16px] rounded-[50px] py-6 px-8 md:mt-5 lg:mt-0 hover:drop-shadow-md hover:bg-[#5C5C5C] transition"
                >
                  Clear
                </button>
              </div>
            </div>

            <div id="call_history_parent"></div>
          </aside>
        </section>
      </section>
    </>
  );
}

export default Number_cards;
