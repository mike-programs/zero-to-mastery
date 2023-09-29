import { logos } from "../pages/Arrays"

export default function LogoGrid() {
    return (
        <>
            {
                logos.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} className="w-20 rounded-xl" />
                ))}
        </>
    )
}
