import React from 'react';
import Section from './Section/Section';
import './Feedback.module.css';


class Feedback extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    countGood = () => {
        this.setState(prevState => ({
        neutral: prevState.good + 1,
        }));
    };

    countNeutral = () => {
        this.setState(prevState => ({
        neutral: prevState.neutral + 1,
        }));
    };

    countBad = () => {
        this.setState(prevState => ({
        neutral: prevState.bad + 1,
        }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
    }


    render() {
        const { good, neutral, bad } = this.state;
        return (
            <section className='feedbackSection'>
                <Section title="Please leave feedback!">

                </Section>
            </section>
        )
    }
}

export default Feedback;