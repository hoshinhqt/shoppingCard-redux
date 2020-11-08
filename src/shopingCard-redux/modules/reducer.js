import data from '../../shopingCard-redux/data.json'

let initReducer = { 
        mangSanPham : data,
        detailProduct : data[0],
        modalProduct : [],
       
}
const productReducer = (state = initReducer, action )=>{
    
    switch (action.type){
        case 'SHOW':{
            console.log(action.payload);
            state.detailProduct = action.payload;
            return {...state};
        }
        case 'ADD':{
            console.log("add",action.payload);
            let modalProduct = [...state.modalProduct];
            let index = modalProduct.findIndex(item => item.maSP === action.payload.maSP);
            if(index !== -1){
                modalProduct[index].soluong +=1;
            }else{
               const newProduct = {
                    maSP : action.payload.maSP,
                    tenSP : action.payload.tenSP,
                    hinhAnh :action.payload.hinhAnh,
                    soluong :1,
                    dongia : action.payload.giaBan,
                };
                console.log(newProduct);
                modalProduct = [...state.modalProduct, newProduct];
            }
            state.modalProduct = modalProduct;
            return {...state};
        }
        case 'CHANGE-NUMBER' :{
            let modalProduct = [...state.modalProduct];
            let index = modalProduct.findIndex(item => item.maSP === action.payload.maSP);
            if(action.isValue){
                modalProduct[index].soluong +=1;
            }else{
                if(modalProduct[index].soluong > 1){
                    modalProduct[index].soluong -= 1;
                }
            }
            state.modalProduct = modalProduct;
            return {...state};
        }
        case 'DELETE' :{
            console.log("action.payload", action.payload.maSP);
            let modalProduct = [...state.modalProduct];
            let index = modalProduct.findIndex(item => item.maSP == action.payload.maSP);
            console.log(modalProduct,index);
            modalProduct.splice(index,1);
            state.modalProduct = modalProduct;
            return {...state};
        }
        default : 
        return {...state};
    }
 
}
export default productReducer;
