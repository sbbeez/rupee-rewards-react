const valueText = { fontSize: 25, fontWeight: "bold", color: "#FFF" };
export default {
  cardDataView: {
    flexDirection: "row",
    backgroundColor: "#1890FF",
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#098",
    margin: 20,
    padding: 30
  },
  cardImage: { width: 50, height: 50 },
  valueText,
  cardHeadingText: { ...valueText, fontSize: 10 },
  textView: { flex: 1, alignItems: "center" }
};
