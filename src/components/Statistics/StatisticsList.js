import { StatisticsListItem } from "./StatisticsListItem";

export const StatisticsList = ({stats}) => {
    return (<ul class="stat-list">
        {stats.map(doc => (
            <li key={doc.id} class="item">
                <StatisticsListItem doc={doc}/>
       </li>
   ))}
  </ul>)
};