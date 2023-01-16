const scene = new THREE.Scene();

const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 400;
const cameraHeight = cameraWidth / aspectRatio;

const camera = new THREE.OrthographicCamera( cameraWidth / -2, cameraWidth / 2, cameraHeight / 2, cameraHeight / -2, 0, 1000 );

camera.position.set(100, 150, 150);
camera.lookAt(0, 2, 0);

const renderer = new THREE.WebGLRenderer();
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(200, 500, 300);
scene.add(directionalLight); 

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );


function roomWall(){

    const wallGeometry = new THREE.BoxGeometry(180, 60, 10);
    const wallMaterial = new THREE.MeshBasicMaterial({ color: "#EDDFCC"});
    const wall = new THREE.Mesh(wallGeometry, wallMaterial);
    return wall;
}

function roomFloor(){
    const floor = new THREE.Group();

    const floorPlaneGeometry = new THREE.PlaneGeometry(180,175,30,30);
    const floorMaterial = new THREE.MeshLambertMaterial({color: "#80674B"});
    const floorBase = new THREE.Mesh(floorPlaneGeometry, floorMaterial);
    floorBase.material.side = THREE.DoubleSide;
    floorBase.rotation.x= 11;
    floorBase.position.y= -22;
    floor.add(floorBase);

    const leftWall = roomWall();
    leftWall.rotation.y = 190;
    leftWall.position.set(-87, 10);
    floor.add(leftWall);

    const rightWall = roomWall();
    rightWall.rotation.y = -110;
    rightWall.position.set(5 ,4,-87);
    floor.add(rightWall);

    return floor;
}
const floor = roomFloor();
scene.add(floor);

function roomWindow(){
    const window = new THREE.Group();

    const windowFrameGeometry = new THREE.BoxBufferGeometry(40, 45);
    const windowFrameMaterial = new THREE.MeshLambertMaterial({color: "#B0ADB4"});
    const windowFrame = new THREE.Mesh(windowFrameGeometry, windowFrameMaterial);
    windowFrame.position.set(0,10,-0.5);
    window.add(windowFrame);

    const curtainRailGeometry = new THREE.BoxBufferGeometry(53, 3);
    const curtainRailMaterial = new THREE.MeshLambertMaterial({color: "#734C14"});
    const curtainRail = new THREE.Mesh(curtainRailGeometry, curtainRailMaterial);
    curtainRail.position.set(-4,33,1);
    window.add(curtainRail);

    const windowCurtainGeometry = new THREE.BoxBufferGeometry(30,50);
    const windowCurtainMaterial = new THREE.MeshLambertMaterial({color: "#B79AC8"});
    const windowCurtain = new THREE.Mesh(windowCurtainGeometry,windowCurtainMaterial);
    windowCurtain.position.set(-7,12,1);
    window.add(windowCurtain);

    const photoOneGeometry = new THREE.BoxGeometry(15,10,1);
    const photoOneMaterial = new THREE.MeshPhongMaterial({color: "#CF7646"});
    const photoOne = new THREE.Mesh(photoOneGeometry, photoOneMaterial);
    photoOne.position.set(-80,25,3)
    window.add(photoOne);

    const photoTwoGeometry = new THREE.BoxGeometry(15,10,1);
    const photoTwoMaterial = new THREE.MeshPhongMaterial({color: "#F1CB64"});
    const photoTwo = new THREE.Mesh(photoTwoGeometry, photoTwoMaterial);
    photoTwo.position.set(-100,25,3)
    window.add(photoTwo);

    const airConditionerGeometry = new THREE.BoxGeometry(35,10,7);
    const airConditionerMaterial = new THREE.MeshPhongMaterial({color: "#CECECE"});
    const airConditioner = new THREE.Mesh(airConditionerGeometry, airConditionerMaterial);
    airConditioner.position.set(-55,37,3)
    window.add(airConditioner);

    const ACFrameGeometry = new THREE.BoxGeometry(25,3,1);
    const ACFrameMaterial = new THREE.MeshPhongMaterial({color: "#9C9C9C"});
    const ACFrame = new THREE.Mesh(ACFrameGeometry, ACFrameMaterial);
    ACFrame.position.set(-60,37,6.7)
    window.add(ACFrame);


    return window;
}
const WallWindow = roomWindow();
WallWindow.rotation.y= 190;
WallWindow.position.set(-80, 7,-12);
scene.add(WallWindow);

