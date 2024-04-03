import { logos } from "../pages/Arrays"

export default function LogoGrid() {
    return (
        <>
            {
                logos.map((image, index) => (
                    <div className="p-1 bg-white shadow-xl flex justify-center rounded-xl lg:w-20 lg:p-2">
                        <img key={index} src={image.src} alt={image.alt} className="w-12 lg:w-16 rounded-xl" />
                    </div>
                ))}
        </>
    )
}
