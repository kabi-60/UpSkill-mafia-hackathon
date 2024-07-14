import React from "react";
import NavBar from "../components/NavBar";
import kabi from '../assets/images/team/kabi.png'
import mugilan from '../assets/images/team/mugilan.png'
import Footer from "../components/Footer";
import nambu from '../assets/images/team/nambu.png'

const teamMembers = [
  {
    id: 1,
    image: "https://ramana2130.github.io/portfolio/assets/mypic-d662ba56.jpg",
    name: "Ramana",
    profession: "BackEnd Developer",
  },
  {
    id: 2,
    image: "https://blank-09.github.io/assets/img/linkedin-profile-image.jpg",
    name: "Priyanshu ",
    profession: "BackEnd Developer",
  },
  {
    id: 3,
    image:kabi,
    name: "Kabilash",
    profession: "FrontEnd Developer",
  },
  {
    id: 4,
    image:mugilan,
    name: "Mugilan",
    profession: "FrontEnd Developer",
  },
  {
    id: 5,
    image: nambu,
    name: "Nambu Ajay",
    profession: "FrontEnd Developer",
  }
];

const Team = () => {
  return (
    <div class="bg-space  ">
        <div class="container mx-auto ">
    
    <div className="flex flex-col items-center justify-center px-5 py-8 text-slate-800 xl:px-10 xl:py-28 dark:text-slate-100">
      <div className="mb-16 text-center md:mb-32">
      <h2 className="mb-6 text-xl text-grey font-extrabold md:text-4xl lg:text-7xl">Our Team</h2>
        <p className="text-grey">
          We're fueled by a passion for our work and a belief in making a positive impact. Let our team's dedication and drive accelerate your success.
        </p>
      </div>
      <div className="flex flex-col md:ml-12 md:flex-row">
        {teamMembers.map((member) => (
          <div key={member.id}>
            <div
              className="group relative -mb-6 -ml-0 flex justify-start rounded-full border-4 border-white transition-all duration-300 ease-in-out hover:-translate-x-20 md:-mb-0 md:-ml-12 md:justify-center md:hover:-translate-x-0 md:hover:-translate-y-6 xl:border-8"
            >
              <div
                className="absolute left-6 top-7 w-full text-left opacity-0 transition-all duration-300 ease-linear group-hover:translate-x-24 group-hover:opacity-100 md:-top-12 md:left-0 md:text-center md:group-hover:-translate-y-6 md:group-hover:translate-x-0"
              >
                <h3 className="text-base text-grey font-semibold xl:text-xl">{member.name}</h3>
                <h4 className="text-nowrap text-grey text-sm xl:text-base">{member.profession}</h4>
              </div>
              <img
                src={member.image}
                className="size-28 rounded-full object-cover lg:size-32 xl:size-48 2xl:size-60"
                alt="Team Member"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  
    </div>
    </div>
  );
};

export default Team;
