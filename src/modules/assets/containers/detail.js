import { fetchAssetsDetail, initDetail } from "../../../actions";
import Detail from "../components/detail.tsx";
import { connect } from "react-redux";

const mapStateToProps = state => ({
	collectionName: state.detail.collection.name || "",
	name: state.detail.name,
	image_url: state.detail.image_url,
	description: state.detail.description,
	permalink: state.detail.permalink
});

const mapDispatchToProps = {
	fetchAssetsDetail,
	initDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
