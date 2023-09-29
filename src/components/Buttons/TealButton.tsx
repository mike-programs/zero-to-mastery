interface SecondaryProp {
    content: string;
    paddingX: string;
    paddingY: string;
}

export default function Secondary({ content, paddingX, paddingY }: SecondaryProp) {
    return (
        <div>
            <button className={`border border-white ${paddingX} ${paddingY} text-white text-base font-medium rounded-full hover:text-secondary hover:border-lightBlue hover:bg-lightBlue `}>
                {content}
            </button>
        </div>
    )
}