function SingleBed(){
    const bed = new THREE.Group();

    const bedFoamGeometry = new THREE.BoxBufferGeometry(40,10,60);
    const bedFoamMaterial = new THREE.MeshPhongMaterial({color: "#A2D0D2"});
    const bedFoam = new THREE.Mesh(bedFoamGeometry, bedFoamMaterial);
    bedFoam.position.z = 15;
    bed.add(bedFoam);

    const bedBaseGeometry = new THREE.BoxGeometry(40, 10, 60);
    const bedBaseMaterial = new THREE.MeshPhongMaterial({color: "#D0BCD5"});
    const bedBase = new THREE.Mesh(bedBaseGeometry, bedBaseMaterial);
    bedBase.position.set(0,10,15);
    bed.add(bedBase);

    const bedPillowGeometry = new THREE.BoxGeometry(5,3,40);
    const bedPillowMaterial = new THREE.MeshPhongMaterial({color: "#EFDDBB"});
    const bedPillow = new THREE.Mesh(bedPillowGeometry,bedPillowMaterial);
    bedPillow.position.set(-10,30,30)
    bed.add(bedPillow);

    const carpetGeometry = new THREE.CircleGeometry(30,32,0,6.8);
    const carpetMaterial = new THREE.MeshBasicMaterial({color: "#CCC6A7"});
    const carpet = new THREE.Mesh(carpetGeometry,carpetMaterial);
    carpet.rotation.x= 80;
    carpet.position.set(10,-10,-40)
    bed.add(carpet);

    return bed;
}
const bed = SingleBed();
bed.scale.x = 2;
bed.rotation.y = 0;
bed.position.set(-40,-5,50);
scene.add(bed);

