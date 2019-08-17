import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import withStyle from './Chart.style';

const buildOptions = ({ series, categories, onClick }) => ({
  title: {
    text: ''
  },
  chart: {
    type: 'bar'
  },
  xAxis: {
    categories,
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Units',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  series: [
    {
      data: series
    }
  ],
  plotOptions: {
    series: {
      cursor: 'pointer',
      point: {
        events: {
          click: function(ev) {
            onClick(ev.point.category);
          }
        }
      }
    }
  }
});

const Chart = ({ className, categories, series, onClick }) => (
  <div className={className}>
    <HighchartsReact
      highcharts={Highcharts}
      options={buildOptions({ series, categories, onClick })}
    />
  </div>
);

Chart.defaultProps = {
  onClick: () => {}
};

export default withStyle(Chart);
