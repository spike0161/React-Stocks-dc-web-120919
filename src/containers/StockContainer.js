import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {

    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stock => <Stock stockObj={stock} key={stock.id} addStockHandler={this.props.addStockHandler}/>)
        }
      </div>
    );
  }

}

export default StockContainer;
