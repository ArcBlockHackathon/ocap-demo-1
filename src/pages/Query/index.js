import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactEcharts from 'echarts-for-react';

import { getPreMonth, formatDate, getAllDate } from '../../libs/date';

import Layout from '../../components/Layout';
import tokenData from '../../token.json';

import './style.css';

class QueryDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: null,
      dateIndex: 1,
      option: null,
      dates: []
    };
  }

  componentDidMount() {
    let startDate = new Date(getPreMonth(formatDate(new Date())));
    let endDate = new Date();
    let dates = getAllDate(startDate, endDate);

    this.setState({
      date: dates[0],
      dates: dates,
      option: this.getOption(tokenData)
    });
  }

  processData(rawData) {
    let data = [];

    for (let i in rawData) {
      data.push({
        name: rawData[i].name,
        value: rawData[i].total,
        token: rawData[i].token
      });
    }

    return data;
  }

  getOption(rawData) {
    let data = this.processData(rawData);

    let option = {
      tooltip: {
        formatter: function (params, ticket, callback) {
          return `name：${params.name}<br/> total：${params.value} <br/> token：${params.data.token}%`;
        }
      },
      series: [{
        name: 'option',
        type: 'treemap',
        visibleMin: 300,
        data: data,
        leafDepth: 2,
        levels: [
          {
            itemStyle: {
              normal: {
                borderColor: '#555',
                borderWidth: 1,
                gapWidth: 1
              }
            }
          },
          {
            colorSaturation: [0.3, 0.6],
            itemStyle: {
              normal: {
                borderColorSaturation: 0.7,
                gapWidth: 2,
                borderWidth: 2
              }
            }
          },
          {
            colorSaturation: [0.3, 0.5],
            itemStyle: {
              normal: {
                borderColorSaturation: 0.6,
                gapWidth: 1
              }
            }
          },
          {
            colorSaturation: [0.3, 0.5]
          }
        ]
      }]
    };

    return option;
  }

  changeDate(e) {
    let rawData = tokenData;

    for (let i in rawData) {
      rawData[i].total = parseInt(Math.random() * 100);
    }

    this.setState({
      dateIndex: e.target.value,
      date: this.state.dates[e.target.value - 1],
      option: this.getOption(rawData)
    });
  }

  render() {
    const { option, date, dateIndex } = this.state;

    return (
      <Layout>
        <h2>BlockChain</h2>
        <div style={{ marginTop: '10px', marginBottom: '10px'}}>
          <input type="range" step="1" value={dateIndex} min="1" max="31" onChange={ (e) => this.changeDate(e) }/>
          <span style={{ marginLeft: '10px' }}>{date}</span>
        </div>
        {option && <ReactEcharts
          option={option}
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"} />}
      </Layout>
    );
  }
}

export default withRouter(QueryDemo);
