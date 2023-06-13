import { createContext, useState } from "react";

const productContext = createContext();

export function ProductProvider(props) {
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: "No description"
    })

    return (
        <productContext.Provider value={{ product, setProduct }}>
            {props.children}
        </productContext.Provider>
    )
}

export default productContext;