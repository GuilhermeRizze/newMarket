import { SafeAreaView , StatusBar, View} from 'react-native';
import Rotas from './src/routes/rotas';

export default function App() {
  return (<View style={{flex: 1}}>
    <SafeAreaView/>
      <Rotas/>
      <StatusBar/>
    </View>
  );
}
