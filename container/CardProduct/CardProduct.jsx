import React, {Component}  from 'react';


class CardProduct extends Component {
    state = {
        order: 4,
        name: 'Antok'
    }

    handleCounterChage = (newValue) => {
        this.props.onCounterChange(newValue);
    }
    handlePlus =  () => {
        this.setState({
            order:this.state.order + 1
        }, () => {
            this.handleCounterChage(this.state.order);
        } )
    }
    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order:this.state.order - 1
        }, () => {
            this.handleCounterChage(this.state.order);
        })
        }
    }
    
    render(){
        return (
            <div className="card">
            <div className="img-thumb-prod">
                <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F24%2FAyam_geprek.png&imgrefurl=https%3A%2F%2Fid.wikipedia.org%2Fwiki%2FAyam_geprek&tbnid=oJ6q2NtEJOT05M&vet=12ahUKEwjw0JKfp-jzAhXWELcAHZKRA2MQMygBegUIARDFAQ..i&docid=YYlRJceAGXHvXM&w=589&h=459&q=ayam%20geprek&client=firefox-b-d&ved=2ahUKEwjw0JKfp-jzAhXWELcAHZKRA2MQMygBegUIARDFAQ" alt=""/>
            </div>
            <p className="product-title">Ayam Geprek</p>
            <p className="product-price">Rp. 34.000</p>
            <div className="counter">
                <button className="minus" onClick={this.handleMinus}>-</button>
                <input type="text" value={this.state.order}/>
                <button className="plus" onClick={this.handlePlus}>+</button>
            </div>
          </div>
        );
    } 
}
export default CardProduct;