import React,{useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Picker, ScrollView } from 'react-native';
import productActions from "../../redux/actions/productActions"
import { connect } from 'react-redux';
import CardShop from '../components/CardShop';

const categories = [{ name: "Coffees", }, { name: "Coffee maker", }, { name: "Accessories", }, { name: "Barista tools", }]
function Shop(props) {

    const [eventInput, setEventInput] = useState("");
    const [eventSelect, setEventSelect] = useState("");



    function filter(input, select) {
        console.log(input);
        console.log(select);

        props.filter(props.allProducts, input, select)

    }

    useEffect(() => {
        props.getAllProducts();
        // console.log(props.allProducts)
      }, []);
      
    return(
        <View style={styles.containerShop}>
            <View style={styles.containerFilters}>
                <TextInput
                // style={}
                placeholder="Search your product"
                onChange={(event) => { setEventInput(event.nativeEvent.text); filter(event.nativeEvent.text, eventSelect ) }}
                defaultValue={''}
                />
                <Picker
                // selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onChange={(event) => { setEventSelect(event.nativeEvent.text); filter(eventInput, event.nativeEvent.text) }}
                >   
                    <Picker.Item label='Choose the category' value=''/>
                    {categories.map((category)=>
                    <Picker.Item label={category.name} value={category.name} key={category.name}/>
                    )}
                    
                </Picker>
            </View>
            <View style={styles.containerCards}>
                <ScrollView style={styles.scrollViewShop}>
                {props.filtered.map((product)=>
                <CardShop  product={product} key={product._id}/>
                )}
                </ScrollView>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return{
        allProducts: state.productReducer.allProducts,
        filtered: state.productReducer.filtered

    }
}
const mapDispatchToProps = {
    getAllProducts: productActions.getAllProducts,
    filter: productActions.filter,
}


export default connect(mapStateToProps, mapDispatchToProps)(Shop)

const styles = StyleSheet.create({
    containerShop:{
        backgroundColor: 'red',
        height: '100%',
        display: 'flex',
        alignItems:'center'
    },
    containerFilters:{
        backgroundColor: 'blue',
        height: '10%',
        width:'100%',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerCards:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    }
})