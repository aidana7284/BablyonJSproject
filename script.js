            window.addEventListener('DOMContentLoaded', function () {
                    var canvas = document.getElementById('canvas');
                    var engine = new BABYLON.Engine(canvas, true);
                    var createScene = function () {
                        var scene = new BABYLON.Scene(engine);
                        scene.clearColor = new BABYLON.Color3(0.51, 0.83, 0.95);
                        var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 3, -10), scene); //makes camera
                        camera.setTarget(BABYLON.Vector3.Zero()); // targets camera to origin
                        camera.attachControl(canvas, true); // attaches camera to canvas (move camera by holding left click, arrow keys to move position of camera)
                        var box = BABYLON.Mesh.CreateBox("Box", 4.0, scene);
                        const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10}); ///this is working though
                        scene.diffuseColor = new BABYLON.Color3(0.51, 0.83, 0.95); //Idk y this isnt working its supposed to change the color of the ground.
                        return scene;
                    };
            
                    var scene = createScene();
                    engine.runRenderLoop(function () {
                    scene.render();
                    });
                });