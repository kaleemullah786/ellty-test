import OptionItem from "@/components/OptionItem";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form className="w-[370px] h-[326px] rounded-md shadow-lg border py-[10px] border-[#EEEEEE] transition-all text-sm font-normal">
        <OptionItem label='All Pages' />
        <hr className="my-[10px] mx-[15px] border-[#CDCDCD]" />
        <div className="h-[164px] space-y-1">
          <OptionItem label='Page 1' />
          <OptionItem label='Page 2' />
          <OptionItem label='Page 3' />
          <OptionItem label='Page 4' />
        </div>
        <hr className="my-[10px] mx-[15px] border-[#CDCDCD]" />
        <div className="h-[60px] py-[10px] px-[15px]">
          <button className="h-[40px] w-full bg-[#FFCE22] hover:bg-[#FFD84D] rounded text-center py-[10px] px-[20px]">Done</button>
        </div>
      </form>
    </main>
  );
}
