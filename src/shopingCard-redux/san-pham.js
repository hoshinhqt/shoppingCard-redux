import React, { Component } from "react";
import {connect} from "react-redux";
 class SanPham extends Component {

  render() {
    const {detailSP} = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={detailSP.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{detailSP.tenSP}</h4>
            <button className="btn btn-success mr-1" 
            onClick={()=>{ 
              this.props.showProduct(detailSP);
            }}
            >Chi tiết</button>

            <button className="btn btn-danger"
            onClick={()=>{
              this.props.addProductCard(detailSP);
            }}
            >Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    showProduct : (product)=>{
      const action = {
        type : 'SHOW',
        payload : product,
      };
      dispatch(action);
    },
    addProductCard : (product)=>{
      const action = {
        type : 'ADD',
        payload : product,
      };
      dispatch(action);
    }
  }
}
export default connect(null, mapDispatchToProps) (SanPham);
