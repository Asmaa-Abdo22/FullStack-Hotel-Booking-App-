import HotelCard from "../HotelCard/HotelCard";
import roomImg1 from "../../assets/roomImg1.png";
import roomImg2 from "../../assets/roomImg2.png";
import roomImg3 from "../../assets/roomImg3.png";
import roomImg4 from "../../assets/roomImg4.png";
import { useNavigate } from "react-router-dom";
const FeaturedDestination = () => {
  // Hotel Dummy Data
  const hotelDummyData = {
    _id: "67f76393197ac559e4089b72",
    name: "Urbanza Suites",
    address: "Main Road  123 Street , 23 Colony",
    contact: "+0123456789",
    owner: "userDummyData",
    city: "New York",
    createdAt: "2025-04-10T06:22:11.663Z",
    updatedAt: "2025-04-10T06:22:11.663Z",
    __v: 0,
  };
  // Rooms Dummy Data
  const roomsDummyData = [
    {
      _id: "67f7647c197ac559e4089b96",
      hotel: hotelDummyData,
      roomType: "Double Bed",
      pricePerNight: 399,
      amenities: ["Room Service", "Mountain View", "Pool Access"],
      images: [roomImg1, roomImg2, roomImg3, roomImg4],
      isAvailable: true,
      createdAt: "2025-04-10T06:26:04.013Z",
      updatedAt: "2025-04-10T06:26:04.013Z",
      __v: 0,
    },
    {
      _id: "67f76452197ac559e4089b8e",
      hotel: hotelDummyData,
      roomType: "Double Bed",
      pricePerNight: 299,
      amenities: ["Room Service", "Mountain View", "Pool Access"],
      images: [roomImg2, roomImg3, roomImg4, roomImg1],
      isAvailable: true,
      createdAt: "2025-04-10T06:25:22.593Z",
      updatedAt: "2025-04-10T06:25:22.593Z",
      __v: 0,
    },
    {
      _id: "67f76406197ac559e4089b82",
      hotel: hotelDummyData,
      roomType: "Double Bed",
      pricePerNight: 249,
      amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
      images: [roomImg3, roomImg4, roomImg1, roomImg2],
      isAvailable: true,
      createdAt: "2025-04-10T06:24:06.285Z",
      updatedAt: "2025-04-10T06:24:06.285Z",
      __v: 0,
    },
    {
      _id: "67f763d8197ac559e4089b7a",
      hotel: hotelDummyData,
      roomType: "Single Bed",
      pricePerNight: 199,
      amenities: ["Free WiFi", "Room Service", "Pool Access"],
      images: [roomImg4, roomImg1, roomImg2, roomImg3],
      isAvailable: true,
      createdAt: "2025-04-10T06:23:20.252Z",
      updatedAt: "2025-04-10T06:23:20.252Z",
      __v: 0,
    },
  ];
  const navigate=useNavigate()

  return (
    <>
      <div className="bg-(--color-bg-section) py-12 text-center">
        <div className="text-center  px-8 md:px-28">
          <h2 className="text-center text-[30px] md:text-[40px] mb-5  font-extrabold">
            Featured Destination
          </h2>
          <p className="text-(--color-text-secondary) mb-5 md:mb-20 text-sm md:text-[16px] leading-4.5">
            Discover our handpicked selection of exceptional properties around
            the world, offering <br /> unparalleled luxury and unforgettable
            experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 md:px-28  pb-5">
          {roomsDummyData.map((room, index) => {
            return <HotelCard room={room} key={room._id} index={index} />;
          })}
        </div>
        <button onClick={()=>{
            navigate("/rooms") ; window.scrollTo({
                top:0,
                left:0,
                behavior:"smooth"
            })
        }} className="mt-5 rounded-md py-1  px-4 cursor-pointer text-(--color-primary) border text-sm font-medium">View All Destinations</button>
      </div>
    </>
  );
};

export default FeaturedDestination;
