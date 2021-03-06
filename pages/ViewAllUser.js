/*Screen to view all the user*/
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

//components
import MyView from './styledComponents/MyView';
import MyButton from './components/MyButton';
import t from '../localization/stringsoflanguages';
import {primary} from '../variables/colors';
import MyText from './styledComponents/MyText';

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
      <MyView
        style={{height: 0.2, width: '100%', backgroundColor: '#808080'}}
      />
    );
  };

  return (
    <MyView>
      <FlatList
        data={users}
        ItemSeparatorComponent={ListViewItemSeparator}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <MyView
            key={item.id}
            style={{backgroundColor: primary.background, padding: 20}}>
            <MyText>
              {t.u_id}: {item.id}
            </MyText>
            <MyText>
              {t.u_name}: {item.name}
            </MyText>
            {/*<Text>Contact: {item.contact}</Text>*/}
            {/*<Text>Address: {item.address}</Text>*/}

            <MyButton
              title={t.u_show_info}
              onClick={() => props.navigation.navigate('ViewId', {id: item.id})}
            />

          </MyView>
        )}
      />
    </MyView>
  );
}


ViewAllUser.navigationOptions = () => ({
  title: t.view_all,
});
