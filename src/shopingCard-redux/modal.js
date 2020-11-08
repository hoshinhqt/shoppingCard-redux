import React, { Component } from "react";
import {connect} from "react-redux";


 class Modal extends Component {

  renderHTML = () => {

    const {spAddCard} = this.props;
    console.log("spAddCard",spAddCard);
    
    return spAddCard.map((sp, index)=>{
      return (
        <tr key={index}>
          <td>{sp.maSP}</td>
          <td>{sp.tenSP}</td>
          <td>
            <img src={sp.hinhAnh} width={50} alt="" />
          </td>
          <td>
            <button className = "btn btn-info mr-1"
             onClick={()=>{this.props.changeSL(sp,false)}}>-</button>
            {sp.soluong}
            <button className = "btn btn-info ml-1" 
            onClick={()=>{this.props.changeSL(sp,true)}}>+</button>
          </td>
          <td>{sp.dongia}</td>
          <td>{sp.dongia*sp.soluong}</td>
          <td>
            <button className="btn btn-danger"
            onClick={()=>{this.props.deleteSP(sp)}}
            >Delete</button>
          </td>
      </tr>
      )
    })
  }
  
  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderHTML()}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    spAddCard : state.productReducer.modalProduct,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    changeSL :(soluong, isValue)=>{
      const action ={
        type :'CHANGE-NUMBER',
        payload: soluong,
        isValue : isValue,
      };
      dispatch(action);
    },
    deleteSP :(sp)=>{
      const action ={
        type :'DELETE',
        payload: sp,
      };
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
