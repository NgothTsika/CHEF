const HeroCard = ({ props }) => {
  return (
    <div className="  overflow-hidden  flex justify-center items-center w-full ">
      <div className=" flex justify-center items-center">
        <div className=" w-full ">
          <img src={props.image} alt={props.title} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
