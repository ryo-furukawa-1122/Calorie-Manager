import React from 'react'

const LangSwitch = () => {
    const languages = ['ja', 'en'];

    function updateLanguage(visiblelanguage) {
        const hiddenElements = document.getElementsByClassName('hide');
        if (hiddenElements.length !== 0)
        Array.from(hiddenElements).forEach((hiddenElement) => {
            hiddenElement.classList.remove('hide');
        });
        const hideLanguages = languages.filter(
            (language) => language !== visiblelanguage
        );
        hideLanguages.forEach((language) => {
            const hideElements = document.getElementsByClassName(language);
            if (hideElements.length !== 0)
                Array.from(hideElements).forEach((hideElement) => {
                    console.log(hideElement);
                    hideElement.classList.add('hide');
                });
        });
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

    return (
        <div className='flex mx-auto'>
            <select className='rounded bg-slate-100 dark:bg-slate-600 cursor-pointer' name='Language' id='language-select' onClick={setLanguageOnLoad}>
                <option value={'ja'}>Ja</option>
                <option value={'en'}>En</option>
            </select>
        </div>
    )
}

export default LangSwitch