import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    const buttonStyle = {
        display: 'flex',
        margin: 'auto',
        alignSelf: 'center',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        minWidth: '15px',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: '15px',
        fontFamily: 'inherit',
        backgroundColor: color
    }

    return (<button
        onClick={onClick}
        className='btn'
        style= {buttonStyle}
    >{text}
    </button>)
};

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button;
