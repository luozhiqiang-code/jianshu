import React, { Component } from "react";
import { Content, DetailWrapper, Header } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail(props) {
  let { id } = useParams();
  useEffect(() => {
    props.getDetail(id);
  });

  return (
    <DetailWrapper>
      <Header>{props.title}</Header>
      <Content dangerouslySetInnerHTML={{ __html: props.content }} />
    </DetailWrapper>
  );
}

// class Detail extends Component {
//   componentDidMount() {
//     this.props.getDetail();
//   }
//   render() {
//     return (
//       <DetailWrapper>
//         <Header>{this.props.title}</Header>
//         <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
//       </DetailWrapper>
//     );
//   }
// }

const mapState = (state) => ({
  title: state.get("detail").get("title"),
  content: state.getIn(["detail", "content"]),
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  },
});
export default connect(mapState, mapDispatch)(Detail);
