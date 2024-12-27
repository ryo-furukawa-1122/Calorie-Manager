import React, { useState, useEffect } from 'react';

const AddToHomeScreenButton = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handler = (e) => {
            console.log('beforeinstallprompt event triggered'); // イベント発火をログで確認
            e.preventDefault();
            setDeferredPrompt(e);
            setIsVisible(true); // ボタンを表示
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const handleAddToHomeScreen = () => {
        if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
            } else {
            console.log('User dismissed the A2HS prompt');
            }
            setDeferredPrompt(null);
            setIsVisible(false); // ボタンを非表示
        });
        }
    };

    return (
        isVisible && (
        // <button onClick={handleAddToHomeScreen}>
        //     ホーム画面に追加
        // </button>
        <button onClick={handleAddToHomeScreen} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg class="fill-current w-4 h-4 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span></span>
            {/* <span className='ja'>ホームに追加</span>
            <span className='en hide'>Add to home</span> */}
        </button>
        )
    );
};

export default AddToHomeScreenButton;