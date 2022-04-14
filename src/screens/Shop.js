import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Picker, ScrollView, ImageBackground } from 'react-native';
import productActions from "../../redux/actions/productActions"
import { connect } from 'react-redux';
import CardShop from '../components/CardShop';
// import {Picker} from "@react-native-picker/picker"

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

    return (
        <ScrollView>
            <ImageBackground  style={{backgroundColor:"black", width: "100%", minHeight: 1000, display: 'flex' }}>
                <View style={{ width: '100%', height: 30, backgroundColor: "#F3A446", marginVertical: 20 }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('AboutUs')}
                    ><Text style={{ color: '#000', fontSize: 18, textAlign: 'center' }}>If you want to know more about us click here</Text></TouchableOpacity>
                </View>
                <View style={{
                    height: 600,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: "hidden",
                }}>
                    <ImageBackground source={require('../../assets/shop.jpg')} style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: 0.8,

                    }}>
                    </ImageBackground>
                </View>
                <View style={styles.containerFilters}>
                    <TextInput
                        style={{ color: '#efeefe', height: 40, borderColor: "gray", borderWidth: 1.5, padding: 10, width: '60%', alignSelf: 'center', marginTop: 10, }}
                        underlineColorAndroid="transparent"
                        borderRadius={10}
                        padding={10}
                        fontSize={20}
                        placeholderTextColor="white"
                        placeholder="Search your product"
                        onChange={(event) => { setEventInput(event.nativeEvent.text); filter(event.nativeEvent.text, eventSelect) }}
                        defaultValue={''}
                    />
                    <Picker
                        // selectedValue={selectedValue}
                        style={{ height: 50, width: 200, color: '#efeefe', marginVertical: 15, }}
                        itemStyle={{ backgroundColor: "grey", color: "blue" }}



                        onValueChange={(event) => {
                            setEventSelect(event); filter(eventInput, event)

                        }}
                    >
                        <Picker.Item label='Choose the category' value='' />
                        {categories.map((category) =>
                            <Picker.Item label={category.name} value={category.name} key={category.name} />
                        )}

                    </Picker>
                </View>
                <View style={styles.containerCards}>
                    <ScrollView style={styles.scrollViewShop}>
                        {props.filtered.map((product) =>
                            <CardShop product={product} key={product._id} navigation={props.navigation} />
                        )}
                    </ScrollView>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
    return {
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

    containerFilters: {
        backgroundColor: 'transparent',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
        marginBottom: 16

    },
    containerCards: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    }
})