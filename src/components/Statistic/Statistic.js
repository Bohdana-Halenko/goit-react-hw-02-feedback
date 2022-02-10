import propTypes from 'prop-types';
// import s from './Statistic.module.css';

const Statistic = ({
    options,
    onCountTotalFeedback,
    onCountPercentagePositiveFeedback,
}) => (
        <ul>
            <li>
                <p>Good: {options.good}</p>
            </li>
            <li>
                <p>Neutral: {options.neutral}</p>
            </li>
            <li>
                <p>Bad: {options.bad}</p>
            </li>
            <li>
                <p>Total: {onCountTotalFeedback}</p>
            </li>
            <li>
                <p>Positive feedback: {onCountPercentagePositiveFeedback}%</p>
            </li>
        </ul>
);

export default Statistic;

Statistic.propTypes = {
    // options: propTypes.number,
    onCountTotalFeedback: propTypes.number,
    onCountPercentagePositiveFeedback: propTypes.number,
};
