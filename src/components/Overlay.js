export default function Overlay ({color,opacity}) {
    return (
        <div className={`absolute rounded-2xl top-0 left-0 bg-opacity-${opacity} h-full w-full bg-${color}`}></div>
    )
}