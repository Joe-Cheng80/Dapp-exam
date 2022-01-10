import { fetchAssetsDetail, initDetail } from "../../../actions";
import Detail from "../components/detail";
import { connect } from "react-redux";
import { RootState } from "../../../reducers";

const mapStateToProps = (state:RootState) => ({
	collectionName: state.assets.detail.collection.name || "",
	name: state.assets.detail.name,
	image_url: state.assets.detail.image_url,
	description: state.assets.detail.description,
	permalink: state.assets.detail.permalink
});

const mapDispatchToProps = {
	fetchAssetsDetail,
	initDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
