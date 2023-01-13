import React from 'react'
import Select from 'react-select'

const LangSwitch = () => {
    // const languages = [
    //     { value: 'ja', label: 'Ja' },
    //     { value: 'en', label: 'En' }
    // ];
    const languages = ['ja', 'en'];

    function updateLanguage(visiblelanguage) {
        const hiddenElements = document.getElementsByClassName('hidden');
        if (hiddenElements.length !== 0)
        Array.from(hiddenElements).forEach((hiddenElement) => {
            hiddenElement.classList.remove('hidden');
        });
        const hideLanguages = languages.filter(
            (language) => language !== visiblelanguage
        );
        hideLanguages.forEach((language) => {
            console.log(language);
            const hideElements = document.getElementsByClassName(language);
            if (hiddenElements.length !== 0)
                Array.from(hideElements).forEach((hideElement) => {
                    hideElement.classList.add('hidden');
                });
        });
    }

    function onLanguageChange(event) {
        const language = event.target.value;
        updateLanguage(language);
        // console.log('onLanguageChange');
        localStorage.setItem('language', language);
    }
    
    function setLanguageOnLoad() {
        const language = localStorage.getItem('language');
        const languageSelect = document.getElementById('language-select');
        languageSelect.addEventListener('change', onLanguageChange);
        // console.log(languageSelect);
        languageSelect.value = language ? language : languages[0];
        updateLanguage(languageSelect.value);
    }

    // setLanguageOnLoad();

    // document.addEventListener('DOMContentLoaded', function() {
    //     console.log('loaded');
    //     setLanguageOnLoad();
    // });

    return (
        <div className='flex mx-auto'>
            {/* <Select id='language-select' name='Language' options={languages} placeholder='Language' defaultValue={{label:'Ja', value:'ja'}} onChange={setLanguageOnLoad} /> */}
            <select name='Language' id='language-select' onChange={setLanguageOnLoad}>
                <option value={'ja'}>Ja</option>
                <option value={'en'}>En</option>
            </select>
        </div>
    )
}

export default LangSwitch