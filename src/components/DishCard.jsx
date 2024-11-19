import { ShoppingBag } from "lucide-react";

const DishCard = ({ projet }) => {
  return (
    <div className=" flex flex-col justify-center items-center p-3  rounded-xl bg-bgTried-light dark:bg-bgSecondary-dark  hover:scale-110 hover:border-yellow-200 hover:border-[1px] cursor-pointer shadow-xl dark:shadow-xl dark:shadow-bgPrimary-dark  ">
      <img
        src={projet.image}
        alt={projet.title}
        className="flex-1 w-full md:w-40 p-3 hover:scale-110 hover:duration-500  "
      />
      <div className="p-1 px-2 w-full ">
        <h3 className="mb-2 text-lg font-Geist font-semibold  uppercase text-primaryText-light dark:text-primaryText-dark w-full">
          {projet.title}
        </h3>
        <p className=" text-sm font-light font-Nunito  text-secondaryText-light dark:text-bgSecondary-light mb-2 ">
          {projet.description}
        </p>
        <p className=" flex justify-between text-md font-Geist text-yellow-500 mt-1 font-bold text-lg">
          ${projet.price}
          <ShoppingBag />
        </p>
      </div>
    </div>
  );
};

export default DishCard;
