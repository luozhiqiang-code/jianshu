import React, { PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./styled";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { actionCreators } from "./store";
import { connect } from "react-redux";

class Home extends PureComponent {
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            alt="bannerImg"
            src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(["home", "showScroll"]),
});
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  },
});

export default connect(mapState, mapDispatch)(Home);