interface SecondaryProp {
    content: string;
    paddingX: string;
    paddingY: string;
}

export default function Secondary({ content , paddingX, paddingY }: SecondaryProp) {
    return (
        <div>
            <button className={`border border-primary ${paddingX} ${paddingY} text-primary text-base font-medium rounded-full hover:text-white hover:bg-primary `}>
                {content}
            </button>
        </div>
    )
}