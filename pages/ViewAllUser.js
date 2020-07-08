/*Screen to view all the user*/
import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});
export default function ViewAllUser(props) {

  let [users, setUsers] = useState([]);

  db.transaction(tx => {
    tx.executeSql('SELECT * FROM users', [], (tx, results) => {
      var temp = [];
      for (let i = 0; i < results.rows.length; ++i) {
        temp.push(results.rows.item(i));
      }
      setUsers(temp);
    });
  });

  const ListViewItemSeparator = () => {
    return (
      <View style={{height: 0.2, width: '100%', backgroundColor: '#808080'}}/>
    );
  };

  return (
    <View>
      <FlatList
        data={users}
        ItemSeparatorComponent={ListViewItemSeparator}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View
            key={item.user_id}
            style={{backgroundColor: 'white', padding: 20}}>
            <Text>Id: {item.id}</Text>
            <Text>Имя: {item.name}</Text>
            <Text>Contact: {item.contact}</Text>
            <Text>Address: {item.address}</Text>
          </View>
        )}
      />
    </View>
  );
}
