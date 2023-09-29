import { cards } from "../Arrays"
import Cta from "./Cta"

export default function Card() {

  return (
    <>
      <section className="bg-secondary text-white text-left ">
        <div className="p-4 md:px-10 lg:px-20 mb-4">
          <div className='lg:text-center mb-10'>
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
        </div>


        <div className="text-black bg-white rounded-t-3xl p-4">
          <h3 className="mt-5 text-4xl lg:text-[2.5rem] font-bold">
            We can help you build your dream career, <span className="text-secondary">even if ...</span>
          </h3>
          <ul className="list-disc p-5 text-xl font-thin marker:text-secondary flex flex-col gap-4">
            <li>You're <span className="list-style">completely new</span> to technology and have never written a line of code before!</li>
            <li>You've <span className="list-style">struggled</span> with coding in the past.</li>
            <li>You've wondered "am I <span className="list-style">too old</span> to start something new?"</li>
            <li>You're completely <span className="list-style">overwhelmed</span> and have no idea where to start.</li>
          </ul>

          <Cta />
        </div>
      </section>
    </>
  )
}
