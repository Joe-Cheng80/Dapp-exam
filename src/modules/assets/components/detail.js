import React, { useCallback, useEffect } from "react";
import styles from "../styles/detail.module.scss";
import { useParams } from "react-router-dom";

const Detail = ({collectionName, name, image_url, description, permalink, fetchAssetsDetail, initDetail}) => {
	const params = useParams(); 
	useEffect(()=>{
		fetchAssetsDetail({
			asset_contract_address: params.contractAddress,
			token_ids: params.tokenId
		});
		return initDetail();
	}, [fetchAssetsDetail, params.contractAddress, params.tokenId])

	const handlePermalinkClick = useCallback(() => {
		window.location.href = permalink;
	}, [permalink])

	return (
		<div className={styles.detail}>
			<div className={styles.contentWrapper}>
				<h1>{collectionName}</h1>
				<div className={styles.imageWrapper}>
					<img className={styles.image} src={image_url} alt="" />
				</div>
				<h2>{name}</h2>
				<div className={styles.description}>{description}</div>
			</div>
			<div
				className={styles.permalink}
				onClick={handlePermalinkClick}
			>
				permalink
			</div>
		</div>
	);
}

export default Detail;
