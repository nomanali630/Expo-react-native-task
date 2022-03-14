import 'react-native-gesture-handler';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DraxProvider, DraxView, DraxList } from 'react-native-drax';
import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { draggableItemList, FirstReceivingItemList } from '../../Data/Data'


const styles = StyleSheet.create({
    MainContainer: {
        width: '100%',
        height: '100%',        
        backgroundColor: '#FFDA52',
    },
    contentContainer: {
        width: '100%',
        height: '95%',

    },
    headingSection: {
        width: '100%',
        height: '30%',
        backgroundColor: '#FFDA52',
        alignItems: 'center'
    },
    MainHeading: {
        fontSize: 36,
        fontWeight: 'bold',
        padding: '2%',
        color: 'black'
    },
    textContent: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    btnContent: {
        width: '100%',
        height: '70%',
        backgroundColor: '#FF9E53'
    },
    rateContainer: {
        width: '100%',
        height: '60%',
        alignItems: 'center',
    },
    containerPriceBox: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    priceBox: {
        width: 150,
        height: 41,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 6,
        marginTop: '8%',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: '1%',
        shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 60,
        elevation: 30
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '10%'
    },
    btn: {
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    button: {
        width: 216,
        height: 39,
        backgroundColor: '#FFDA52',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    receivingZone: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    draggableBox: {
        width: (Dimensions.get('window').width / 2) - 12,
        height: 41,
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    dragging: {
        opacity: 0.2,
    },
    hoverDragging: {
        borderColor: 'magenta',
        borderWidth: 2,
    },
    receivingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    itemSeparator: {
        height: 15,
    },
    draxListContainer: {
        padding: 5,
        height: 200
    },
    receivingZoneContainer: {
        padding: 5,
        height: 100
    },
    textStyle: {
        fontSize: 18
    },
    headerStyle: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20
    }
})


const MenuSelectionScreen = () => {

    const [receivingItemList, setReceivedItemList] = useState(FirstReceivingItemList);
    const [dragItemMiddleList, setDragItemListMiddle] = useState(draggableItemList);
    const isEmpty = dragItemMiddleList.every((itm) => itm.isDrag)
 
    // i should use this and the next  code in a different components to use it for the code enhancing purpose but due to time shortage i kept it in the component 

    const DragUIComponent = ({ item, index }) => {
        return (
            <DraxView
                style={[styles.draggableBox, { backgroundColor: item.bg }]}
                draggingStyle={styles.dragging}
                dragReleasedStyle={styles.dragging}
                hoverDraggingStyle={styles.hoverDragging}
                dragPayload={index}
                longPressDelay={150}
                key={index}

            >
                <Text style={styles.textStyle}>{item.name}</Text>
            </DraxView>
           
        );
    }
    // In this function we are recieving the buttons 
    const ReceivingZoneUIComponent = ({ item, index }) => {
        return (
            <DraxView               
                style={{ alignItems: 'center', width: '100%' }}
                renderContent={() => {
                    return (
                        <View>
                            <Text style={[styles.priceBox, { backgroundColor: item.bg }]}>{item.name}</Text>
                        </View>
                    );
                }}
                key={index}
                onReceiveDragDrop={(event) => {
                    let selected_item = dragItemMiddleList[event.dragged.payload];
                    let newReceivingItemList = [...receivingItemList];
                    newReceivingItemList[index] = selected_item;
                    setReceivedItemList(newReceivingItemList);
                    let newDragItemMiddleList = [...dragItemMiddleList];
                    newDragItemMiddleList[event.dragged.payload] = { isDrag: true };
                    setDragItemListMiddle(newDragItemMiddleList);
                }}
            />
        );
    }
    // we are using this function for spacing in the dragging button list
    const FlatListItemSeparator = () => {
        return (<View style={styles.itemSeparator} />);
    }



    return (
        <SafeAreaView>
            <View style={styles.MainContainer}>
                <Navbar />
                <View style={styles.contentContainer} >
                    <View style={styles.headingSection}>
                        <View>
                            <Text style={styles.MainHeading}>Minispiel</Text>
                        </View>
                        <View style={{ width: '70%', marginTop: '10%' }}>
                            <Text style={styles.textContent}>the visual form of a document
                                or a typeface without relying</Text>
                        </View>
                    </View>
                   
                        <GestureHandlerRootView style={styles.btnContent}>
                            <DraxProvider>
                                <View style={styles.rateContainer}>
                                    <View style={{ width: '100%' }} >
                                        {receivingItemList.map((item, index) => ReceivingZoneUIComponent({ item, index }))}
                                    </View>

                                </View>
                                <View style={styles.buttonContainer}>

                                    <DraxList
                                        data={dragItemMiddleList}
                                        renderItemContent={DragUIComponent}
                                        keyExtractor={(item, index) => index.toString()}
                                        ItemSeparatorComponent={FlatListItemSeparator}
                                        numColumns={2}
                                        scrollEnabled={true}
                                    />

                                </View>
                            </DraxProvider>
                            {isEmpty ? <View style={{ alignSelf: 'center', marginBottom: '10%' }}>
                                <TouchableOpacity style={styles.button} onPress={()=> alert('Task completed')}>
                                    <Text style={styles.btnText}>Weiter</Text>
                                </TouchableOpacity>
                            </View>
                                : null}
                        </GestureHandlerRootView>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}


export default MenuSelectionScreen
