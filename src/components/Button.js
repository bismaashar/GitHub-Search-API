const Button = ({text , action}) => {

    return(
        <button onClick = {action} className = "btn">{text}</button>
    )
}

export default Button