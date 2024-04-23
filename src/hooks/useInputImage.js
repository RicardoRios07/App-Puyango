import { useState } from "react"

export const useInputImage = () => {

	const [image, setImage] = useState({ src: '', loading: false })
	const { src, loading } = image

	const handleLoadImage = ({ target }) => {
		setImage({ src: '', loading: true })
		let reader = new FileReader();
		reader.onload = () => {
			setImage({ src: reader.result, loading: false })
		};
		try {
			reader.readAsDataURL(target.files[0]);
		} catch (error) { 
			
		}
	}
	const resetImage = () => {
		setImage({ src: '', loading: false })
	}
	return {
		handleLoadImage,
		src,
		loading,
		resetImage,
	}
}
