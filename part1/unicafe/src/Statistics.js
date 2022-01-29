import StatisticLine from "./StatisticLine";

const Statistics = ({ good, bad, neutral }) => {
    if (good === 0 && bad === 0) return <div>No feedback given</div>
    const all = good + bad + neutral;
    const avg = (good - bad) / all;
    const goodPer = `${((good / all) * 100)} %`;

    return (
        <table>
            <tbody>
                <StatisticLine statistic="good" data={good} />
                <StatisticLine statistic="neutral" data={neutral} />
                <StatisticLine statistic="bad" data={bad} />
                <StatisticLine statistic="all" data={all} />
                <StatisticLine statistic="average" data={avg} />
                <StatisticLine statistic="positive" data={goodPer} />
            </tbody>
        </table>
    )
}

export default Statistics;