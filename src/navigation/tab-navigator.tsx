import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { StaticParamList } from '@react-navigation/native';

import { RegisterClientScreen } from '~/screens/RegisterClient';
import { ListContactsScreen } from '~/screens/ListContacts';
import { ListClientsScreen } from '~/screens/ListClients';
import { TotalizerScreen } from '~/screens/Totalizer';
import { RegisterContactScreen } from '~/screens/RegisterContacts';

const StackClient = createStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    ListClients: {
      screen: ListClientsScreen,
    },
    RegisterClient: {
      screen: RegisterClientScreen,
    },
  },
});

const StackContact = createStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    ListContacts: {
      screen: ListContactsScreen,
    },
    RegisterContact: {
      screen: RegisterContactScreen,
    },
  },
});

const Tab = createBottomTabNavigator({
  screenOptions: function ScreenOptions() {
    return {
      tabBarActiveTintColor: 'black',
      headerShown: false,
    };
  },

  screens: {
    Home: {
      screen: TotalizerScreen,
      options: { tabBarIcon: () => <MaterialIcons name="home" size={24} /> },
    },
    TabClient: {
      screen: StackClient,
      options: { tabBarIcon: () => <MaterialIcons name="people" size={24} />, title: 'Clientes' },
    },
    TabContact: {
      screen: StackContact,
      options: {
        tabBarIcon: () => <MaterialCommunityIcons name="contacts" size={24} />,
        title: 'Contatos',
      },
    },
  },
});

export type ClientNavigatorParamList = StaticParamList<typeof StackClient>;
export type ContactNavigatorParamList = StaticParamList<typeof StackContact>;

export default Tab;
