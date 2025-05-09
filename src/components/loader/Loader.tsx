interface Props {
    color: string;
    size?: number;
}

export default function Loader({ size, color }: Props) {
    return (
        <span
            style={{
                width: size,
                height: size,
                borderColor: color,
            }}
            className=''
        />
    )
}
