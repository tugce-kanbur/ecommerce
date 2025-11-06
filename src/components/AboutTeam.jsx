import React from 'react'
import member1 from "../assets/team1user1.jpg";
import member2 from "../assets/team1user2.jpg";
import member3 from "../assets/team1user3.jpg";
import { Link } from "react-router-dom";

function AboutTeam() {
    const members = [
        { img: member1, name: "Username", job: "Profession" },
        { img: member2, name: "Username", job: "Profession" },
        { img: member3, name: "Username", job: "Profession" },
    ];
    return (
        <div>
            <section className="w-full bg-white max-w-[1440px] mx-auto h-[826px] py-[80px]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-[181px] text-center">
                    <h2 className="font-montserrat font-bold text-[40px] leading-[80px] tracking-[0.2px] text-[#252B42]">
                        Meet Our Team
                    </h2>
                    <p className="font-montserrat text-[14px] leading-[24px] text-[#737373] max-w-[530px] mx-auto mt-4">
                        Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics
                    </p>
                    <div className="grid md:grid-cols-3 gap-[60px] mt-[60px] place-items-center">
                        {members.map((member, i) => (
                            <Link
                                key={i}
                                to="/team"
                                className="flex flex-col items-center cursor-pointer group relative"
                            >
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-[316px] h-[231px] object-cover group-hover:opacity-90 transition"
                                />
                                <h5 className="font-montserrat font-bold text-[20px] mt-4">{member.name}</h5>
                                <h6 className="font-montserrat text-[14px] text-[#737373]">{member.job}</h6>

                                <div className="flex items-center gap-4 absolute pt-80">
                                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                        <img src="/src/assets/Vector12.png" alt="fb" className="w-5 h-5" />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                        <img src="/src/assets/Vector13.png" alt="ig" className="w-5 h-5" />
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                        <img src="/src/assets/Vector14.png" alt="tw" className="w-5 h-5" />
                                    </a>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutTeam
