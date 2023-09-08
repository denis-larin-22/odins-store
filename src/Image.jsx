import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';

const ImageComponent = () => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child('images/your-image.jpg'); // Replace with your image path

        imageRef
            .getDownloadURL()
            .then((url) => {
                setImageUrl(url);
            })
            .catch((error) => {
                console.error('Error getting download URL:', error);
            });
    }, []);

    return (
        <div>
            <img src={imageUrl} alt="Your" />
        </div>
    );
};

export default ImageComponent;
