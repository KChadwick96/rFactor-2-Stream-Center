const Mustache = require('mustache');

const CAMERAS = [{
    id: 'scv_nosecam',
    name: 'Nosecam',
    class: 'primary'
},{
    id: 'scv_swingman',
    name: 'Swingman',
    class: 'secondary'
},{
    id: 'scv_onboard001',
    name: 'TCAM Left',
    class: 'success'
},{
    id: 'scv_onboard002',
    name: 'TCAM Rear',
    class: 'danger'
},{
    id: 'scv_onboard003',
    name: 'Left Airbox',
    class: 'warning'
},{
    id: 'scv_onboard004',
    name: 'Helicopter',
    class: 'info'
}];

const drivers = [
    {name: 'Kieran Chadwick', live: false, position: 1},
    {name: 'Craig Baxter', live: true, position: 2},
    {name: 'Sam Carpenter', live: false, position: 3},
    {name: 'Scott Davison', live: false, position: 4}
];

renderDrivers();

function renderDrivers() {
    const template = $('#driver-template').html();
    const cameraPartial = $('#camera-button-template').html();

    let driversHtml = '';
    drivers.forEach((driver, index) => {
        const data = {
            name: driver.name,
            position: driver.position,
            selected: (driver.live) ? 'driver--selected' : '',
            cameras: CAMERAS
        }
        const partials = {camera: cameraPartial};
        console.log(data);
        console.log(partials);
        driversHtml += Mustache.to_html(template, data, partials);
    });

    $('#drivers').html(driversHtml);
}