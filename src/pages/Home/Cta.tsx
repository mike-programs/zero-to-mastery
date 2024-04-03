import TealButton from '../../components/Buttons/TealButton'


export default function Cta() {
    return (
        <div className="bg-secondary p-10 rounded-3xl flex items-center justify-center mt-2 lg:w-[40%]">
            <div>
                <h3 className="text-4xl text-lightBlue font-bold my-2">Sound like you?</h3>
                <p className="text-white text-lg font-extralight mb-5">
                    If so, take our Tech Career Path Quiz now to get a <span className='font-bold'>personalized, step-by-step roadmap</span> to achieving your dream career
                </p>

                <TealButton paddingX='px-3' paddingY='py-2' content='CREATE MY CAREER PATH' />
            </div>
        </div>
    )
}
