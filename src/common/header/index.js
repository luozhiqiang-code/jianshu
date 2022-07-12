import React, { Component } from "react";
import "../../static/iconfont/iconfont.css"; //引入字体图标
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Button,
  Addition,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwith,
  SearchInfoItem,
  SearchInfoList,
} from "./style";
import { Link, Outlet } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  const;
  componentDidMount() {}

  getListArea = () => {
    const { focused, list, page, mouseIn, totalPage } = this.props;
    const jsList = list.toJS();
    const pageList = [];

    for (let i = (page - 1) * 10; i < page * 10; i++) {
      // console.log(jsList[i]);
      pageList.push(<SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>);
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={this.props.handleMouseEnter}
          onMouseLeave={this.props.handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwith
              onClick={() =>
                this.props.handleChangePage(page, totalPage, this.spinIcon)
              }
            >
              <span
                className="iconfont spin"
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
              >
                &#xe606;
              </span>
              换一批
            </SearchInfoSwith>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };

  render() {
    const { login, logout } = this.props;
    return (
      <React.Fragment>
        <HeaderWrapper>
          <div>
            <Link to="/">
              <Logo />
            </Link>

            <Nav>
              <NavItem className="left active">首页</NavItem>
              <NavItem className="left">下载APP</NavItem>
              {login ? (
                <NavItem onClick={logout} className="right">
                  退出
                </NavItem>
              ) : (
                <Link to="/login">
                  <NavItem className="right">登录</NavItem>
                </Link>
              )}

              <NavItem className="right">
                <span className="iconfont">&#xe636;</span>
              </NavItem>
              <SearchWrapper>
                <CSSTransition
                  in={this.props.focused}
                  timeout={200}
                  classNames="slide"
                >
                  <NavSearch
                    className={this.props.focused ? "focused" : ""}
                    onFocus={() => {
                      this.props.handleFocus(this.props.list);
                    }}
                    onBlur={this.props.handleInputBlur}
                  ></NavSearch>
                </CSSTransition>

                <span
                  className={
                    this.props.focused ? "focused iconfont zoom" : "iconfont"
                  }
                >
                  &#xe60d;
                </span>
                {this.getListArea()}
              </SearchWrapper>

              <Addition>
                <Link to="/write">
                  <Button className="writting">
                    <span className="iconfont">&#xe600;</span>
                    写文章
                  </Button>
                </Link>

                <Button className="reg">注册</Button>
              </Addition>
            </Nav>
          </div>
        </HeaderWrapper>
        <Outlet />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    totalPage: state.getIn(["header", "totalPage"]),
    login: state.getIn(["login", "login"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },

    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spinIcon) {
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle);
      } else {
        originAngle = 0;
      }

      spinIcon.style.transform = `rotate(${originAngle + 360}deg)`;
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
