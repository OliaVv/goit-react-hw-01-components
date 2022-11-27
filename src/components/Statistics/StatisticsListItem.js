import PropTypes from 'prop-types';

export const StatisticsListItem = ({doc: {label, percentage}}) => {
    return <>
          <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>  
    </>
}

StatisticsListItem.propTypes = {
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
};