import {StyleSheet} from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black_100,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    fontFamily: 'Fira Sans',
    textAlign: 'center',
    color: colors.white,
    marginTop: 18,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.blue_light,
    marginBottom: 50,
    lineHeight: 35,
  },
  image: {
    width: '100%',
    height: 360,
  },
});

export default styles;
