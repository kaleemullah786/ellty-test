export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-[370px] h-[326px] rounded-md shadow-lg border py-[10px] border-[#EEEEEE] transition-all text-sm font-normal">
        <label className="flex justify-between py-2 pr-[15px] pl-[22px]">
          <h4>All Pages</h4>
          <input type="checkbox" />
        </label>
        <hr className="my-[10px] mx-[15px] border-[#CDCDCD]"/>
        <div className="h-[164px] space-y-2">
        <label className="flex justify-between py-2 pr-[15px] pl-[22px]">
          <h4>Page 1</h4>
          <input type="checkbox" />
        </label>
        <label className="flex justify-between py-2 pr-[15px] pl-[22px]">
          <h4>Page 2</h4>
          <input type="checkbox" />
        </label>
        <label className="flex justify-between py-2 pr-[15px] pl-[22px]">
          <h4>Page 3</h4>
          <input type="checkbox" />
        </label>
        <label className="flex justify-between py-2 pr-[15px] pl-[22px]">
          <h4>Page 4</h4>
          <input type="checkbox" />
        </label>
        </div>
        <hr className="my-[10px] mx-[15px] border-[#CDCDCD]"/>
        <div className="h-[60px] py-[10px] px-[15px]">
          <button className="h-[40px] w-full bg-[#FFCE22] hover:bg-[#FFD84D] rounded text-center py-[10px] px-[20px]">Done</button>
        </div>
      </div>
    </main>
  );
}
