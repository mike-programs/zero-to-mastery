interface PrimaryProp {
    content: string;
    paddingX: string;
    paddingY: string;
    fontSize: string;
    fontWeight: string;
}


export default function Primary({ content, paddingX, paddingY, fontWeight, fontSize }: PrimaryProp) {
    return (
        <div>
            <button className={`rounded-full text-white bg-primary hover:bg-[#BD1150] border border-primary ${fontSize} ${fontWeight} ${paddingY} ${paddingX}`}>
                {content}
            </button>
        </div>
    )
}