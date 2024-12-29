import PeopleCard from "@/components/PeopleCard";
import React from "react";
import austin from "../assets/people/Austin.jpg";
import hanan from "../assets/people/Hanan.jpg";
import kailash from "../assets/people/Kailash.jpg";
import nikhil from "../assets/people/Nikhil.jpg";
import seema from "../assets/people/Seema.jpg";
import venu from "../assets/people/Venu.jpg";
import karthik from "../assets/people/Karthik.jpg";

const teamMembers = [
  {
    name: "Nikhil Kamath",
    designation: "Co-founder & CFO",
    image: nikhil,
  },
  {
    name: "Dr. Kailash Nadh",
    designation: "CTO",
    image: kailash,
  },
  {
    name: "Venu Madhav",
    designation: "COO",
    image: venu,
  },
  {
    name: "Hanan Delvi",
    designation: "CCO",
    image: hanan,
  },
  {
    name: "Seema Patil",
    designation: "Director",
    image: seema,
  },
  {
    name: "Karthik Rangappa",
    designation: "Chief of Education",
    image: karthik,
  },
  {
    name: "Austin Prakesh",
    designation: "Director Strategy",
    image: austin,
  },
];

const About = () => {
  return (
    <div>
      <div className="w-3/4 container mx-auto">
        <section id="team">
          <div className="flex flex-col md:flex-row items-center justify-start gap-1 flex-wrap">
            {teamMembers.map((member, index) => {
              return (
                
                <PeopleCard
                  key={index}
                  profileImage={member.image}
                  name={member.name}
                  designation={member.designation}
                />
  
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
