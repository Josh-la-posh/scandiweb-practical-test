import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import "./Checkout.extension.style.scss";
import { TiTick } from "react-icons/ti";

export default class Checkout extends SourceCheckout {
  state = {
    currentStep: 1,
    checkoutStep: this.props.checkoutStep,
  };
  renderSteps() {
    const { checkoutStep } = this.props;
    const steps = Object.values(this.stepMap);
    const steps2 = Object.keys(this.stepMap);
    const index = steps2.findIndex((s) => this.stepMap[s].title === this.stepMap[checkoutStep].title)
    console.log(steps)
    
    if (steps[index].url === "/shipping") {
      this.setState({ currentStep: 1 });
    } else if (steps[index].url === "/billing") {
      this.setState({ currentStep: 2 });
    } else {
      this.setState({ currentStep: 3 });
    }

    const title = (name) => {
      return name.url.substring(1);
    };

    return (
      <div className="checkout">
        <div className="line__through"></div>
        <div className={`${this.state.currentStep === 1 && 'line line1'} || ${this.state.currentStep === 2 && 'line line2'} || ${this.state.currentStep === 3 && 'line line3'}`} ></div>
        {steps.slice(0, -1).map((item, i) => (
          <div
            key={i}
            className={`checkout__steps ${
              this.state.currentStep >= i + 1 && "active"
            }`}
          >
            <div className="checkout__number">
              {i + 1 < this.state.currentStep || this.state.complete ? (
                <TiTick size={16} />
              ) : (
                i + 1
              )}
            </div>
            <p className="checkout__title">{title(item)}</p>
          </div>
          
        ))}
      </div>
    );
  }

  render() {
    return (
      <main block="Checkout">
        {this.renderSteps()}
        {this.renderSummary(true)}
        <div block="Checkout" elem="Step">
          {this.renderTitle()}
          {this.renderGuestForm()}
          {this.renderStep()}
          {this.renderLoader()}
        </div>
        <div>
          {this.renderSummary()}
          {this.renderPromo()}
          {this.renderCoupon()}
        </div>
      </main>
    );
  }
}
