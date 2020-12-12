import React, { Component } from 'react';
import './section.css';
import Brand from '../../miscelleous/brand/brand';
import GrabBtn from '../../buttons/grab-offer/grab-btn';
import Tiles from '../section-tiles/tiles/tiles';
import Specs from '../section-specs/specs';
import SpecOffer from '../spec-offer/specOffer';
import Stacked from '../stacked-photos/stacked';
import Footer from '../../navigation/footer/footer';

let back = <Brand />;
class section1 extends Component {
    state = {
        cls1: "circle",
        cls2: "circle",
        cls3: "circle",
        brand: false
    }
    componentDidMount() {
        setTimeout(() => this.clickBtn(1), 3000);

    }
    clickBtn(valv) {
        if (valv === 1) {
            back = <Brand show />;

            this.setState({ cls2: "circle" });
            this.setState({ cls3: "circle" });
            this.setState({ cls1: "full" });
        }
        else if (valv === 2) {

            this.setState({ cls3: "circle" });
            this.setState({ cls1: "circle" });
            this.setState({ cls2: "full" });
        }
        else if (valv === 3) {
            this.setState({ cls1: "circle" });
            this.setState({ cls2: "circle" });
            this.setState({ cls3: "full" });
        }
    }
    render() {
        return (
            <div style={{ overflowY: "hidden" }}>
                <section className="Header">
                    {this.props.children}
                    {back}
                    <div className="button-offer">
                        <GrabBtn url="/offers" content="Grab Offer" />
                    </div>
                    <div className="controls">
                        <div className="internal-c">
                            <div href="#" className={this.state.cls1} onClick={() => this.clickBtn(1)}></div>
                            <div href="#" className={this.state.cls2} onClick={() => this.clickBtn(2)}></div>
                            <div href="#" className={this.state.cls3} onClick={() => this.clickBtn(3)}></div>
                        </div>
                    </div>
                </section>
                <section className="sec-tiles">

                    <Tiles data={this.props.data.cards} />
                </section>
                <section className="specs">
                    <Specs />
                </section>
                <section className="specOffer">
                    <SpecOffer data={this.props.data.mainoffer} />
                </section>
                <section className="sec-stacked">
                    <Stacked />
                </section>
                <Footer />
            </div>
        );
    }

}
export default section1;