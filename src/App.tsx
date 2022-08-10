/**
 * delete
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { FC, useState } from "react"; // , {type PropsWithChildren}
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
import IssuesScreen from "./screens/IssuesScreen";
import DataItem from "./dataItem";
import { IssuesContext } from "./contexts/AppContext";
import IssueScreen from "./screens/IssueScreen";
export type RootStackParams = {
  Main: undefined; // cia panaudok enum vietoj Main ir visu kitu, ir kitur naudok ne stringa "Main", o ta pati enuma
  Issues: undefined;
  Issue: {
    title: string;
    created_at: string;
    assignees: [
      {
        login: string;
      }?
    ];
    body: string;
  };
};
const RootStack = createNativeStackNavigator<RootStackParams>();

const App: FC = () => {
  const [issuesData, setIssuesData] = useState<DataItem[]>([]);
  /* sukurk navigationui ir contextui atskirus componentus, kuriame bus tik jie */
  return (
    <IssuesContext.Provider
      value={{
        issuesData,
        setIssuesData,
      }}
    >
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

// const styles = StyleSheet.create({ delete
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
