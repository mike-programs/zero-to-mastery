import portforlio from '../../assets/Home/images/Portfolio.webp';
import promotion from '../../assets/Home/images/Promotion.webp';
import workanywhere from '../../assets/Home/images/WorkAnywhere.webp';
import careerpath from '../../assets/Home/images/Career_Path.webp';

export default function Card() {

  const cards = [{
    image: portforlio,
    title: "Build a portfolio of projects that make you stand out",
    content: "The projects we'll help you build are professional, real-world apps that will make your portfolio stand out and impress potential employers."
  },

  {
    image: careerpath,
    title: "Get hired, in record time",
    content: "Stop wasting time on endless tutorials. Our step-by-step Career Paths give you an exact roadmap to go from any background to getting hired. No CS degree required."
  },
  {
    image: promotion,
    title: "Get promoted, become top 10%",
    content: "Our intermediate and advanced courses help you continue to build your skills so that you can land senior roles and be recognized as a top tech professional."
  },
  {
    image: workanywhere,
    title: "Gain the freedom to work anytime, anywhere",
    content: "We can give you a curated roadmap to build your dream career and become your own boss, no matter your experience level."
  }
  ]

  return (
    <>
      <section className="bg-secondary text-white p-4 text-left md:px-10 lg:px-20">
        <div className='lg:text-center'>
          <p className="font-bold my-6 text-4xl lg:text-[2.5rem]">Benefits of joining Zero To Mastery</p>
          <p className="text-lg font-thin lg:px-60">We help you at eveery step of your learning and career jounery. From beginner to
            getting hired to advancing your skills and having a successful, rewarding career.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {
            cards.map((card, index) => (
              <div key={index} className='text-xl my-2 xl:flex'>
                <div className='w-56'>
                  <img src={card.image} alt="images" />
                </div>
                <div>
                  <h1 className='font-bold my-3 lg:my-0'>{card.title}</h1>
                  <p className='text-lg font-light'>{card.content}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}
