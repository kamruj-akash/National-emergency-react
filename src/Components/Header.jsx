function Header() {
  return (
    <>
      <nav class="container mx-auto flex flex-col justify-between items-center py-6 bg-white md:flex-row">
        <div class="flex items-center justify-center gap-3">
          <img class="w-12" src="assets/logo.png" alt="" />
          <p class="text-[#006747] text-xl/6 font-extrabold">
            Emergency
            <br />
            Service
          </p>
        </div>
        <div class="gap-5 flex">
          <p class="p-3 bg-[#41ff6a10] flex items-center gap-3 text-[16px] font-extrabold text-black rounded-[50px] py-3 px-5">
            <span id="heart_count">0</span>
            <img class="w-7" src="assets/heart.png" alt="heart-image" />
          </p>
          <p class="p-3 bg-[#41ff6a10] flex items-center gap-3 text-[16px] font-extrabold text-black rounded-[50px] py-3 px-5">
            <span id="coin_count">100</span>
            <img class="w-7" src="assets/coin.png" alt="heart-image" />
          </p>
          <p class="cursor-pointer p-3 bg-[#00A63E] flex items-center gap-3 text-white font-semibold text-[16px] rounded-[50px] py-3 px-8">
            <span id="copy_count">0</span>
            Copy
          </p>
        </div>
      </nav>
    </>
  );
}

export default Header;
