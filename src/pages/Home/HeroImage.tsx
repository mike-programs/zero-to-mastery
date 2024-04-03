import hero from '../../assets/Home/images/Hero-Main-Desktop.webp';
import leftImage from '../../assets/Home/images/Hero-Left.webp';
import rightImage from '../../assets/Home/images/Hero-Right.webp';
import LogoGrid from '../../components/LogoGrid'

export default function HeroImage() {
    return (
        <>
            <div className="p-4 xl:p-20  bg-gradient-to-b from-white to-[#F6F6FB] ">
                <div className="relative">
                    <img alt="hero-image" src={hero} className="w-[87%] mx-auto rounded-2xl xl:w-[80%]" />
                    <img alt="hero-image" src={leftImage} className="w-24 absolute bottom-5 min-[550px]:w-[30%]" />
                    <img alt="hero-image" src={rightImage} className="w-24 absolute top-12 right-0 min-[550px]:w-[30%] xl:top-44" />
                </div>
                <div className="flex flex-row flex-wrap min-[750px]:justify-center my-8 gap-4 mb-12 lg:gap-0 lg:justify-between" >
                    <LogoGrid />
                </div>
            </div>
        </>
    )
}
