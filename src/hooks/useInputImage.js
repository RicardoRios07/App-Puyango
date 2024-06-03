import { useState } from 'react';

export const useInputImage = () => {
    const [loading, setLoading] = useState(false);
    const [src, setSrc] = useState('');
    const [file, setFile] = useState(null);

    const handleLoadImage = (event) => {
        const reader = new FileReader();
        const file = event.target.files[0];
        if (file) {
            setLoading(true);
            reader.onloadend = () => {
                setSrc(reader.result);
                setFile(file);
                setLoading(false);
            };
            reader.readAsDataURL(file);
        }
    };

    const resetImage = () => {
        setSrc('');
        setFile(null);
    };

    return { handleLoadImage, loading, src, file, resetImage };
};