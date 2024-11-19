import { StarIcon } from "lucide-react";

const ReviewCard = ({ projet }) => {
  return (
    <div className=" flex  rounded-xl bg-bgTried-light dark:bg-bgSecondary-dark overflow-hidden  cursor-pointer shadow-2xl  dark:shadow-xl dark:shadow-bgPrimary-dark ">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full ">
        <div className=" flex flex-col ml-4 my-2  justify-center  flex-wrap lg:gap-3 ">
          <blockquote>
            <p className=" text-primaryText-light dark:text-bgSecondary-light text-sm  m-auto ">
              "{projet.description}"
            </p>
          </blockquote>

          <div className="flex items-center divide-x-2  divide-gray-500 dark:divide-gray-700 ">
            <cite className=" pe-2 font-medium text-gray-900 dark:text-white">
              {projet.name}
            </cite>
            <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400 ">
              {projet.title}
            </cite>
          </div>
        </div>
        <div className=" w-full">
          <img src={projet.image} alt={projet.title} className="w-full " />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
