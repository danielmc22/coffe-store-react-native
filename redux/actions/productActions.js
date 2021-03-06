import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const productActions = {
    getAllProducts: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('https://macchiatoapp.herokuapp.com/api/allproducts')
            dispatch({ type: 'get_products', payload: res.data.response.products })
        }
    },
    // comentado ya que no le veo sentido a tenerlo en redux 
    filter: (allProducts, valueInput, valueSelect) => {
        let devolver = []
        if (valueInput !== "") {
            if (valueSelect !== "") {
                devolver.push(...allProducts.filter((product) => product.name.toLowerCase().startsWith(valueInput.trim().toLowerCase())
                    && product.category.toLowerCase().includes(valueSelect.trim().toLowerCase())))
                return (dispatch, getState) => {
                    dispatch({ type: 'filter', payload: devolver })
                }
            } else {
                devolver.push(...allProducts.filter((product) => product.name.toLowerCase().startsWith(valueInput.trim().toLowerCase())))

                return (dispatch, getState) => {
                    dispatch({ type: 'filter', payload: devolver })
                }
            }
        } else if (valueSelect !== "") {
            devolver.push(...allProducts.filter(product => product.category.trim().toLowerCase().includes(valueSelect.trim().toLowerCase()))
            );
            return (dispatch, getState) => {
                dispatch({ type: 'filter', payload: devolver })
            }
        } else {
            devolver.push(...allProducts)
            return (dispatch, getState) => {
                dispatch({ type: 'filter', payload: devolver })
            }
        }


    },
    getOneProduct: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`https://macchiatoapp.herokuapp.com/api/allproducts/${id}`);
            dispatch({ type: 'get_one_product', payload: res.data.response.product })
            return res.data.response.product
        };
    },
    loadProduct: (objProd, id) => {
        const token = AsyncStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post(`https://macchiatoapp.herokuapp.com/api/allproducts/${id}`, { objProd }, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            dispatch({
                type: 'message',
                payLoad: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })

        }
    },
    modifyProduct: (objProd, id) => {
        const token = AsyncStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.put(`https://macchiatoapp.herokuapp.com/api/allproducts/${id}`, { objProd }, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            dispatch({
                type: 'message',
                payLoad: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },
    deleteProduct: (id) => {
        const token = AsyncStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post(`https://macchiatoapp.herokuapp.com/api/allproducts/one/${id}`, {}, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            dispatch({
                type: 'message',
                payLoad: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })

        }
    },
    addToCart: (id) => {
        return async (dispatch, getState) => {
            // console.log(id);
            dispatch({ type: "addToCart", payload: id })
        }
    },
    removeOneFromCart: (id) => {
        return (dispatch, getState) => {
            dispatch({ type: "removeOneFromCart", payload: id })
        }

    },
    removeAllFromCart: (id) => {
        return (dispatch, getState) => {
            dispatch({ type: "removeAllFromCart", payload: id })
        }
    },
    emptyCart: () => {
        return async (dispatch, getState) => {
            dispatch({ type: "emptyCart" })
        }
    },
    iniciarAlRecargar: (data) => {
        return async (dispatch, getState) => {
            dispatch({ type: "iniciarAlRecargar", payload: data })
        }
    }
}

export default productActions;


