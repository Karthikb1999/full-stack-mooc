const StatisticLine = ({ statistic, data }) => {
    return (
        <tr>
            <td>{statistic}</td>
            <td>{data}</td>
        </tr>
    )
}
export default StatisticLine;