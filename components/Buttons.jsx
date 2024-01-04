export const StandardButton = ({ children, onclick }) => {
    return (
        <button className="bg-orange-300 active:scale-110 border-orange-600 border-2 w-fit px-8 py-2 rounded-full" onClick={onclick}>{children}</button>
    )
}