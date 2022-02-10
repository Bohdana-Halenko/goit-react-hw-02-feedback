import propTypes from 'prop-types';
// import s from './ButtonsFeedback.module.css';

const ButtonsFeedback = ({ options, onCountFeedback }) => (
    <div className='wrap'>
        {options.map(option => (
            <button
                key={option}
                className='button'
                type='button'
                name={option}
                onClick={onCountFeedback}
            >
                {option}
            </button>
        ))}
    </div>
);

export default ButtonsFeedback;


ButtonsFeedback.propTypes = {
    options: propTypes.array,
    option: propTypes.string,
    onCountFeedback: propTypes.func,
};