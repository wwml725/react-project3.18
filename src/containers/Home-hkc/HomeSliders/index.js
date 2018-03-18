import React,{Component} from 'react';
import "./index.less";
import HotSliders from "./HotSliders/index";
import HomeProducts from "./HomeProducts/index";

export default class HomeSliders extends Component{
    componentDidMount() {
        let oContent = this.content;
        this.props.move(oContent)
    }
    render(){
        let style={
            width:this.props.kindList.length*320+'px',
            // left:this.props.sliderLeft+'px',
            transitionDuration:"500ms",
            transform:`translate(${this.props.sliderLeft}px,0)`
        };
        let swipeOptions = {
            continuous: false,
        };
        return (
                <div className="home-page-wrapper">

                <div id="homeListWrapper" style={style} ref={content=>this.content=content}>
                    <div className="home-fruit" data-id={1}>
                            <HotSliders/>
                            <div className='onsale' style={{width:"100%"}}><img src={require("../../../../resource/home/onsale.PNG")}/></div>
                            <HomeProducts/>
                    </div>

                    <div className="hot-pot" data-id={2}>
                        <HotSliders/>
                        <div className='onsale'><img src={require("../../../../resource/home/onsale.PNG")}/></div>
                        <HomeProducts/>
                    </div>
                    <div className="hot-onsale" data-id={3}>
                        <HotSliders/>
                        <div className='onsale'><img src={require("../../../../resource/home/onsale.PNG")}/></div>
                        <HomeProducts/>
                    </div>
                    <div className="vegetables" data-id={4}>
                        <HotSliders/>
                        <div className='onsale'><img src={require("../../../../resource/home/onsale.PNG")}/></div>
                        <HomeProducts/>
                    </div>
                    <div className="milk" data-id={5}>
                        <HotSliders/>
                        <div className='onsale'><img src={require("../../../../resource/home/onsale.PNG")}/></div>
                        <HomeProducts/>
                    </div>
                    <div className="eggs" data-id={6}>
                        <HotSliders/>
                        <div className='onsale'><img src={require("../../../../resource/home/onsale.PNG")}/></div>
                        <HomeProducts/>
                    </div>

                    <div className="eggs" data-id={7}>
                        <HotSliders/>
                        <div className='onsale'><img src={require("../../../../resource/home/onsale.PNG")}/></div>
                        <HomeProducts/>
                    </div>

                    <div className="eggs" data-id={8}>
                        <HotSliders/>
                        <div className='onsale'><img src={require("../../../../resource/home/onsale.PNG")}/></div>
                        <HomeProducts/>
                    </div>

                    <div className="eggs" data-id={9}>
                        <HotSliders/>
                        <div className='onsale'><img src={require("../../../../resource/home/onsale.PNG")}/></div>
                        <HomeProducts/>
                    </div>

                    <div className="eggs" data-id={10}>
                        <HotSliders/>
                        <div className='onsale'><img src={require("../../../../resource/home/onsale.PNG")}/></div>
                        <HomeProducts/>
                    </div>

                    <div className="eggs" data-id={11}>
                        <HotSliders/>
                        <div className='onsale'><img src={require("../../../../resource/home/onsale.PNG")}/></div>
                        <HomeProducts/>
                    </div>

                    <div className="eggs" data-id={12}>
                        <HotSliders/>
                        <div className='onsale'><img src={require("../../../../resource/home/onsale.PNG")}/></div>
                        <HomeProducts/>
                    </div>

                    <div className="eggs" data-id={13}>
                        <HotSliders/>
                        <div className='onsale'><img src={require("../../../../resource/home/onsale.PNG")}/></div>
                        <HomeProducts/>
                    </div>

                    <div className="eggs" data-id={14}>
                        <HotSliders/>
                        <div className='onsale'><img src={require("../../../../resource/home/onsale.PNG")}/></div>
                        <HomeProducts/>
                    </div>

                </div>

                </div>
        )
    }
}


