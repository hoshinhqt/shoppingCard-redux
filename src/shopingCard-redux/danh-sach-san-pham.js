import React, { Component } from "react";
import SanPham from './san-pham';
import {connect} from "react-redux";

class DanhSachSanPham extends Component {

  renderHTML= ()=> {
    const {inputSP} = this.props;
    return inputSP.map((sp)=>{
      return (
        <SanPham 
        key={sp.maSP}
        detailSP = {sp}
        />
      )
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderHTML()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return { inputSP : state.productReducer.mangSanPham}
}

export default connect(mapStateToProps, null)(DanhSachSanPham)