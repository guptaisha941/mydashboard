import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import Chart from 'chart.js/auto';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './FacebookDashboard.css'; 

const FacebookDashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  let myLineChart, myPieChart, myBarChart;

  useEffect(() => {
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    const ctxBar = document.getElementById('barChart').getContext('2d');

    // Dummy data for charts
    const lineChartData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Line Chart',
        data: [10, 20, 15, 25, 18],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 3,
        fill: false,
      }]
    };

    const pieChartData = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        data: [30, 50, 20],
        backgroundColor: ['red', 'blue', 'yellow'],
        borderWidth: 1,
      }]
    };

    const barChartData = {
      labels: ['Hindi', 'English', 'Urdu', 'Tamil', 'Italian'],
      datasets: [{
        label: 'Bar Chart',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      }]
    };

    myLineChart = new Chart(ctxLine, {
      type: 'line',
      data: lineChartData,
    });

    myPieChart = new Chart(ctxPie, {
      type: 'pie',
      data: pieChartData,
    });

    myBarChart = new Chart(ctxBar, {
      type: 'bar',
      data: barChartData,
    });

    return () => {
      myLineChart.destroy();
      myPieChart.destroy();
      myBarChart.destroy();
    };
  }, []);

  const TopBar = () => (
    <div className="top-bar">
      <Container>
        <Row>
          <Col>
            <Navbar.Brand>
              {/* <img
                src="/user-profile-icon.png" // Replace with your user profile icon path
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="User Profile Icon"
              /> */}
              <span className="user-profile-text">User Profile</span>
            </Navbar.Brand>
          </Col>
        </Row>
      </Container>
    </div>
  );
  
  return (
    <div className="dashboard-background">
       <TopBar />

       <div className="sidebar">
      {/* Facebook and LinkedIn Dashboard links */}
      <a href="#">Facebook</a>
      <a href="#">LinkedIn</a>
    </div>

    <div className="main-content">
      <div className='center-container'>
        <Row className="mt-4">
                
          <Col xs={10}>
          <div style={{ color:'white',  fontSize: '40px', fontWeight: 'bold', textAlign: 'center' }}>Facebook Dashboard</div>


            <div className="date-picker-container">
              
              {/* Date Range Picker */}
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
              <span className="date-picker-text"> To </span>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </div>

            <Button variant="secondary" className="rounded-pill mx-1" >Today</Button>
              <Button variant="secondary" className="rounded-pill mx-1" >Yesterday</Button>
              <Button variant="secondary" className="rounded-pill mx-1" >Week</Button>

            <div className="metric-cards-container">
              <MetricCard title="Followers" icon="👤" value="5,000" />
              <MetricCard title="Views" icon="👀" value="20,000" />
              <MetricCard title="Total Posts" icon="📝" value="50" />
              <MetricCard title="Clicks" icon="🖱️" value="1,000" />
            </div>

            <div className="chart-cards-container">
              <ChartCard title="Followers Growth" chartId="lineChart" />
              <ChartCard title="Followers by Country" chartId="pieChart" />
              <ChartCard title="Followers by Language" chartId="barChart" />
            </div>
          </Col>
        </Row>
      </div>
      </div>
    </div>
  );
};

const MetricCard = ({ title, icon, value }) => (
  <div className="metric-card">
    <div className="metric-icon">{icon}</div>
    <h3 className="metric-title">{title}</h3>
    <p className="metric-value">{value}</p>
  </div>
);

const ChartCard = ({ title, chartId }) => (
  <div className="chart-card">
    <h3 className="chart-title">{title}</h3>
    <canvas id={chartId} width="400" height="300"></canvas>
  </div>
);

export default FacebookDashboard;
