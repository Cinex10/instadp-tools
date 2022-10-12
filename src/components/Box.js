const Box = (props) => {
    return (
        <div className="box">
            <h1>{props.icon}</h1>
            <h1>{props.label}</h1>
        </div>
    );
};

export default Box;