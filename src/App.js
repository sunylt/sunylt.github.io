import React, { Component, Fragment } from 'react';
import {  Radio } from 'antd';
//import logo from './logo.svg';

import './App.css';

//const { TabPane } = Tabs;

//const DEFAULT_AMOUNT = 28000 + 46400

const TOKENS = {
  50497: 'AE',
  3756934: 'LEND',
  9490820: 'KEY',
  9622452: 'LET',
  49681: 'SNT',
  1712771: 'FUEL',
  8520497: 'MTX',
  6771938: 'DEW',
  49653: 'BTC',
}
const RED_COLOR = '#ea2870'
const GREEN_COLOR = '#70a700'

class App extends Component {

  state = {
    isLoading: false,
    priceList: {},
    records: [],
    mode: localStorage.getItem('tabCurrent') || 'a'
  }

  componentDidMount() {
    const  _this = this
    const data = localStorage.getItem('data');
    const priceList = localStorage.getItem('priceList')

    if (data) {
      this.setState({
        records: JSON.parse(data)
      })
    }
    if (priceList) {
      this.setState({
        priceList: JSON.parse(priceList)
      })
    }
    this.fetchExchangeRecords().then(res => {
      const data = res.data
      localStorage.setItem('data', JSON.stringify(data))
      _this.setState({
        records: data
      })
      _this.syncTicker()
    })

    //this.login()
    this.handleKeyboard()
  }

  handleKeyboard(){
    const _this = this
    document.body.addEventListener('keydown', function(e) {
      if (e.which === 16) {
        _this.multiAction = true
      }
    })
    document.body.addEventListener('keyup', function(e) {
      if (e.which === 16) {
        _this.multiAction = false
      }
    })
  }

  syncTicker(ids) {
    const _this = this
    const ws = new WebSocket('wss://ws.cn-east.mytokenapi.com/ticker')
    ws.onmessage = function(e) {
      const data = JSON.parse(e.data)
      const info = data.data
      if (info && info.tick) {
        const priceList = _this.state.priceList
        priceList[info.tick.symbol] = {
          price: info.tick.price,
          change: info.tick.percent_change_24h
        }
        _this.setState({
          priceList
        })
        localStorage.setItem('priceList', JSON.stringify(priceList))
      }
    }
    ws.onopen = function() {
      ws.send(
        JSON.stringify({
          event:"ticker",
          params:{
            ids: Object.keys(TOKENS).map(id => +id)
          }
        })
      )
    }
  }

  fetchExchangeRecords() {
    return fetch('https://www.easy-mock.com/mock/59d892fd9d342f449f303370/app/records').then(res => res.json())
  }

  filterData = (index) => {
    const data = this.state.records
    if (data[index][4] !== false) {
      data[index][4] = false
    } else {
      data[index][4] = true
    }

    this.setState({
      records: data
    }) 
  }

  checkAll = () => {
    const data = this.state.records
    data.forEach(r => {
      r[4] = true
    })
    this.setState({
      records: data
    })
  }

