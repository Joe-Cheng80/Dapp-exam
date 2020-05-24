import AssetsEntry from "../components/assetsEntry";
import { connect } from "react-redux";

const mapStateToProps = state => ({
	account: state.account
});

export default connect(mapStateToProps, null)(AssetsEntry);
