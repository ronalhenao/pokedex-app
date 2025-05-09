interface Props {
    content: string;
    backgroundSelected: string;
}

export default function Title({ content, backgroundSelected }: Props) {
    return (
        <h2 className='text-center font-semibold text-lg mb-4' style={{ color: backgroundSelected }}>
            {content}
        </h2>
    )
}
