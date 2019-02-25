import { responsiveSize } from '../../../utils/dimensions';

export default {
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 99999999,
    paddingHorizontal: responsiveSize(30),
    paddingVertical: responsiveSize(12),
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    paddingTop: responsiveSize(10),
    paddingBottom: responsiveSize(10),
    marginRight: responsiveSize(20),
  },
  iconOnly: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRight: {
    paddingTop: responsiveSize(10),
    paddingBottom: responsiveSize(10),
    marginLeft: responsiveSize(32),
  },
};
