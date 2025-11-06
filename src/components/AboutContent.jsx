import React from 'react'

function AboutContent() {
    return (
        <div>
            <section className="w-full max-w-[1440px] mx-auto h-[236px] bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-[181px] py-[1px] grid md:grid-cols-2 gap-[60px] items-center">
                    <div className="flex flex-col gap-[10px]">
                        <h6 className="text-[#E74040] font-montserrat font-normal text-[14px]">
                            Problems trying
                        </h6>
                        <p className="text-[#252B42] font-montserrat font-bold text-[24px] leading-[32px]">
                            Met minim Mollie non desert <br />Alamo est sit cliquey dolor do <br />met sent.
                        </p>
                    </div>
                    <div>
                        <p className="text-[#737373] font-montserrat text-[16px] leading-[24px]">
                            Problems trying to resolve the conflict between the two major realms of
                            Classical physics: Newtonian mechanics
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutContent
