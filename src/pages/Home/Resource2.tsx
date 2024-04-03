import TestimonialProfile from "./TestimonialProfile"

import Olga from '../../assets/Home/images/olga.webp';
import tesla from '../../assets/Home/images/tesla-9.svg';
import phone from '../../assets/Home/images/newPhone.webp'

export default function Resource2() {
    return (
        <>
            <div className="lg:flex lg:px-12 lg:flex-row-reverse lg:my-28">
                <div className="p-4 lg:basis-[100%]">
                    <span className="font-bold">OUR COMMUNITY</span>
                    <h3 className="text-3xl lg:text-[2.5rem] font-bold">Learn together, grow together</h3>
                    <p className="text-[#373F49] text-lg font-light my-4">Learning alone is hard. That's why you'll be supported by our community of 400,000+ students, alumni, mentors, and instructors. We're here with you every step of the way to ensure you reach your goals and help you take your skills, confidence, and career to the next level.
                    </p>

                    <div className="flex flex-col text-secondary font-bold text-xl gap-2">
                        <span className="cursor-pointer hover:underline-offset-4 hover:underline">CHECK OUT OUR COMMUNITY &#62;</span>
                        <span className="cursor-pointer hover:underline-offset-4 hover:underline">TOUR OUR DISCORD COMMUNITY &#62;</span>
                        <div className="border border-b-2 border-secondary w-7 my-2 lg:my-5"></div>
                    </div>

                    <div>
                        <TestimonialProfile workplacePhoto={tesla} personPhoto={Olga} personName="Olga Fomin" testimonial='"I would recommend ZTM courses to anyone who wants to learn web dev inside and out. The Jr to Sr course helped me land my job at Tesla!."' />
                    </div>
                </div>

                <div className="p-4 lg:w-[100%]">
                    <div className="p-16 lg:p-0">
                        <img src={phone}></img>
                    </div>
                </div>
            </div>
        </>
    )
}
