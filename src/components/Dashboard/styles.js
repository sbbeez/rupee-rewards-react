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
  textView: { flex: 1, alignItems: "center" }
};
