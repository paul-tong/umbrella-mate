import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

class TripHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Type', 'Date', 'Start Position', 'End Position', 'Mate', 'Star'],
      widthArr: [40, 60, 80, 100, 120, 140]
    }
  }
 
  render() {
    const state = this.state;
    
    const tableData = [
      ['Share', '2019/7/28', '15 Beltran Street', '160 Pleasant Street, Malden', 'Tong', '5'],
      ['Request', '2019/7/28', '15 Beltran Street', '160 Pleasant Street, Malden', 'Duo', '5'],
    ];
 
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});

export default TripHistory;