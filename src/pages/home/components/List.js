import React, { PureComponent, Fragment } from "react";
import { ListInfo, ListItem, LoadMore } from "../styled";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";
class List extends PureComponent {
  render() {
    const { list, page } = this.props;

    return (
      <Fragment>
        {list.map((item, index) => (
          <Link to={"/detail/" + item.get("id")} key={index}>
            {" "}
            <ListItem>
              <img className="pic" src={item.get("imgUrl")} alt="listImg" />
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="desc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          </Link>
        ))}
        <LoadMore onClick={() => this.props.getMoreList(page)}>
          更多文字
        </LoadMore>
      </Fragment>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articlePage"]),
});

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  },
});

export default connect(mapState, mapDispatch)(List);
