import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bodyBox: {
    backgroundColor: "#131015",
    height: "100%",
    width: "100%",
  },
  titleText: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 15,
    paddingRight: 100,
  },
  Header: {
    alignContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 50,
    paddingLeft: 12,
  },
  box: {
    paddingTop: 25,
  },
  input: {
    height: 45,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#8A8989",
    borderRadius: 15,
  },
  container: {
    flex: 1,
  },
  profile: {
    padding: 35,
    backgroundColor: "#8A8989",
  },
  iconBox: {
    margin: 1,
    alignItems: "flex-start",
    borderRadius: 100,
    paddingLeft: 900,
  },
  engineButton: {
    padding: 10,
    marginLeft: 25,
    backgroundColor: "#9F51D9",
    borderRadius: 100,
  },
});

export default styles;
