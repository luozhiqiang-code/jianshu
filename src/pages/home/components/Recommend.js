import React, { PureComponent } from "react";
import { RecommendItem, RecommendWrapper } from "../styled";
import { connect } from "react-redux";

class Recommend extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {list.map((item) => (
          <RecommendItem
            key={item.get("id")}
            imgUrl={item.get("imgUrl")}
          ></RecommendItem>
        ))}
      </RecommendWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.get("home").get("recommendList"),
});

export default connect(mapState)(Recommend);
