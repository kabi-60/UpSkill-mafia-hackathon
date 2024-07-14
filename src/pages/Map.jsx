import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useNavigate } from "react-router-dom";

const Card = ({ location, onSelectLocation }) => {
  const { name, description, position, photo } = location;
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/shopdetails");
  };

  return (
    <div>
      
    <div
      className="max-w-sm px-5  mx-5 w-full bg-space mb-10 shadow-xl rounded-xl duration-500 hover:scale-105 p-5 cursor-pointer"
      onClick={() => onSelectLocation(position)}
    >
      <div className="flex flex-col">
        <div className="relative h-62 w-full mb-3">
          <img
            src={photo}
            alt={name}
            className="w-full object-fill rounded-2xl"
          />
        </div>
        <div className="flex-auto justify-evenly">
          <div className="flex flex-wrap">
            <div className="w-full flex-none text-sm flex items-center text-gray-600">
              <span className="mr-2 text-grey flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {`${position[0].toFixed(4)}, ${position[1].toFixed(4)}`}
              </span>
            </div>
            <div className="flex items-center w-full justify-between min-w-0">
              <h2 className="text-xl font-bold mr-auto cursor-pointer text-grey">
                {name}
              </h2>
            </div>
          </div>
          <div className="text-2xl text-white font-semibold mt-1">
            <div className="mt-2 flex items-center justify-between">
              <p className="text-sm text-grey">{description}</p>
            </div>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                aria-hidden="true"
                className="h-5 w-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
          <div className="flex items-center justify-center mt-2">
            <button
              onClick={handleViewDetails}
              className="transition ease-in duration-300 inline-flex items-center text-sm font-bold mb-2 md:mb-0 bg-grey hover:bg-teal px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-[#00ADB5]"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

const Sidebar = ({ locations, onSelectLocation }) => {
  return (
    <div className="w-1/1 h-screen bg-gray-100 p-4 overflow-y-auto">
       <h1 className="text-5xl uppercase text-grey mb-5 text-center font-extrabold">
            Shops
          </h1>
      {locations.map((location, index) => (
        <Card
          key={index}
          location={location}
          onSelectLocation={onSelectLocation}
        />
      ))}
    </div>
  );
};

const Map = ({ position, selectedPosition }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedPosition) {
      map.setView(selectedPosition, 13);
    }
  }, [selectedPosition, map]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>You are here.</Popup>
      </Marker>
      {selectedPosition && (
        <Marker position={selectedPosition}>
          <Popup>Selected location.</Popup>
        </Marker>
      )}
    </>
  );
};

const MapPage = () => {
  const [position, setPosition] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const locations = [
    {
      name: "Chennai",
      description: "The capital city of Tamil Nadu",
      position: [13.0827, 80.2707],
      photo:
        "https://images.jdmagicbox.com/comp/chennai/37/044p7003937/catalogue/sri-kannan-waste-paper-furniture-mart-chennai-uwb1cztorx.jpg",
    },
    {
      name: "Madurai",
      description: "A major city in Tamil Nadu",
      position: [9.9252, 78.1198],
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojTU_VWKTHaIEf9PaBia_enHvjwJnUCTD9w&s",
    },
    {
      name: "Coimbatore",
      description: "Known as the Manchester of South India",
      position: [11.0168, 76.9558],
      photo:
        "https://content.jdmagicbox.com/comp/chennai/y6/044pxx44.xx44.150627192240.w7y6/catalogue/rajan-waste-paper-mart-selaiyur-chennai-scrap-buyers-tdqbla-250.jpg",
    },
    {
      name: "Tiruchirappalli",
      description: "Also known as Trichy",
      position: [10.7905, 78.7047],
      photo:
        "https://media.licdn.com/dms/image/D4D12AQE31WZYJkjMWQ/article-cover_image-shrink_600_2000/0/1699943010701?e=2147483647&v=beta&t=zeQvMOv6HIL72lKHmdCL6W5tcUJBqsSPzr3kTsnM2-8",
    },
    {
      name: "Salem",
      description: "A city in the North Central region of Tamil Nadu",
      position: [11.6643, 78.146],
      photo:
        "https://content.jdmagicbox.com/comp/chennai/z8/044pxx44.xx44.100805160607.t5z8/catalogue/sri-madasamy-waste-paper-mart-thiruvanmiyur-chennai-scrap-buyers-1ynk1yhfqh-250.jpg",
    },
  ];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  const handleSelectLocation = (position) => {
    setSelectedPosition(position);
  };

  return (
    <div className="flex max-h-screen w-full">
      <Sidebar locations={locations} onSelectLocation={handleSelectLocation} />
      <div className="flex-grow">
        {position ? (
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="h-screen w-full"
          >
            <Map position={position} selectedPosition={selectedPosition} />
          </MapContainer>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MapPage;
