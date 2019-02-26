import fonts from '../../../theme/fonts';
import { normalize } from '../../../utils/dimensions';

export default {
  //
  // ─── REGULAR ────────────────────────────────────────────────────────────────────
  //
  inputLabel: {
    fontSize: normalize(11),
    fontFamily: fonts.regular,
  },
  body: {
    fontSize: normalize(12),
    fontFamily: fonts.regular,
  },
  midBody: {
    fontSize: normalize(13),
    fontFamily: fonts.regular,
  },
  bodyTitle: {
    fontSize: normalize(18),
    fontFamily: fonts.regular,
  },
  title: {
    fontSize: normalize(20),
    fontFamily: fonts.regular,
  },
  //
  // ─── BOLD ───────────────────────────────────────────────────────────────────────
  //
  bodyBold: {
    fontSize: normalize(12),
    fontFamily: fonts.bold,
  },
  loginLinkBold: {
    fontSize: normalize(14),
    fontFamily: fonts.bold,
  },
  bodyTitleBold: {
    fontSize: normalize(16),
    fontFamily: fonts.bold,
  },
  scaledLoginLinkBold: {
    fontSize: normalize(24),
    fontFamily: fonts.bold,
  },
  bigTitleBold: {
    fontSize: normalize(26),
    fontFamily: fonts.bold,
  },
  bigBodyBold: {
    fontSize: normalize(30),
    fontFamily: fonts.bold,
  },
};
