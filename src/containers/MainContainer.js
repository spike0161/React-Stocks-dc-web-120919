import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      portfolio: [],
      stock: null
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(res => res.json())
      .then(stocks => this.setState({ stocks: stocks }));
  }

  addStockHandler = (stockObj) => {
    let portfolio = this.state.portfolio
    this.setState({ portfolio: [...portfolio, stockObj]})
  }

  removeStockHandler = (stockObj) => {
    let portfolio = this.state.portfolio.filter(stock => stock !== stockObj)
    this.setState({portfolio: portfolio })
  }

  render() {
    return (
      <div>
        <SearchBar />

        <div className="row">
          <div className="col-8">
            <StockContainer stocks={this.state.stocks} addStockHandler={this.addStockHandler}/>
          </div>
          <div className="col-4">
            <PortfolioContainer portfolio={this.state.portfolio} removeStockHandler={this.removeStockHandler} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
