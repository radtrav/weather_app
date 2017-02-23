import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = ({ data, color }) => {
  return (
      <Sparklines svgHeight={120} svgWidth={180} data={data} >
        <SparklinesLine color={color} />
      </Sparklines>
  );
};

export default Chart;
