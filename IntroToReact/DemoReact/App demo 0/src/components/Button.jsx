const Button = () => {
    const handleClick = () => {
        alert("Here's your alert!");
    }

    return (
        <div>
            <button onClick={handleClick}>Click for an alert</button>
        </div>
    )
}

export default Button;

