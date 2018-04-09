const Mustache = require('mustache');
const SocketIO = require('socket.io');

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

let drivers = [];
let pause = false;

// create socket connection
const io = SocketIO(80);
io.on('connection', socket => {
    console.log('Client connected');

    socket.on('sessionData', data => {
        drivers = data;
        console.log(drivers);
        if (!pause) this.renderDrivers();
        pause = true;
    });
});

function renderDrivers() {
    const template = $('#driver-template').html();
    const cameraPartial = $('#camera-button-template').html();

    let driversHtml = '';
    drivers.forEach((driver, index) => {
        const data = {
            name: driver.driverName,
            position: driver.position,
            selected: (driver.focus) ? 'driver--selected' : '',
            cameras: CAMERAS
        }
        const partials = {camera: cameraPartial};
        driversHtml += Mustache.to_html(template, data, partials);
    });

    $('#drivers').html(driversHtml);
}