
interface Props {
    personPhoto: string,
    workplacePhoto: string,
    personName: string,
    testimonial: string,

}


export default function TestimonialProfile(props: Props) {
    return (
        <>
            <div className="flex p-4">
                <img src={props.personPhoto} alt="jiel-photo" className="w-20 object-contain rounded-full"></img>
                <img src={props.workplacePhoto} alt="jiel-photo" className="w-20 object-contain rounded-full shadow-2xl relative right-7 bg-white p-2"></img>
            </div>
            <div className="font-bold py-4 text-lg">
                <h4>{props.personName}</h4>
                <p className="font-thin mb-2">Software Engineer</p>
                <p>{props.testimonial}</p>
            </div>
        </>
    )
}
