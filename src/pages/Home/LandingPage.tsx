import Primary from "../../components/Buttons/Primary";

export default function () {
  return (
    <>
    <div className="p-4">
                <div className="md:px-32">
                    <p className="text-[2.7rem] font-bold md:text-[3.9rem]">Learn in-demand skills.</p>
                    <p className="text-[2.7rem] font-bold text-primary md:text-[3.9rem]">Get Hired.</p>
                </div>

                <div className="my-5">
                    <p className="text-[#373F49] text-xl font-thin md:text-3xl md:px-32">
                        The most efficient and supportive way for you to learn in-demand
                        skills, get hired, and advance your career.</p>
                </div>

                <div className="md:flex md:justify-center md:gap-5 md:px-20 md:py-6">
                    <Primary content="SEE ALL COURSES" paddingX="px-20" paddingY="py-6 md:py-5" fontWeight="font-semibold" fontSize="text-lg" />
                    <p className="text-primary text-lg font-medium my-4 hover:underline underline-offset-4 hover:cursor-pointer">OR TAKE OUR CAREER QUIZ</p>
                </div>
            </div>
    </>
  )
}
