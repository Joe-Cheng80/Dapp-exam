import AssetsEntry from "../components/assetsEntry";
import { connect } from "react-redux";
import { RootState } from "../../../reducers";

const mapStateToProps = (state:RootState) => ({
	account: state.assets.account
});

export default connect(mapStateToProps, null)(AssetsEntry);
