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
  bodyTitleRegular: {
    fontSize: normalize(18),
    fontFamily: fonts.regular,
  },
  //
  // ─── BOLD ───────────────────────────────────────────────────────────────────────
  //
  bodyBold: {
    fontSize: normalize(12),
    fontFamily: fonts.bold,
  },
  loginLink: {
    fontSize: normalize(14),
    fontFamily: fonts.bold,
  },
  bodyTitle: {
    fontSize: normalize(16),
    fontFamily: fonts.bold,
  },
  scaledLoginLink: {
    fontSize: normalize(24),
    fontFamily: fonts.bold,
  },
  bigTitle: {
    fontSize: normalize(26),
    fontFamily: fonts.bold,
  },
  homeNumber: {
    fontSize: normalize(160),
    fontFamily: fonts.bold,
  },
  bigBody: {
    fontSize: normalize(30),
    fontFamily: fonts.bold,
  },
  vigitScore: {
    fontSize: normalize(72),
    fontFamily: fonts.bold,
  },
};
