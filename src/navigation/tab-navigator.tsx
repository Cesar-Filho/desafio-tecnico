import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TotalizerScreen } from '~/screens/Totalizer';
import { ListClientsScreen } from '~/screens/ListClients';
import { ListContactsScreen } from '~/screens/ListContacts';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator({
  screenOptions: function ScreenOptions() {
    return {
      tabBarActiveTintColor: 'black',
      headerShown: false,
    };
  },

  screens: {
    Totalizer: {
      screen: TotalizerScreen,
      options: { tabBarIcon: () => <MaterialIcons name="home" size={24} /> },
    },
    ListClients: {
      screen: ListClientsScreen,
      options: { tabBarIcon: () => <MaterialIcons name="people" size={24} /> },
    },
    ListContacts: {
      screen: ListContactsScreen,
      options: { tabBarIcon: () => <MaterialCommunityIcons name="contacts" size={24} /> },
    },
  },
});

export default Tab;
