async function load3dModels(map) {
    const THREE = window.THREE;
    const clock = new THREE.Clock();
    const models = [];

    /*
    * Helper function used to get threejs-scene-coordinates from mercator coordinates.
    * This is just a quick and dirty solution - it won't work if points are far away from each other
    * because a meter near the north-pole covers more mercator-units
    * than a meter near the equator.
    */
    function calculateDistanceMercatorToMeters(from, to) {
        const mercatorPerMeter = from.meterInMercatorCoordinateUnits();
        // mercator x: 0=west, 1=east
        const dEast = to.x - from.x;
        const dEastMeter = dEast / mercatorPerMeter;
        // mercator y: 0=north, 1=south
        const dNorth = from.y - to.y;
        const dNorthMeter = dNorth / mercatorPerMeter;
        return { dEastMeter, dNorthMeter };
    }

    async function loadModel() {
        const loader = new THREE.GLTFLoader();
        const gltf = await loader.loadAsync('https://sig.strasbourg.eu/datastrasbourg/fig2024/3d/windturbine/windturbine.gltf');
        const model = gltf.scene;
        return { "model": model, "animation": gltf.animations[0] };
    }

    function animate() {
        const delta = clock.getDelta();
        for (const mod of models) mod.mixer.update(delta + mod.delta);
    }

    // parameters to ensure the model is georeferenced correctly on the map
    const sceneOrigin = [7.063867, 48.354804];
    const sceneAltitude = 0;

    const sceneAsMercatorCoordinate = maplibregl.MercatorCoordinate.fromLngLat(
        sceneOrigin,
        sceneAltitude
    );

    // transformation parameters to position, rotate and scale the 3D model onto the map
    const sceneTransform = {
        translateX: sceneAsMercatorCoordinate.x,
        translateY: sceneAsMercatorCoordinate.y,
        translateZ: sceneAsMercatorCoordinate.z,
        /* Since our 3D model is in real world meters, a scale transform needs to be
        * applied since the CustomLayerInterface expects units in MercatorCoordinates.
        */
        scale: sceneAsMercatorCoordinate.meterInMercatorCoordinateUnits()
    };

    // configuration of the custom layer for a 3D model per the CustomLayerInterface
    const threejsLayer = {
        id: '3d-models',
        type: 'custom',
        renderingMode: '3d',

        onAdd(map, gl) {
            this.camera = new THREE.Camera();
            this.scene = new THREE.Scene();

            // In threejs, y points up - we're rotating the scene such that it's y points along maplibre's up.
            this.scene.rotateX(Math.PI / 2);
            // In threejs, z points toward the viewer - mirroring it such that z points along maplibre's north.
            this.scene.scale.multiply(new THREE.Vector3(1, 1, -1));
            // We now have a scene with (x=east, y=up, z=north)

            // create two three.js lights to illuminate the model
            const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
            directionalLight.position.set(500, 70, 80).normalize();
            const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight2.position.set(-300, 70, -100).normalize();

            this.scene.add(directionalLight, directionalLight2);

            // Getting model x and y (in meters) relative to scene origin.
            const sceneOriginMercator = maplibregl.MercatorCoordinate.fromLngLat(sceneOrigin);
            for (const mod of models) {
                const modelMercator = maplibregl.MercatorCoordinate.fromLngLat(mod.location);
                const { dEastMeter: modelEast, dNorthMeter: modelNorth } = calculateDistanceMercatorToMeters(sceneOriginMercator, modelMercator);

                mod.model.position.set(modelEast, 0, modelNorth);
                mod.model.scale.set(1e-2, 1e-2, 1e-2);
                mod.model.rotation.y = mod.rotation;
                mod.mixer = new THREE.AnimationMixer(mod.model);
                mod.mixer.clipAction(mod.animation).play();

                this.scene.add(mod.model);
            };

            // use the MapLibre GL JS map canvas for three.js
            this.renderer = new THREE.WebGLRenderer({
                canvas: map.getCanvas(),
                context: gl,
                antialias: true
            });

            this.renderer.setAnimationLoop(animate);

            this.map = map;
            this.renderer.autoClear = false;
        },
        render(gl, matrix) {
            const m = new THREE.Matrix4().fromArray(matrix);
            const l = new THREE.Matrix4()
                .makeTranslation(
                    sceneTransform.translateX,
                    sceneTransform.translateY,
                    sceneTransform.translateZ
                )
                .scale(
                    new THREE.Vector3(
                        sceneTransform.scale,
                        -sceneTransform.scale,
                        sceneTransform.scale
                    )
                );

            this.camera.projectionMatrix = m.multiply(l);
            this.renderer.resetState();
            this.renderer.render(this.scene, this.camera);
            map.triggerRepaint();
        }
    };
    const results = await Promise.all([map.once('style.load'), loadModel()]);
    const model1 = results[1].model;
    const animation1 = results[1].animation;
    models.push(
        { "model": model1, "animation": animation1, "location": [7.058704, 48.3540463], "rotation": Math.PI / 2, "delta": 0 },
        { "model": model1.clone(), "animation": animation1.clone(), "location": [7.0568643, 48.3562726], "rotation": Math.PI / 2 + 0.2, "delta": 0.0055 },
        { "model": model1.clone(), "animation": animation1.clone(), "location": [7.0543917, 48.3582271], "rotation": Math.PI / 2 + 0.5, "delta": 0.005 },
        { "model": model1.clone(), "animation": animation1.clone(), "location": [7.0525439, 48.3614175], "rotation": Math.PI / 2 + 0.8, "delta": -0.004 },
        { "model": model1.clone(), "animation": animation1.clone(), "location": [7.0503874, 48.3640347], "rotation": Math.PI / 2 + 1, "delta": 0.0045 },
        { "model": model1.clone(), "animation": animation1.clone(), "location": [7.0854654, 48.3497731], "rotation": Math.PI / 2 + 1, "delta": 0.003 },
        { "model": model1.clone(), "animation": animation1.clone(), "location": [7.0807627, 48.3506651], "rotation": Math.PI / 2 + 1, "delta": -0.005 },
        { "model": model1.clone(), "animation": animation1.clone(), "location": [7.0766885, 48.3517839], "rotation": Math.PI / 2 + 1, "delta": 0 },
        { "model": model1.clone(), "animation": animation1.clone(), "location": [7.0908825, 48.3658215], "rotation": Math.PI / 2 - 0.7, "delta": -0.01 },
        { "model": model1.clone(), "animation": animation1.clone(), "location": [7.0883216, 48.3617928], "rotation": Math.PI / 2 - 0.5, "delta": -0.008 },
    );
    map.addLayer(threejsLayer);
}
