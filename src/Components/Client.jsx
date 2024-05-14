import img2 from "../../public/2 (1).webp";
// import img3 from "../../public/2.webp";
import img4 from "../../public/3.webp";
import img5 from "../../public//4.webp";
import img6 from "../../public/5.webp";
import img7 from "../../public/6.webp";
import img1 from "../../public/1.webp";

const Client = () => {
    return (
        <div className="my-20">
        <div className="mb-5 text-center">
            <h2 className="text-2xl font-semibold mb-2">OUR CLIENTS</h2>
            <div className="w-10 mx-auto h-[2px] bg-[#d7953e]"></div>
        </div>
      <div className="grid md:grid-cols-4 gap-5 lg:grid-cols-6">
        <div className="py-5 px-10 border border-[#d7953e]">
          <img
            src={img2}
            alt=""
          />
        </div>
        <div className="py-5 px-10 border border-[#d7953e]">
          <img
            src={img1}
            alt=""
          />
        </div>
        <div className="py-5 px-10 border border-[#d7953e]">
          <img
            src={img4}
            alt=""
          />
        </div>
        <div className="py-5 px-10 border border-[#d7953e]">
          <img
            src={img5}
            alt=""
          />
        </div>
        <div className="py-5 px-10 border border-[#d7953e]">
          <img
            src={img6}
            alt=""
          />
        </div>
        <div className="py-5 px-10 border border-[#d7953e]">
          <img
            src={img7}
            alt=""
          />
        </div>
      </div>
    </div>
    );
};

export default Client;