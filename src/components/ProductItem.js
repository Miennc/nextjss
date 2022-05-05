import React from 'react';

function ProductItem(props) {
    return (
        <div>
            <div className="shadow">
                <div className="p-3">
                <img className=" w-full h-72 object-cover" src="https://i.pinimg.com/564x/02/05/90/0205900ce91a558c277ff694ec750645.jpg" alt="" />
                <div>
                    <h6 className="text-lg font-bold ">Sản phẩm nhà làm </h6>
                    <p className="text-md font-italic">Công năng vượt trội thánh thức thời gian</p>
                </div>
                </div>
                <div class="p-6 text-grey-darker text-justify flex flex-row  border-t">
              <button class="uppercase self-end text-blue text-sm hover:text-blue-dark duration-4 self-center bg-blue-400">details</button>
             <button class="uppercase self-end bg-green font-bold text-white  rounded hover:bg-green-dark duration-4 bg-blue-400 ml-5"><i class="fa fa-cart-plus mr-4"></i>Add to cart</button>
          </div>
            </div>
        </div>
    );
}

export default ProductItem;