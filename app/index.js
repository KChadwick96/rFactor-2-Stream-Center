

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

    drivers.forEach((driver, index) => {
        const live = (driver.live) ? '<span class="live">Live</span>' : '';
        const html = `<div class="col-sm-6 col-md-4 col-lg-3 mb-2">
            <div class="card" data-driver-slot="1">
                <div class="card-body p-2">
                    <h5 class="card-title d-inline">
                        ${driver.name}
                    </h5>
                    ${live}
                    <div class="w-100 mt-1">${cameraButtons}</div>
                </div>
            </div>
        </div>`;
        const element = $(html);

        $('#drivers').append(element);
    });
}

function getCameraButtons() {
    let buttons = '';
    CAMERAS.forEach(camera => {
        const html = `<div class="w-50 d-inline-block px-1 pt-1">
            <button class="btn btn-${camera.class} btn-sm w-100">
                ${camera.name}
            </button>
        </div>`;
        buttons += html;
    });

    return buttons;
}