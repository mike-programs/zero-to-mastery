import Card from "./Card";
import HeroImage from "./HeroImage";
import LandingPage from './LandingPage';


export default function Home() {
    return (


        <div className="text-center bg-[white] relative md:py-24">

            <LandingPage />
            <HeroImage />
            <div className="px-4">
                <p className="text-left font-bold text-4xl lg:text-center lg:px-56 lg:text-[2.5rem]">Our students are getting hired by top companies. We can help you too.</p>
            </div>

            <div>
                The infinite slider would go here.
            </div>

            <Card />

        </div>
    )
}
