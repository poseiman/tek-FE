import type { NextPage } from "next";
import WalletChecker from "../modules/WalletChecker";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center transition-all duration-300">
      <div className="w-full max-w-[1000px] flex mt-[49px] items-center justify-center p-3 relative flex-col animate__animated animate__fadeIn">
        <WalletChecker />
      </div>
    </div>
  );
};

export default Home;