function studyTable(){
    const table = new THREE.Group();

    const tableFrameGeometry = new THREE.BoxBufferGeometry(50,3,25);
    const tableFrameMaterial = new THREE.MeshLambertMaterial({color: "#D6BF9C"});
    const tableFrame = new THREE.Mesh(tableFrameGeometry,tableFrameMaterial);
    table.add(tableFrame);

    const tableStandLeftGeometry = new THREE.BoxBufferGeometry(24,25);
    const tableStandLeftMaterial = new THREE.MeshLambertMaterial({color: "#191918"});
    const tableStandLeft = new THREE.Mesh(tableStandLeftGeometry,tableStandLeftMaterial);
    tableStandLeft.rotation.y= -300;
    tableStandLeft.position.set (-18,-14,0);
    table.add(tableStandLeft);

    const tableStandRightGeometry = new THREE.BoxBufferGeometry(24,25);
    const tableStandRightMaterial = new THREE.MeshLambertMaterial({color: "#191918"});
    const tableStandRight = new THREE.Mesh(tableStandRightGeometry,tableStandRightMaterial);
    tableStandRight.rotation.y= -300;
    tableStandRight.position.set (18,-14,0);
    table.add(tableStandRight);

    const LaptopGeometry = new THREE.BoxBufferGeometry(15,10,2);
    const LaptopMaterial = new THREE.MeshLambertMaterial({color: "#191918"});
    const Laptop = new THREE.Mesh(LaptopGeometry, LaptopMaterial);
    Laptop.rotation.x= 100;
    Laptop.position.set (5,12,0);
    table.add(Laptop);

    const LaptopSGeometry = new THREE.BoxBufferGeometry(13,7,1);
    const LaptopSMaterial = new THREE.MeshLambertMaterial({color: "#E5E5E5"});
    const LaptopS = new THREE.Mesh(LaptopSGeometry, LaptopSMaterial);
    LaptopS.rotation.x= 100;
    LaptopS.position.set (5,12.5,0.5);
    table.add(LaptopS);

    const LaptopBGeometry = new THREE.BoxBufferGeometry(15,10,2);
    const LaptopBMaterial = new THREE.MeshLambertMaterial({color: "#191918"});
    const LaptopB = new THREE.Mesh(LaptopBGeometry, LaptopBMaterial);
    LaptopB.rotation.x= 80;
    LaptopB.position.set (10,2,2);
    table.add(LaptopB);

    const LaptopKeysGeometry = new THREE.BoxBufferGeometry(12,7,1);
    const LaptopKeysMaterial = new THREE.MeshLambertMaterial({color: "#CC5353"});
    const LaptopKeys = new THREE.Mesh(LaptopKeysGeometry, LaptopKeysMaterial);
    LaptopKeys.rotation.x= 80;
    LaptopKeys.position.set (10,2.8,3);
    table.add(LaptopKeys);

    const chairHeadGeometry = new THREE.BoxBufferGeometry(20,30,3);
    const chairHeadMaterial = new THREE.MeshLambertMaterial({color: "#78D8CE"});
    const chairHead = new THREE.Mesh(chairHeadGeometry, chairHeadMaterial);
    chairHead.rotation.x= -100;
    chairHead.position.set (5,0,40);
    table.add(chairHead);

    const chairSeatGeometry = new THREE.BoxBufferGeometry(20,20,3);
    const chairSeatMaterial = new THREE.MeshLambertMaterial({color: "#324747"});
    const chairSeat = new THREE.Mesh(chairSeatGeometry, chairSeatMaterial);
    chairSeat.rotation.x= 80;
    chairSeat.position.set (5,-15,23);
    table.add(chairSeat);

    const chairCylinderGeometry = new THREE.CylinderGeometry(3, 3, 10, 32);
    const chairCylinderMaterial = new THREE.MeshLambertMaterial({color: "#272727"});
    const chairCylinder = new THREE.Mesh(chairCylinderGeometry, chairCylinderMaterial);
    chairCylinder.rotation.x= 110;
    chairCylinder.position.set (0,-20,25);
    table.add(chairCylinder);

    const chairBaseGeometry = new THREE.BoxBufferGeometry(15,15,3);
    const chairBaseMaterial = new THREE.MeshLambertMaterial({color: "#272727"});
    const chairBase = new THREE.Mesh(chairBaseGeometry, chairBaseMaterial);
    chairBase.rotation.x= 80;
    chairBase.position.set (0,-25,25);
    table.add(chairBase);

    return table;
}
const roomTable = studyTable();
roomTable.rotation.y= 190;
roomTable.position.set(-65, 10,-12);
scene.add(roomTable);

