const Mustache = require('mustache');

const CAMERAS = [
    {
        id: 'scv_nosecam',
        name: 'Nosecam',
        class: 'primary'
    },
    {
        id: 'scv_swingman',
        name: 'Swingman',
        class: 'secondary'
    },
    {
        id: 'scv_onboard001',
        name: 'TCAM Left',
        class: 'success'
    },
    {
        id: 'scv_onboard002',
        name: 'TCAM Rear',
        class: 'danger'
    },
    {
        id: 'scv_onboard003',
        name: 'Left Airbox',
        class: 'warning'
    },
    {
        id: 'scv_onboard004',
        name: 'Helicopter',
        class: 'info'
    }
];

const drivers = [
    {name: 'Kieran Chadwick', live: false},
    {name: 'Craig Baxter', live: true},
    {name: 'Sam Carpenter', live: false},
    {name: 'Scott Davison', live: false}
];

renderDrivers();

function renderDrivers() {
    const cameraButtons = getCameraButtons();

    const template = $('#driver-template').html();

    let driversHtml = '';
    drivers.forEach((driver, index) => {
        const selected = (driver.live) ? 'driver--selected' : '';
        driversHtml += Mustache.to_html(template, {
            name: driver.name,
            selected,
            buttons: cameraButtons
        });
    });

    $('#drivers').html(driversHtml);
}

function getCameraButtons() {
    const template = $('#camera-button-template').html();

    let buttons = '';
    CAMERAS.forEach(camera => {
        Mustache.render
        buttons += Mustache.render(template, {
            name: camera.name,
            class: camera.class
        });
    });

    return buttons;
}