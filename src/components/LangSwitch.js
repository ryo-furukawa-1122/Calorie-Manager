import React from 'react'
// import Select from 'react-select'

const LangSwitch = () => {
    // const languages = [
    //     { value: 'ja', label: 'Ja' },
    //     { value: 'en', label: 'En' }
    // ];
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
            // console.log(hideElements);
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
        // console.log('onLanguageChange');
        localStorage.setItem('language', language);
    }
    
    function setLanguageOnLoad() {
        console.log('Loaded');
        const language = localStorage.getItem('language');
        const languageSelect = document.getElementById('language-select');
        languageSelect.addEventListener('change', onLanguageChange);
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
            <select className='dark:text-slate-700 rounded' name='Language' id='language-select' onClick={setLanguageOnLoad}>
                <option value={'ja'}>Ja</option>
                <option value={'en'}>En</option>
            </select>
        </div>
    )
}

export default LangSwitch