import React, { useEffect, useState } from 'react'
import { Table, Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getChart } from './WidgetAction';

const Summary = () => {
  const dispatch = useDispatch();
  const chartData = useSelector((state) => state?.chart?.chartData?.data || []);
  let  outputArray = [];
  let  averageArray = [];

  useEffect(() => {
    dispatch(getChart());
  }, []);

  chartData.forEach(function(e) {
    if(!this[e.subject]) {
      this[e.subject] = { subject: e.subject, mark:  0, count:0}
       outputArray.push(this[e.subject]);
     }
    this[e.subject].mark += Number(e.mark);
    this[e.subject].count += 1;
  }, {});

  outputArray.map(ele => averageArray.push({ subject:ele.subject, mark:ele.mark, count:ele.count, average:ele.mark/ele.count}));

  const [state ,setState]= useState({filteredInfo: null,sortedInfo: null});

  const handleChange = (pagination, filters, sorter) => {
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  const clearFilters = () => {
    setState({ filteredInfo: null });
  };

  const clearAll = () => {
    setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  const setAgeSort = () => {
    setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'mark',
      },
    });
  };

  let { sortedInfo, filteredInfo } = state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    const filterSubject=averageArray.map(sub=>({ text: `${sub.subject}`, value: `${sub.subject}` }))

    const columns = [
      {
        title: 'Subject',
        dataIndex: 'subject',
        key: 'subject',
        filters: filterSubject,
        filteredValue: filteredInfo.subject || null,
        onFilter: (value, record) => record.subject.includes(value),
        sorter: (a, b) => a.subject.length - b.subject.length,
        sortOrder: sortedInfo.columnKey === 'subject' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Mark',
        dataIndex: 'mark',
        key: 'mark',
        sorter: (a, b) => a.mark - b.mark,
        sortOrder: sortedInfo.columnKey === 'mark' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Average',
        dataIndex: 'average',
        key: 'average',
        sorter: (a, b) => a.average.length - b.average.length,
        sortOrder: sortedInfo.columnKey === 'average' && sortedInfo.order,
        ellipsis: true,
      },
    ];
  return (
    <div className="summary">
      <div className="summary-title">Summary</div>
      <div className="summary-cart">
      <Space style={{ marginBottom: 16 }}>
          <Button onClick={setAgeSort}>Sort mark</Button>
          <Button onClick={clearFilters}>Clear filters</Button>
          <Button onClick={clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table columns={columns} dataSource={averageArray} onChange={handleChange} />
      </div>
    </div>
  )
}

export default Summary
