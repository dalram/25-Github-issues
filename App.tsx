/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC, useState} from 'react'; // , {type PropsWithChildren}
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './src/screens/MainScreen';
import IssuesScreen from './src/screens/IssuesScreen';
import DataItem from './src/dataItem';
import {IssuesContext} from './src/contexts/AppContext';
import IssueScreen from './src/screens/IssueScreen';
export type RootStackParams = {
  Main: undefined;
  Issues: undefined;
  Issue: {
    title: string;
    created_at: string;
    assignees: [
      {
        login: string;
      }?,
    ];
    body: string;
  };
};
const RootStack = createNativeStackNavigator<RootStackParams>();

const App: FC = () => {
  const [issuesData, setIssuesData] = useState<DataItem[]>([]);
  return (
    <IssuesContext.Provider
      value={{
        issuesData,
        setIssuesData,
      }}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Main">
          <RootStack.Screen name="Main" component={MainScreen} />
          <RootStack.Screen name="Issues" component={IssuesScreen} />
          <RootStack.Screen name="Issue" component={IssueScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </IssuesContext.Provider>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   navigationContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   navBorder: {
//     borderBottomWidth: 1,
//     borderBottomColor: 'green',
//   },
//   navItem: {
//     marginRight: 10,
//   },
// });

export default App;
