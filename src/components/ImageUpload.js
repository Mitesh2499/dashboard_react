import React, { useState } from 'react';

function ImageUpload() {
	const [image, setImage] = useState(null);
	const handleImage = (e) => {
		if (e.target.files && e.target.files[0]) {
			setImage(URL.createObjectURL(e.target.files[0]));
		}
	};

	return (
		<div>
			<h3>Image Upload</h3>
			<img className='profile_image' id='image' src={image} />
			<input type='file' onChange={handleImage} className='file' />
		</div>
	);
}

export default ImageUpload;
