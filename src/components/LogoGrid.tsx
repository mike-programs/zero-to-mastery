import jsLogo from '../assets/Home/images/JS.webp'
import reactLogo from '../assets/Home/images/React.webp';
import nodeLogo from '../assets/Home/images/Node.webp';
import etheriumLogo from '../assets/Home/images/Ethereum.svg';
import pythonLogo from '../assets/Home/images/Python.webp';
import csharpLogo from '../assets/home/images/c-.svg'
import tensorflowLogo from '../assets/Home/images/TensorFlow.webp';
import figma from '../assets/Home/images/Figma.webp';
import rust from '../assets/Home/images/Rust.webp';
import aws from '../assets/Home/images/AWS.webp';
import more from '../assets/Home/images/more.svg'



export default function LogoGrid() {
    const images = [{
        src: jsLogo,
        alt: 'Java-Script logo'
    },
    {
        src: reactLogo,
        alt: 'React logo'
    },
    {
        src: nodeLogo,
        alt: 'Node logo'
    },
    {
        src: etheriumLogo,
        alt: 'etherium logo'
    },
    {
        src: pythonLogo,
        alt: 'Python logo'
    },
    {
        src: csharpLogo,
        alt: 'C-sharp logo'
    },
    {
        src: tensorflowLogo,
        alt: 'Tensor Flow logo'
    },
    {
        src: figma,
        alt: 'Figma logo'
    },
    {
        src: rust,
        alt: 'Rust logo'
    },
    {
        src: aws,
        alt: 'AWS logo'
    },
    {
        src: more,
        alt: 'More button'
    }]

    return (
        <>
            {
                images.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} className="w-20 rounded-xl" />
                ))}
        </>
    )
}