function CabinetArea() {
    const cabinet = new THREE.Group();

    const UpperCabinetGeometry = new THREE.BoxBufferGeometry(120,10,20);
    const UpperCabinetMaterial = new THREE.MeshLambertMaterial({color: "#DAADD6"});
    const UpperCabinet = new THREE.Mesh(UpperCabinetGeometry,UpperCabinetMaterial);
    cabinet.add(UpperCabinet);

    const FrameOneGeometry = new THREE.BoxBufferGeometry(3,71,21);
    const FrameOneMaterial = new THREE.MeshLambertMaterial({color: "#FFFFFF"});
    const FrameOne = new THREE.Mesh(FrameOneGeometry,FrameOneMaterial);
    FrameOne.position.set(-20,-30,-2)
    cabinet.add(FrameOne);

    const MiddleCabinetGeometry = new THREE.BoxBufferGeometry(120,35,20);
    const MiddleCabinetMaterial = new THREE.MeshLambertMaterial({color: "#D3BCE7"});
    const MiddleCabinet = new THREE.Mesh(MiddleCabinetGeometry,MiddleCabinetMaterial);
    MiddleCabinet.position.set(0,-22,0)
    cabinet.add(MiddleCabinet);

    const FrameTwoGeometry = new THREE.BoxBufferGeometry(3,71,21);
    const FrameTwoMaterial = new THREE.MeshLambertMaterial({color: "#FFFFFF"});
    const FrameTwo = new THREE.Mesh(FrameTwoGeometry,FrameTwoMaterial);
    FrameTwo.position.set(20,-30,-2)
    cabinet.add(FrameTwo);

    const LowerCabinetGeometry = new THREE.BoxBufferGeometry(120,22,20);
    const LowerCabinetMaterial = new THREE.MeshLambertMaterial({color: "#DAADD6"});
    const LowerCabinet = new THREE.Mesh(LowerCabinetGeometry,LowerCabinetMaterial);
    LowerCabinet.position.set(0,-50,0)
    cabinet.add(LowerCabinet);

    const HolderOneGeometry = new THREE.BoxBufferGeometry(3,5,3);
    const HolderOneMaterial = new THREE.MeshLambertMaterial({color: "#FFFFFF"});
    const HolderOne = new THREE.Mesh(HolderOneGeometry,HolderOneMaterial);
    HolderOne.position.set(-30,-30,-10)
    cabinet.add(HolderOne);

    const HolderTwoGeometry = new THREE.BoxBufferGeometry(3,5,3);
    const HolderTwoMaterial = new THREE.MeshLambertMaterial({color: "#FFFFFF"});
    const HolderTwo = new THREE.Mesh(HolderTwoGeometry,HolderTwoMaterial);
    HolderTwo.position.set(10,-30,-10)
    cabinet.add(HolderTwo);

    const HolderThreeGeometry = new THREE.BoxBufferGeometry(3,5,3);
    const HolderThreeMaterial = new THREE.MeshLambertMaterial({color: "#FFFFFF"});
    const HolderThree= new THREE.Mesh(HolderThreeGeometry,HolderThreeMaterial);
    HolderThree.position.set(30,-30,-10)
    cabinet.add(HolderThree);

    const BookShelveGeometry = new THREE.BoxBufferGeometry(10,50,30);
    const BookShelveMaterial = new THREE.MeshLambertMaterial({color: "#EDEDED"});
    const BookShelve = new THREE.Mesh(BookShelveGeometry,BookShelveMaterial);
    BookShelve.rotation.y= 220;
    BookShelve.position.set(-100,-30,-70)
    cabinet.add(BookShelve);

    return cabinet;
}
const roomCabinet = CabinetArea();
roomCabinet.rotation.y= -110;
roomCabinet.position.set(-15,37,-73);
scene.add(roomCabinet);

function doorArea () {
    const door = new THREE.Group();

    const bedroomDoorGeometry = new THREE.BoxBufferGeometry(25,70,3);
    const bedroomDoorMaterial = new THREE.MeshLambertMaterial({color: "#FFFFFF"});
    const bedroomDoor = new THREE.Mesh(bedroomDoorGeometry,bedroomDoorMaterial);
    door.add(bedroomDoor);

    const DoorKnobGeometry  = new THREE.BoxBufferGeometry(5,2,2);
    const DoorKnobMaterial = new THREE.MeshLambertMaterial({color: "#CCC8CF"});
    const DoorKnob = new THREE.Mesh(DoorKnobGeometry,DoorKnobMaterial);
    DoorKnob.position.set(2,10,-10)
    door.add(DoorKnob);

    return door;
}
const roomDoor = doorArea();
roomDoor.rotation.y=-110;
roomDoor.rotation.y= -110;
roomDoor.position.set(70,10,-78);
scene.add(roomDoor);

renderer.render(scene, camera);









