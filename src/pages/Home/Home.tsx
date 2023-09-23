
import Primary from "../../components/Buttons/Primary";
import hero from '../../assets/Home/images/Hero-Main-Desktop.webp';
import leftImage from '../../assets/Home/images/Hero-Left.webp';
import rightImage from '../../assets/Home/images/Hero-Right.webp';
import LogoGrid from '../../components/LogoGrid'
import Card from "./Card";


export default function Home() {
    return (


        <div className="text-center bg-[white] relative md:py-24">
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

            <div className="p-4 xl:p-20">
                <div className="relative">
                    <img alt="hero-image" src={hero} className="w-[87%] mx-auto rounded-2xl xl:w-[80%]" />
                    <img alt="hero-image" src={leftImage} className="w-24 absolute bottom-5 min-[550px]:w-[30%]" />
                    <img alt="hero-image" src={rightImage} className="w-24 absolute top-12 right-0 min-[550px]:w-[30%] xl:top-44" />
                </div>

                <div className="grid grid-cols-5 my-8 gap-4 md:grid-cols-7 lg:grid-cols-11">
                    <LogoGrid />
                </div>
            </div>

            <div className="px-4">
                <p className="text-left font-bold text-4xl">Our students are getting hired by top companies. We can help you too.</p>
            </div>

            <div>
                The infinite slider would go here.
            </div>            

            <Card />  

        </div>
    )
}
