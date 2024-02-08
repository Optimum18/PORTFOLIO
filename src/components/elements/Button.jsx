
const Button = ({ title , style}) => {

    return (
        <button className={`py-2 w-fit px-6 rounded-lg ${style}`}>
            {title}
        </button>
    )
}

export default Button