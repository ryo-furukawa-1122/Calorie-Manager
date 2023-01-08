import React from 'react'
import Select from 'react-select'

const LangSwitch = () => {
    const languages = [
        { value: 'ja', label: 'Ja' },
        { value: 'en', label: 'En' }
    ];
    function updateLanguage(visiblelanguage) {
        const hiddenElements = document.getElementsByClassName('hidden');
        if (hiddenElements.length != 0)
        Array.from(hiddenElements).forEach((hiddenElements) => {
            hiddenElements.classList.remove('hidden');
        });
        const hideLanguages = languages.filter(
            (language) => language !== visiblelanguage
        );
        hideLanguages.forEach((language) => {
            if (hiddenElements.length !== 0)
            Array.from(hiddenElements).forEach((hideElement) => {
                hideElement.classList.add('hidden');
            });
        })
    }

    function onLanguageChange(event) {
        const language = event.target.value;
        updateLanguage(language);
        localStorage.setItem('language', language);
    }

    function setLanguageOnLoad() {
        const language = localStorage.getItem('language');
        const languageSelect = document.getElementById('language-select');
        languageSelect.addEventListener('change', onLanguageChange);
        languageSelect.value = language ? language : languages[0];
        updateLanguage(languageSelect.value);
    }

// document.onLoad = setLanguageOnLoad();

    return (
        <div className='flex mx-auto'>
            <Select id='language-select' options={languages} placeholder='Language' />
        </div>
    )
}

export default LangSwitch