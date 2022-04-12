import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = {

    allProducts: [],
    oneProduct: [],
    filtered: [],
    cart: [],
    // cart: JSON.parse(AsyncStorage.getItem("shopCart")) || [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'get_products':
            return {
                ...state,
                allProducts: action.payload,
                filtered: action.payload,
            };
        case 'get_one_product':
            return {
                ...state,
                oneProduct: action.payload
            };
        case 'filter':
            return {
                ...state,
                filtered: action.payload
            }
        case "iniciarAlRecargar":
            return {
                ...state,
                cart: [...action.payload]
            }
        case "addToCart":
            let itemCart
            let newItem = state.allProducts.find(prod => prod._id === action.payload)
            if (!newItem) {
                newItem = JSON.parse(AsyncStorage.getItem("shopCart")).find(prod => prod._id === action.payload)
            } else {

                itemCart = state.cart.find(prod => prod._id === newItem._id)
            }

            itemCart = state.cart.find(prod => prod._id === newItem._id)


            itemCart ? (AsyncStorage.setItem("shopCart", JSON.stringify([...state.cart.map
                (prod => prod._id === newItem._id ? { ...prod, quantity: prod.quantity + 1 } : { ...prod })]))) :
                (AsyncStorage.setItem("shopCart", JSON.stringify([...state.cart, { ...newItem, quantity: 1 }])))

            return itemCart ? {
                ...state,
                cart: state.cart.map(prod => prod._id === newItem._id ? { ...prod, quantity: prod.quantity + 1 } : { ...prod })
            } : {
                ...state,
                cart: [...state.cart, { ...newItem, quantity: 1 }]
            }

        case "removeOneFromCart":

            let poductsStorage = JSON.parse(AsyncStorage.getItem("shopCart"))

            let itemDelete = poductsStorage.find(prod => prod._id === action.payload)

            itemDelete.quantity > 1 ? (AsyncStorage.setItem("shopCart", JSON.stringify([...state.cart.map

                (prod => prod._id === action.payload ? { ...prod, quantity: prod.quantity - 1 } : { ...prod })]))) :

                (AsyncStorage.setItem("shopCart", JSON.stringify([...state.cart.filter(prod => prod._id !== action.payload)])))


            return itemDelete.quantity > 1 ? {
                ...state,
                cart: state.cart.map(prod => prod._id === itemDelete._id ? { ...prod, quantity: prod.quantity - 1 } : { ...prod })
            } : {
                ...state,
                cart: state.cart.filter(prod => prod._id !== action.payload)
            }
        case "removeAllFromCart":
            AsyncStorage.setItem("shopCart", JSON.stringify([...state.cart.filter(prod => prod._id !== action.payload)]))
            return {
                ...state,
                cart: state.cart.filter(prod => prod._id !== action.payload)
            }
        case "emptyCart":
            AsyncStorage.removeItem("shopCart")
            return {
                ...state,
                cart: []
            }
        default:
            return state;

    }

}
export default productReducer;