import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import './OrderStatus.css';

class OrderStatus extends React.Component {
    constructor(props){
        super(props)
        this.state={
            orderPlaced: 'order placed',
            confirmed:'confirmed',
            filled:'filled',
            transit: 'in transit',
            delivered:'delivered',
            percent:0
        }
        this.ProgressMoving = this.ProgressMoving.bind(this);
        // this.percentageLimits = this.percentageLimits.bind(this)
    }
    ProgressMoving(){
        this.setState({
            percent:this.state.percent + 25
        })
    }
    // percentageLimits(min, value, max){
    //     return Math.min(Math.max(min, value), max)
    // }
  render() {
    return (
        <section className="OrderStatus">
            <ul className="StatusNames">
            <li className="OrderStatusNames"> {this.state.orderPlaced} </li>
                <li className="ConfirmedStatus">{this.state.confirmed}</li>
                <li className="FilledStatus">{this.state.filled}</li>
                <li className="TransitStatus">{this.state.transit}</li>
                <li className="DeliveryStatus">{this.state.delivered}</li>
            </ul>
        <ProgressBar
        filledBackground="linear-gradient(to right, #5be440, #5be440)"
        percent={this.state.percent}
        >
             
            <Step>
                {({ accomplished }) => (
                
                <div
                    className={`RoundBlocks ${accomplished ? "accomplished" : null}`}
                   onClick={this.ProgressMoving}
                >
                </div>
                )}
            </Step>
            <Step>
                {({ accomplished }) => (
                <div
                    className={`RoundBlocks ${accomplished ? "accomplished" : null}`}
                    onClick={this.ProgressMoving}
                >
                </div>
                )}
            </Step>
            <Step>
                {({ accomplished }) => (
                <div
                    className={`RoundBlocks ${accomplished ? "accomplished" : null}`}
                    onClick={this.ProgressMoving}
                >
                </div>
                )}
            </Step>
            <Step>
                {({ accomplished }) => (
                <div
                    className={`RoundBlocks ${accomplished ? "accomplished" : null}`}
                    onClick={this.ProgressMoving}
                >
                </div>
                )}
            </Step>
            <Step>
                {({ accomplished }) => (
                <div
                    className={`RoundBlocks ${accomplished ? "accomplished" : null}`}
                    onClick={this.ProgressMoving}
                >
                </div>
                )}
            </Step>
        </ProgressBar>
      </section>
    );
  }
}
export default OrderStatus;