import React, { useState } from 'react'
import { Modal, Input, Row, Col } from 'antd';
import { createChart } from '../WidgetAction';
import { useDispatch } from 'react-redux';

const ChartModal = ({ visible, viewModalVisible }) => {
  const dispatch = useDispatch()
  const initialState = { studentName: "", mark: 0, semester: "", subject: "", grade: 0, year: "" };

  const [datalist, setDatalist] = useState(initialState)

  const handleOk = () => {
    viewModalVisible(false);
    console.log(datalist)
    dispatch(createChart(datalist))
  };

  const handleCancel = () => {
    viewModalVisible(false);
  };

  return (
    <Modal title="Add chart Data" visible={visible} onOk={handleOk} onCancel={handleCancel}>
      <Row gutter={[16, 16]}>
        <Col span={12} >Student Name: <Input placeholder="Student Name" name="studentName" onChange={(e) => setDatalist({ ...datalist, studentName: e.target.value })} /></Col>
        <Col span={12} >Subject Name: <Input placeholder="Subject" name="subject" onChange={(e) => setDatalist({ ...datalist, subject: e.target.value })} /></Col>
        <Col span={12} >Mark: <Input placeholder="Mark" name="mark" onChange={(e) => setDatalist({ ...datalist, mark: e.target.value })} /></Col>
        <Col span={12} >semester: <Input placeholder="semester" name="semester" onChange={(e) => setDatalist({ ...datalist, semester: e.target.value })} /></Col>
        <Col span={12} >grade: <Input placeholder="grade" name="grade" onChange={(e) => setDatalist({ ...datalist, grade: e.target.value })} /></Col>
        <Col span={12} >Year: <Input placeholder="Year" name="year" onChange={(e) => setDatalist({ ...datalist, year: e.target.value })} /></Col>
      </Row>
    </Modal>
  )
}

export default ChartModal
