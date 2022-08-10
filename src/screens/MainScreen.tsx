import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import LinkInput from '../components/LinkInput';
import Navigation from '../components/Navigation';
import IssuesList from '../components/IssuesList';
import {useIssuesContext} from '../contexts/AppContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';

type Props = NativeStackScreenProps<RootStackParams, 'Issues'>;

const MainScreen: FC<Props> = ({navigation, route}) => {
  const {setIssuesData} = useIssuesContext();
  return (
    <View style={styles.container}>
      <LinkInput setIssuesData={setIssuesData} />
      {/* <View style={styles.container}>
        <MyButton
          title="Check API data"
          onPress={() => console.log(typeof issuesData)}
        />
      </View> */}
      <IssuesList navigation={navigation} route={route} />
      <Navigation />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
