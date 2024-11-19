import { ShoppingBagIcon } from "lucide-react";

const PromoCard = ({ props }) => {
  return (
    <div className=" flex flex-col p-5 m-5 rounded-xl bg-bgTried-light dark:shadow-lg dark:bg-bgTried-dark shadow-xl ">
      <img src={props.image} alt={props.title} className="w-40 mx-auto" />
      <div className="  ">
        <h5 className=" bg-red-600  text-white font-extrabold p-1 uppercase flex w-fit font-Bebas ">
          {props.label}
        </h5>
        <h1 className="my-4 text-2xl font-bold font-Nunito tracking-tighter dark:text-white ">
          {props.title}
        </h1>
        <p className=" text-sm dark:text-gray-200 my-2 font-Geist">
          {props.description}
        </p>
        <a className=" flex items-center gap-2 text-sm cursor-pointer font-bold text-red-600 font-Nunito ">
          {props.action} <ShoppingBagIcon className=" w-5  " />
        </a>
      </div>
    </div>
  );
};

export default PromoCard;