  onChang = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
    localStorage.setItem('tabCurrent', mode)
  }

  render() {
    const _this = this
    const { priceList, records, mode } = this.state
    let remain = 0
    const assetsExchanged = {}
    records.forEach((data, index) => {
    
      if (data[4] === false) {
        return
      }
      remain += parseInt(data[1])

      // 如果有兑换记录
      if (data[2]) {
        const res = data[2].split(/\d+/)
        //const isAdd = res[0] === '+'
        const tokenName = res[1]
        const amount = parseInt(data[2])
        if (typeof assetsExchanged[tokenName] === 'undefined') {
          assetsExchanged[tokenName] = amount
        } else {
          assetsExchanged[tokenName] = assetsExchanged[tokenName] + amount
        }
        if (assetsExchanged[tokenName] === 0) {
          records.forEach((r, i) => {
            let x = r[2].split(/\d+/)
            if (i <= index && res[1] === x[1]) {
              r.completed = true
            }
          })
        }
      }
    })

    let tbenefit = 0

    const rows = records.map((data, index) => {
      const res = data[2].split(/\d+/)
      const tokenName = res[1]
      const amount = parseInt(data[2])
      let amountToAE = ''
      if (priceList[tokenName] && priceList.AE) {
        amountToAE = parseInt((Math.abs(amount) * priceList[tokenName].price)/priceList.AE.price)
      }
      const benefit = amountToAE && !data.completed ? (data[1] < 0 && amountToAE - Math.abs(data[1]) > 0  ? '+' : '') + (amountToAE - Math.abs(data[1])) : ''
      if (benefit) {
        tbenefit += parseInt(benefit)
      }
      return (
      <tr key={index}>
        <td>{data[0]}</td>
        <td>{data[1]}</td>
        <td title={amountToAE ? `≈${amountToAE}AE` : ''}>{data[2]}</td>
        <td>
          <span style={{paddingLeft: '3px', color: data[1] < 0 && amountToAE - Math.abs(data[1]) > 0  ? GREEN_COLOR : RED_COLOR}}>
            { benefit }
          </span>
          <CheckBox  checked={data[4] !== false ? true: false} onClick={() => _this.filterData(index)} />
        </td>
        <td>{data[3]}</td>
    </tr>)})

    let exchangedValue = 0
    let priceSyncCount = 0
    let needPrice = 0
    Object.keys(assetsExchanged).forEach(tokenSymbol => {
      if (assetsExchanged[tokenSymbol] > 0) {
        needPrice +=1
        if (this.state.priceList[tokenSymbol]) {
          exchangedValue += assetsExchanged[tokenSymbol] * this.state.priceList[tokenSymbol].price
          priceSyncCount += 1
        }
      }
    })

    const priceSyncOK = priceSyncCount === needPrice
    const canShowPrice = priceList.AE && priceSyncOK
    //const btc = priceList.BTC && canShowPrice ? (exchangedValue + remain * priceList.AE)/priceList.BTC : ''

    window.priceList = priceList
    window.assetsExchanged = assetsExchanged
    window.records = records
    return (
      <div className="App">
        {/* <div className="login">
          <input type="password" placeholder="请输入密码" />
        </div> */}
        <div className="App-header">
        <Radio.Group onChange={this.onChang} value={mode}>
          <Radio.Button value="a">行情</Radio.Button>
          <Radio.Button value="b">操作</Radio.Button>
        </Radio.Group>
        </div>
        
        <div className="container">
        {
          mode === 'a' ?

          <Fragment>
            <table border="0" cellPadding="0" cellSpacing="0" width="88%" align="center" className="exchangedAssets">
              <thead>
                <tr>
                  <th width="18%">TOKEN</th>
                  <th width="20%">CHANGE(24H)</th>
                  <th width="20%">PRICE</th>                
                  <th width="22%">AMOUNT</th>
                  <th width="20%">BANLANCE</th>
                </tr>
              </thead>
              <tbody>
                {
                  Object.keys(assetsExchanged).map(token => {
                      return assetsExchanged[token] > 0 ? <tr key={token}><td>{token}</td><td>{priceList[token] ? <Fragment><PriceView price={priceList[token].change} />%</Fragment> : <Loading />}</td><td>{ priceList[token] ? '￥' + priceList[token].price.toFixed(5) : <Loading /> }</td><td>{assetsExchanged[token]}</td><td>{priceList[token] ? '￥' + parseInt(priceList[token].price.toFixed(5) * assetsExchanged[token]) : <Loading />}</td></tr> : null
                    })
                }
                <tr>
                  <td>AE</td><td>{priceList.AE ? <Fragment><PriceView price={priceList.AE.change} />%</Fragment> : <Loading />}</td><td>{ priceList.AE ? '￥' + priceList.AE.price.toFixed(5) : <Loading /> }</td><td>{ remain }</td><td>{priceList.AE ? '￥' + parseInt(priceList.AE.price.toFixed(5) * remain) : <Loading />}</td>
                </tr>
              </tbody>
          </table>
          <div className="changes-list">
              <ExchangeAmount priceList={priceList} token="FUEL" />
              <ExchangeAmount priceList={priceList} token="LEND" />
              <ExchangeAmount priceList={priceList} token="SNT" />
              <ExchangeAmount priceList={priceList} token="KEY" />
          </div>
        </Fragment>
        
        :

        <table border="0" cellPadding="0" cellSpacing="0" width="88%" align="center" className="exchange-list">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th width="18%">DATE</th>
              <th width="20%">AE</th>
              <th width="20%">TOKEN</th>
              <th width="22%">CHECK<CheckBox checked={true} onClick={this.checkAll} /></th>
              <th width="20%">NOTE</th>
            </tr>
          </thead>
          <tbody>
            { rows }
          </tbody>
        </table>

        }

        <div className="status-bar">
      
        
              <span className="ae-total"><b>{remain}</b> AE</span>
              <span><b>{canShowPrice ? remain + parseInt(exchangedValue/priceList.AE.price) : <Loading />}</b> AE</span>
              <span><b>{canShowPrice ? 
                <Fragment>
                  <PriceView price={tbenefit} />
                </Fragment>
                :
                 <Loading />
                 /*
                 // 总额
                remain + parseInt(exchangedValue/priceList.AE.price)
                 // 总收益
                 (remain + parseInt(exchangedValue/this.state.priceList.AE.price) - DEFAULT_AMOUNT)
                 */
              }</b> AE</span>
          
        </div>

        </div>
      </div>
    );
  }
}

const ExchangeAmount = ({priceList, token}) => {
  return <div>24000 AE ≈ <span>{priceList.AE && priceList[token] ? parseInt(priceList.AE.price * 24000/priceList[token].price) : <Loading />}</span>{token}</div>
}

const CheckBox = ({checked, onClick = ()=> {}}) => {
  return (
    checked ? 
      <span className="ui-checkbox" select="true" onClick={onClick}></span>
      :
      <span className="ui-checkbox" onClick={onClick}></span>
    )
}

const PriceView = ({price}) => {
  return <span style={{color: +price < 0 ? RED_COLOR : GREEN_COLOR}}>{ price }</span>
}

const Loading = () => (
  <div className="loadEffect">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
  </div>
)

export default App;
