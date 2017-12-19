import colors from "../../utils/colors";
const valueText = { fontSize: 25, fontWeight: "bold", color: colors.white };
export default {
  cardDataView: {
    flexDirection: "row",
    backgroundColor: colors.themeBlue,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.themeDarkBlue,
    margin: 20,
    padding: 30
  },
  cardImage: { width: 50, height: 50 },
  valueText,
  cardHeadingText: { ...valueText, fontSize: 10 },
  textView: { flex: 1, alignItems: "center" },
  legendBox: {
    backgroundColor: colors.themeBlueOne,
    width: 30,
    height: 30
  },
  legendView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  profileViews: {
    width: 600,
    margin: 30,
    backgroundColor: colors.white,
    height: 400
  },
  recentSignUpImage: { width: 80, height: 80, borderRadius: 100 }
};
