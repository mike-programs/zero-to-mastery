import TestimonialProfile from "./TestimonialProfile"
import { courseListings } from "../Arrays"

import jiel from '../../assets/Home/images/jiel-picture.webp';
import part3 from '../../assets/Home/images/logo-1200.jpg';
import academyHome from '../../assets/Home/images/Academy_Home.webp'

export default function Resource1() {
    return (
        <>
            <h3 className="p-4 my-7 text-4xl lg:text-[2.5rem] font-bold lg:text-center">Everything You need to reach your career goals</h3>
            <div className="lg:flex lg:px-12">
                <div className="p-4 lg:basis-[150%] lg:pr-20">
                    <span className="font-bold">OUR ACADEMY</span>
                    <h3 className="text-3xl lg:text-[2.5rem] font-bold">learn in-demand skills, 24/7</h3>
                    <p className="text-[#373F49] text-lg font-light my-4">With 1,000+ hours of lessons available,
                        you'll be able to learn everything from coding to design to web3 to machine learning
                        and much more, all on your schedule.
                    </p>

                    <div className="flex flex-col text-secondary font-bold text-xl gap-2">
                        <span className="cursor-pointer hover:underline-offset-4 hover:underline">VIEW OUR COURSES &#62;</span>
                        <span className="cursor-pointer hover:underline-offset-4 hover:underline">VIEW OUR CAREER PATHS &#62;</span>
                        <div className="border border-b-2 border-secondary w-7 my-2 lg:my-5"></div>
                    </div>

                    <div>
                        <TestimonialProfile workplacePhoto={part3} personPhoto={jiel} personName="Jiel Selmani" testimonial='"ZTM has changed the trajectory of my life. The projects I was able to build from what I learned in ZTM courses is what got me my job."' />
                    </div>
                </div>

                <div className="p-4">
                    <div className="">
                        <img src={academyHome}></img>
                    </div>
                    <div>
                        <div className="text-secondary bg-teal py-6 px-12 rounded-3xl flex flex-col gap-2 lg:flex-row lg:justify-between lg:bg-white">

                            {courseListings.map((list, index) => (
                                <div className="flex gap-10 lg:flex-col" key={index}>
                                    <p className="text-[2.7rem] font-normal w-[20%] lg:text-6xl lg:mx-auto lg:w-auto">{list.number}</p>
                                    <div className="mt-auto">
                                        <div className="w-5 bg-black h-[.1rem] mb-2 lg:mx-auto lg:h-[.17rem] rounded lg:w-7"></div>
                                        <p className="text-black font-bold">{list.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
