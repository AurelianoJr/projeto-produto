import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bodyBox: {
    height: "100%",
    width: "100%",
  },
  welcomeText: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 24,
    paddingTop: 50,
  },
  loginText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 40,
    paddingLeft: 12,
  },
  buttonText: {
    alignSelf: "flex-end",
    color: "#9F51D9",
    paddingRight: 12,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
  },
  iconButton: {
    backgroundColor: "#392B44",
    padding: 14,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  loginWithBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  inputUserBox: {
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 5,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userinput: {
    alignItems: "center",
    height: 40,
    width: "100%",
    padding: 5,
  },
  inputPasswordBox: {
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 5,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    alignItems: "center",
    height: 40,
    width: "100%",
    padding: 5,
  },
  entryButton: {
    backgroundColor: "#9F51D9",
    padding: 15,
    borderRadius: 5,
    margin: 8,
  },
  entryButtonText: {
    alignSelf: "center",
    color: "#fff",
  },
});

export default styles;
