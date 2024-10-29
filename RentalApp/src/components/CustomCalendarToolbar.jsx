import React from 'react';


// Mukautettu Toolbar
const CustomCalendarToolbar = (props) => {
    const goToBack = () => {
        props.onNavigate('PREV');
    };

    const goToNext = () => {
        props.onNavigate('NEXT');
    };

    const goToCurrent = () => {
        props.onNavigate('TODAY');
    };

    return (
        <div className="custom-toolbar">
            <button onClick={goToBack}>Edellinen</button>
            <button onClick={goToNext}>Seuraava</button>
            <button onClick={goToCurrent}>Tänään</button>
            {/* Poista tai muokkaa muita nappeja tarpeen mukaan */}
        </div>
    );
};
export default CustomCalendarToolbar;
