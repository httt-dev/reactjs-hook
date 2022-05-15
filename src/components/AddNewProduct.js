import { useState } from "react";

const AddNewProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [size, setSize] = useState(0)
    const [color, setColor] = useState("")

    const handleClickBtn = () => {
        let object = {
            name, price, size, color
        }
    }

    const [isShowDetail, setIsShowDetail] = useState(true);

    const handleHideShow = () => {
        setIsShowDetail(!isShowDetail);
    }

    return (
        <div>

            {

                //&& will display is none 
                isShowDetail === true &&
                <fieldset>
                    <legend>Add new product</legend>
                    <div className="input-product">
                        <label>Name</label>
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)}></input>
                    </div>
                    <div className="input-product">
                        <label>Price</label>
                        <input type="text" value={price} onChange={(event) => setPrice(event.target.value)}></input>
                    </div>
                    <div className="input-product">
                        <label>Size</label>
                        <input type="text" value={size} onChange={(event) => setSize(event.target.value)}></input>
                    </div>
                    <div className="input-product">
                        <label>Color</label>
                        <input type="text" value={color} onChange={(event) => setColor(event.target.value)}></input>
                    </div>
                    <div>
                        <button onClick={() => handleClickBtn()}>Add new</button>
                    </div>
                </fieldset>
            }

            {/* {
                isShowDetail === true && <div onClick={() => handleHideShow()}>Hide from</div>
            }
            {
                isShowDetail === false && <div onClick={() => handleHideShow()}>Show from</div>
            } */}

            {
                isShowDetail === true ?
                    <div onClick={() => handleHideShow()}>Hide from</div>
                    : <div onClick={() => handleHideShow()}>Show from</div>
            }

        </div>
    )
}

export default AddNewProduct;