import React, { useRef, useEffect, useState } from "react";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";


import Script from "next/script";
import axios from "axios";
function hairstyle() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    var intialFace = {
        lw: 0,
        Jawcheckbone: 0,
        dadhijaw: 0,
        left1lcenter: 0,
        left2lcenter: 0,
        left3lcenter: 0,
        left4lcenter: 0,
        left5lcenter: 0,
        left6lcenter: 0,
        left7lcenter: 0,
        left8lcenter: 0,
        left9lcenter: 0,
        right1lcenter: 0,
        right2lcenter: 0,
        right3lcenter: 0,
        right4lcenter: 0,
        right5lcenter: 0,
        right6lcenter: 0,
        right7lcenter: 0,
        right8lcenter: 0,
        right9lcenter: 0,
    }



    const [Face, setFace] = useState(intialFace)

    var work = 0;

    useEffect(async () => {
        if (Face !== intialFace) {
            // console.log(Face);
            const res = await axios.post(`${process.env.BASE_URL}/api/data`, { Face })
            // console.log(res)
        }

    }, [Face])


    var connect;
    var FaceMesh;

    var camera = null;
    useEffect(() => {
        FaceMesh = require("@mediapipe/face_mesh")

        connect = window.drawConnectors;
    }, [])
    function onResults(results) {
        // const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;
        // Set canvas width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        const canvasElement = canvasRef.current;
        const canvasCtx = canvasElement.getContext("2d");
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        canvasCtx.drawImage(
            results.image,
            0,
            0,
            canvasElement.width,
            canvasElement.height
        );
        // console.log(results.multiFaceLandmarks[0])
        // canvasCtx.beginPath();
        // canvasCtx.arc(95, 50, 40, 0, 2 * Math.PI);
        // canvasCtx.stroke();
        // results.multiFaceLandmarks[0]
        if (results.multiFaceLandmarks.length !== 0) {

            const a = 58;//l7
            const b = 172;//l6
            const c = 288;//r7
            const d = 397;//r6
            const f = 123;//le
            const g = 352;//re
            const h = 68;//lh
            const i = 298;//rh
            const j = 10;//top
            const k = 152;//down


            const m = 127;//left
            const n = 93;//left
            const o = 132;//left
            const p = 136;//left
            const q = 150;//left
            const r = 149;//left
            const s = 176;//left

            const t = 356;//right
            const u = 323;//right
            const v = 361;//right
            const w = 365;//right
            const x = 379;//right
            const y = 378;//right
            const z = 400;//right

            const hoth = 17;

            // canvasCtx.moveTo(results.multiFaceLandmarks[0][k].x * 640, results.multiFaceLandmarks[0][k].y * 480, 0, 0);
            // canvasCtx.lineTo(results.multiFaceLandmarks[0][j].x * 640, results.multiFaceLandmarks[0][j].y * 480);
            // canvasCtx.stroke();

            // canvasCtx.moveTo(results.multiFaceLandmarks[0][a].x * 640, results.multiFaceLandmarks[0][a].y * 480, 0, 0);
            // canvasCtx.lineTo(results.multiFaceLandmarks[0][c].x * 640, results.multiFaceLandmarks[0][c].y * 480);
            // canvasCtx.stroke();


            // canvasCtx.moveTo(results.multiFaceLandmarks[0][b].x * 640, results.multiFaceLandmarks[0][b].y * 480, 0, 0);
            // canvasCtx.lineTo(results.multiFaceLandmarks[0][d].x * 640, results.multiFaceLandmarks[0][d].y * 480);
            // canvasCtx.stroke();


            // canvasCtx.moveTo(results.multiFaceLandmarks[0][f].x * 640, results.multiFaceLandmarks[0][f].y * 480, 0, 0);
            // canvasCtx.lineTo(results.multiFaceLandmarks[0][g].x * 640, results.multiFaceLandmarks[0][g].y * 480);
            // canvasCtx.stroke();

            // canvasCtx.moveTo(results.multiFaceLandmarks[0][h].x * 640, results.multiFaceLandmarks[0][h].y * 480, 0, 0);
            // canvasCtx.lineTo(results.multiFaceLandmarks[0][i].x * 640, results.multiFaceLandmarks[0][i].y * 480);
            // canvasCtx.stroke();

            // canvasCtx.moveTo(results.multiFaceLandmarks[0][h].x * 640, results.multiFaceLandmarks[0][h].y * 480, 0, 0);
            // canvasCtx.lineTo(results.multiFaceLandmarks[0][i].x * 640, results.multiFaceLandmarks[0][i].y * 480);
            // canvasCtx.stroke();

            // canvasCtx.moveTo(results.multiFaceLandmarks[0][h].x * 640, results.multiFaceLandmarks[0][h].y * 480, 0, 0);
            // canvasCtx.lineTo(results.multiFaceLandmarks[0][i].x * 640, results.multiFaceLandmarks[0][i].y * 480);
            // canvasCtx.stroke();


            //this is all a to z param
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][a].x * 640, results.multiFaceLandmarks[0][a].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][b].x * 640, results.multiFaceLandmarks[0][b].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][c].x * 640, results.multiFaceLandmarks[0][c].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][d].x * 640, results.multiFaceLandmarks[0][d].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][f].x * 640, results.multiFaceLandmarks[0][f].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][g].x * 640, results.multiFaceLandmarks[0][g].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][h].x * 640, results.multiFaceLandmarks[0][h].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][i].x * 640, results.multiFaceLandmarks[0][i].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][j].x * 640, results.multiFaceLandmarks[0][j].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][k].x * 640, results.multiFaceLandmarks[0][k].y * 480, 2, 2);

            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][m].x * 640, results.multiFaceLandmarks[0][m].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][n].x * 640, results.multiFaceLandmarks[0][n].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][o].x * 640, results.multiFaceLandmarks[0][o].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][p].x * 640, results.multiFaceLandmarks[0][p].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][q].x * 640, results.multiFaceLandmarks[0][q].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][r].x * 640, results.multiFaceLandmarks[0][r].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][s].x * 640, results.multiFaceLandmarks[0][s].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][t].x * 640, results.multiFaceLandmarks[0][t].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][u].x * 640, results.multiFaceLandmarks[0][u].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][v].x * 640, results.multiFaceLandmarks[0][v].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][w].x * 640, results.multiFaceLandmarks[0][w].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][x].x * 640, results.multiFaceLandmarks[0][x].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][y].x * 640, results.multiFaceLandmarks[0][y].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][z].x * 640, results.multiFaceLandmarks[0][z].y * 480, 2, 2);
            // canvasCtx.strokeRect(results.multiFaceLandmarks[0][hoth].x * 640, results.multiFaceLandmarks[0][hoth].y * 480, 2, 2);

            // for (let i = 1; i < 100; i++) {
            //     if (results.multiFaceLandmarks[0][i].x || results.multiFaceLandmarks[0][i].y) {
            //         canvasCtx.strokeRect(results.multiFaceLandmarks[0][i].x * 640, results.multiFaceLandmarks[0][i].y * 480, 1, 1);
            //         canvasCtx.font = "9px Arial";
            //         canvasCtx.fillText(i, results.multiFaceLandmarks[0][i].x * 640, results.multiFaceLandmarks[0][i].y * 480);
            //     }
            // }



            //all retio set to the face
            // setFace({ ...Face, ["lw"]: (results.multiFaceLandmarks[0][k].y - results.multiFaceLandmarks[0][j].y) / (results.multiFaceLandmarks[0][g].x - results.multiFaceLandmarks[0][f].x) })
            // setFace({ ...Face, ["Jawcheckbone"]: (results.multiFaceLandmarks[0][g].x - results.multiFaceLandmarks[0][f].x) / (results.multiFaceLandmarks[0][d].x - results.multiFaceLandmarks[0][b].x) })
            // setFace({ ...Face, ["dadhijaw"]: (results.multiFaceLandmarks[0][k].y - results.multiFaceLandmarks[0][hoth].y) / (results.multiFaceLandmarks[0][g].x - results.multiFaceLandmarks[0][f].x) })

            // setFace({ ...Face, ["left1lcenter"]: Math.atan(Math.abs((results.multiFaceLandmarks[0][m].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][m].y - results.multiFaceLandmarks[0][k].y))) })
            // setFace({ ...Face, ["left2lcenter"]: Math.atan(Math.abs((results.multiFaceLandmarks[0][n].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][n].y - results.multiFaceLandmarks[0][k].y))) })
            // setFace({ ...Face, ["left3lcenter"]: Math.atan(Math.abs((results.multiFaceLandmarks[0][o].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][o].y - results.multiFaceLandmarks[0][k].y))) })
            // setFace({ ...Face, ["left4lcenter"]: Math.atan(Math.abs((results.multiFaceLandmarks[0][b].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][b].y - results.multiFaceLandmarks[0][k].y))) })
            // setFace({ ...Face, ["left5lcenter"]: Math.atan(Math.abs((results.multiFaceLandmarks[0][a].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][a].y - results.multiFaceLandmarks[0][k].y))) })
            // setFace({ ...Face, ["left6lcenter"]: Math.atan(Math.abs((results.multiFaceLandmarks[0][p].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][p].y - results.multiFaceLandmarks[0][k].y))) })
            // setFace({ ...Face, ["left7lcenter"]: Math.atan(Math.abs((results.multiFaceLandmarks[0][q].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][q].y - results.multiFaceLandmarks[0][k].y))) })
            // setFace({ ...Face, ["left8lcenter"]: Math.atan(Math.abs((results.multiFaceLandmarks[0][r].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][r].y - results.multiFaceLandmarks[0][k].y))) })
            // setFace({ ...Face, ["left9lcenter"]: Math.atan(Math.abs((results.multiFaceLandmarks[0][s].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][s].y - results.multiFaceLandmarks[0][k].y))) })

            // setFace({ ...Face, ["right1lcenter"]: Math.atan(Math.abs((results.multiFaceLandmarks[0][t].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][t].y - results.multiFaceLandmarks[0][k].y))) })
            // setFace({ ...Face, ["right2lcenter"]: Math.atan(Math.abs((results.multiFaceLandmarks[0][u].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][u].y - results.multiFaceLandmarks[0][k].y))) })
            // setFace({ ...Face, ["right3lcenter"]: Math.atan(Math.abs((results.multiFaceLandmarks[0][v].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][v].y - results.multiFaceLandmarks[0][k].y))) })
            // setFace({ ...Face, ["right4lcenter"]: Math.atan(Math.abs((results.multiFaceLandmarks[0][d].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][d].y - results.multiFaceLandmarks[0][k].y))) })
            // setFace({ ...Face, ["right5lcenter"]: Math.atan(Math.abs((results.multiFaceLandmarks[0][c].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][c].y - results.multiFaceLandmarks[0][k].y))) })
            // setFace({ ...Face, ["right6lcenter"]: Math.atan(Math.abs((results.multiFaceLandmarks[0][w].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][w].y - results.multiFaceLandmarks[0][k].y))) })
            // setFace({ ...Face, ["right7lcenter"]: Math.atan(Math.abs((results.multiFaceLandmarks[0][x].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][x].y - results.multiFaceLandmarks[0][k].y))) })
            // setFace({ ...Face, ["right8lcenter"]: Math.atan(Math.abs((results.multiFaceLandmarks[0][y].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][y].y - results.multiFaceLandmarks[0][k].y))) })
            // setFace({ ...Face, ["right9lcenter"]: Math.atan(Math.abs((results.multiFaceLandmarks[0][z].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][z].y - results.multiFaceLandmarks[0][k].y))) })

            var save = {
                lw: (results.multiFaceLandmarks[0][k].y - results.multiFaceLandmarks[0][j].y) / (results.multiFaceLandmarks[0][g].x - results.multiFaceLandmarks[0][f].x),
                Jawcheckbone: (results.multiFaceLandmarks[0][g].x - results.multiFaceLandmarks[0][f].x) / (results.multiFaceLandmarks[0][d].x - results.multiFaceLandmarks[0][b].x),
                dadhijaw: (results.multiFaceLandmarks[0][k].y - results.multiFaceLandmarks[0][hoth].y) / (results.multiFaceLandmarks[0][g].x - results.multiFaceLandmarks[0][f].x),
                left1lcenter: Math.atan(Math.abs((results.multiFaceLandmarks[0][m].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][m].y - results.multiFaceLandmarks[0][k].y))),
                left2lcenter: Math.atan(Math.abs((results.multiFaceLandmarks[0][n].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][n].y - results.multiFaceLandmarks[0][k].y))),
                left3lcenter: Math.atan(Math.abs((results.multiFaceLandmarks[0][o].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][o].y - results.multiFaceLandmarks[0][k].y))),
                left4lcenter: Math.atan(Math.abs((results.multiFaceLandmarks[0][b].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][b].y - results.multiFaceLandmarks[0][k].y))),
                left5lcenter: Math.atan(Math.abs((results.multiFaceLandmarks[0][a].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][a].y - results.multiFaceLandmarks[0][k].y))),
                left6lcenter: Math.atan(Math.abs((results.multiFaceLandmarks[0][p].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][p].y - results.multiFaceLandmarks[0][k].y))),
                left7lcenter: Math.atan(Math.abs((results.multiFaceLandmarks[0][q].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][q].y - results.multiFaceLandmarks[0][k].y))),
                left8lcenter: Math.atan(Math.abs((results.multiFaceLandmarks[0][r].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][r].y - results.multiFaceLandmarks[0][k].y))),
                left9lcenter: Math.atan(Math.abs((results.multiFaceLandmarks[0][s].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][s].y - results.multiFaceLandmarks[0][k].y))),
                right1lcenter: Math.atan(Math.abs((results.multiFaceLandmarks[0][t].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][t].y - results.multiFaceLandmarks[0][k].y))),
                right2lcenter: Math.atan(Math.abs((results.multiFaceLandmarks[0][u].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][u].y - results.multiFaceLandmarks[0][k].y))),
                right3lcenter: Math.atan(Math.abs((results.multiFaceLandmarks[0][v].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][v].y - results.multiFaceLandmarks[0][k].y))),
                right4lcenter: Math.atan(Math.abs((results.multiFaceLandmarks[0][d].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][d].y - results.multiFaceLandmarks[0][k].y))),
                right5lcenter: Math.atan(Math.abs((results.multiFaceLandmarks[0][c].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][c].y - results.multiFaceLandmarks[0][k].y))),
                right6lcenter: Math.atan(Math.abs((results.multiFaceLandmarks[0][w].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][w].y - results.multiFaceLandmarks[0][k].y))),
                right7lcenter: Math.atan(Math.abs((results.multiFaceLandmarks[0][x].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][x].y - results.multiFaceLandmarks[0][k].y))),
                right8lcenter: Math.atan(Math.abs((results.multiFaceLandmarks[0][y].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][y].y - results.multiFaceLandmarks[0][k].y))),
                right9lcenter: Math.atan(Math.abs((results.multiFaceLandmarks[0][z].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][z].y - results.multiFaceLandmarks[0][k].y))),
            }

            work++;
            if (work === 20) {
                work = 0;
                setFace(save)
            }



            // console.log(Math.atan(Math.abs((results.multiFaceLandmarks[0][m].x - results.multiFaceLandmarks[0][k].x) / (results.multiFaceLandmarks[0][m].y - results.multiFaceLandmarks[0][k].y))))
            // console.log((results.multiFaceLandmarks[0][k].y - results.multiFaceLandmarks[0][j].y) / (results.multiFaceLandmarks[0][g].x - results.multiFaceLandmarks[0][f].x))

            const ratio = (results.multiFaceLandmarks[0][k].y - results.multiFaceLandmarks[0][j].y) / (results.multiFaceLandmarks[0][g].x - results.multiFaceLandmarks[0][f].x)

            canvasCtx.strokeRect(results.multiFaceLandmarks[0][i].x * 640, results.multiFaceLandmarks[0][i].y * 480, 1, 1);
            canvasCtx.font = "20px Arial";
            canvasCtx.fillText(ratio, 10, 50);

            for (const landmarks of results.multiFaceLandmarks) {
                connect(canvasCtx, landmarks, FaceMesh.FACEMESH_TESSELATION, {
                    color: "#C0C0C070",
                    lineWidth: 0.1,
                });
            }


            // connect(canvasCtx, landmarks, FaceMesh.FaceMesh_RIGHT_EYE, {
            //     color: "red",
            //     lineWidth: 1
            // });
            // connect(canvasCtx, landmarks, FaceMesh.FaceMesh_RIGHT_EYEBROW, {
            //     color: "#FF3030",
            // });
            // connect(canvasCtx, landmarks, FaceMesh.FaceMesh_LEFT_EYE, {
            //     color: "#30FF30",
            // });
            // connect(canvasCtx, landmarks, FaceMesh.FaceMesh_LEFT_EYEBROW, {
            //     color: "#30FF30",
            // });
            // connect(canvasCtx, landmarks, FaceMesh.FaceMesh_FACE_OVAL, {
            //     color: "#E0E0E0",
            // });
            // connect(canvasCtx, landmarks, FaceMesh.FaceMesh_LIPS, {
            //     color: "#E0E0E0",
            // });
            // }
        } else {
            alert("please see into camara direactly not put your face in any direction and close your mouth for only 10 s for scanning...and see magic.😉😉😉😉😉😉😉😉😉😉😉😉")
        }
        canvasCtx.restore();
    }


    useEffect(() => {

        const faceMesh = new FaceMesh.FaceMesh({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
            },
        })
        faceMesh.setOptions({
            maxNumFaces: 2,
            selfieMode: true,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5,
        })

        faceMesh.onResults(onResults)
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null
        ) {
            camera = new cam.Camera(webcamRef.current.video, {
                onFrame: async () => {
                    await faceMesh.send({ image: webcamRef.current.video });
                },
                width: 640,
                height: 480,
            });
            camera.start();
        }
    }, [])


    return (
        <>
            <Script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js" strategy="beforeInteractive"
                crossorigin="anonymous"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/@mediapipe/control_utils/control_utils.js" strategy="beforeInteractive"
                crossorigin="anonymous"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js" strategy="beforeInteractive"
                crossorigin="anonymous"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js" strategy="beforeInteractive"
                crossorigin="anonymous"></Script>
            <center>
                <div className="App">
                    <Webcam
                        ref={webcamRef}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            zindex: 9,
                            width: 640,
                            height: 480,
                        }}
                    />
                    <canvas
                        ref={canvasRef}
                        className="output_canvas"
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            zindex: 9,
                            width: 640,
                            height: 480,
                        }}
                    ></canvas>
                </div>
            </center>


        </>
    );
}

export default hairstyle;
