import React, { useEffect, useState } from 'react';
import { DualAxes, MultiView } from '@ant-design/charts';
import { useDispatch, useSelector } from 'react-redux';
import { getChart } from './WidgetAction';
import ChartModal from './modal/ChartModal';

const Chart = () => {
  const dispatch = useDispatch();
  const chartData = useSelector((state) => state?.chart?.chartData?.data || []);
  const [visible, setVisible] = useState(false);
  
  const viewModalVisible = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    dispatch(getChart());
  }, []);

  let  outputArray = [];
  let  averageArray = [];
    
  chartData.forEach(function(e) {
    if(!this[e.subject]) {
      this[e.subject] = { subject: e.subject, mark:  0, count:0}
       outputArray.push(this[e.subject]);
     }
    this[e.subject].mark += Number(e.mark);
    this[e.subject].count += 1;
  }, {});

  outputArray.map(ele => averageArray.push({ subject:ele.subject, mark:ele.mark, count:ele.count, average:ele.mark/ele.count}));

  var config = {
    data: [averageArray, averageArray],
    xField: 'subject',
    yField: ['mark', 'average'],
    geometryOptions: [
      { geometry: 'column' },
      {
        geometry: 'line',
        lineStyle: { lineWidth: 2 },
      },
    ],
  };

  return (
    <div className="chart">
      <div className="chart-title"><span className="chart-add" onClick={()=>setVisible(true)}>+ &nbsp;</span>Chart</div>
      <div className="chart-cart">
        <div className="chart-head">Student marks and Average marks</div>
        <DualAxes {...config} />
      </div>
      <ChartModal
        visible={visible}
        viewModalVisible={viewModalVisible}
      />
    </div>
  );
};

export default Chart;