import { ArrowRight } from "lucide-react";
import exclusiveOfferCardImg1 from "../../assets/exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "../../assets/exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "../../assets/exclusiveOfferCardImg3.png";
import { Link } from "react-router-dom";

const ExclusiveOffers = () => {
  // Exclusive Offers Dummy Data
  const exclusiveOffers = [
    {
      _id: 1,
      title: "Summer Escape Package",
      description: "Enjoy a complimentary night and daily breakfast",
      priceOff: 25,
      expiryDate: "Aug 31",
      image: exclusiveOfferCardImg1,
    },
    {
      _id: 2,
      title: "Romantic Getaway",
      description: "Special couples package including spa treatment",
      priceOff: 20,
      expiryDate: "Sep 20",
      image: exclusiveOfferCardImg2,
    },
    {
      _id: 3,
      title: "Luxury Retreat",
      description:
        "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.",
      priceOff: 30,
      expiryDate: "Sep 25",
      image: exclusiveOfferCardImg3,
    },
  ];
  return (
    <>
      <div className="px-12 py-12 md:px-28 ">
        <div className="header flex flex-col  space-y-7 md:space-y-0 md:flex-row  justify-between items-center  ">
          <div className="title">
            <h2 className="text-[30px] md:text-[40px] mb-1  font-extrabold">
              Exclusive Offers
            </h2>
            <p className="text-(--color-text-secondary) text-justify  text-sm md:text-[16px] leading-4.5">
              Take advantage of our limited-time offers and special packages to
              enhance your stay and create <br /> unforgettable memories.
            </p>
          </div>
          <button className="group rounded-md py-1 flex items-center gap-1  px-4 cursor-pointer text-(--color-primary) border text-sm font-medium">
            <span>View All Offers</span>{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-all"
            />
          </button>
        </div>

        <div className="allcards mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
          {exclusiveOffers.map((item, index) => {
            return (
              <Link
                key={item._id}
                className="bg-orange-300 rounded-xl py-4 px-5 overflow-hidden bg-cover bg-no-repeat w-full bg-center flex flex-col items-start justify-between space-y-3 shadow-(--shadow-card)"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <p className="rounded-full text-sm px-4 py-1 bg-(--color-bg-main) text-(--color-primary)">
                  {item.priceOff} % OFF
                </p>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p>{item.description}</p>
                <p className="text-sm text-gray-300">{item.expiryDate}</p>
                <button className="group rounded-md py-1 flex items-center gap-1  px-1 cursor-pointer   text-sm font-medium">
                  <span>View Offers</span>{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-all"
                  />
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExclusiveOffers;
