const Mustache = require('mustache');
const SocketIO = require('socket.io');

const CAMERAS = [{
    id: 'SCV_TRACKSIDE',
    name: 'Trackside'
}];

let drivers = [];
let pause = false;

// create socket connection
const io = SocketIO(80);
io.on('connection', socket => {
    console.log('Client connected');

    socket.on('sessionData', data => {
        drivers = data;
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
            slot_id: driver.slotID,
            position: driver.position,
            selected: (driver.focus) ? 'driver--selected' : '',
            cameras: CAMERAS
        }
        const partials = {camera: cameraPartial};
        driversHtml += Mustache.to_html(template, data, partials);
    });

    $('#drivers').html(driversHtml);

    $('.driver__camera').click(function() {
        const button = $(this);
        const camera = button.data('cameraId');
        const slotId = button.data('slotId');
        console.log(camera);
        console.log(slotId);
    
        io.emit('carSelect', {slot_id: slotId, camera});
    });
}