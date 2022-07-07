import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import * as dat from 'dat.gui'

/**
 * Base
 */
const parameters = {
    color: 0xc3c3c3,
    spin: () =>
    {
        gsap(mesh.rotation, 1, { y: mesh.rotation.y + Math.PI * 2 })
    }
}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const material = new THREE.MeshStandardMaterial({ color: 0xFAFAFA })
const geometry = new THREE.SphereBufferGeometry(0.5, 64, 32 )

material.metalness = 0.45
material.roughness = 0.45
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Light
 */

  const ambientLight = new THREE.AmbientLight()
  ambientLight.color = new THREE.Color(0xFAFAFA)
  ambientLight.intensity = 0.2
  scene.add(ambientLight);

//   const diretionalLight = new THREE.DirectionalLight(0xB1DBDB, 0.5)
//     directionalLight.position.set(1, 0.25, 0)
//   scene.add(diretionalLight)

//   const diretionalLight2 = new THREE.DirectionalLight(0xECB193, 0.5)
//     directionalLight2.position.set(-1, 0.25, 0)
//   scene.add(diretionalLight2)

  const hemisphereLight = new THREE.HemisphereLight(0xB1DBDB,0xECB193, 2)
  hemisphereLight.position.set(1, 0.25, 0)
  scene.add(hemisphereLight)

  const pointLight = new THREE.PointLight(0xffffff, 1, 0.5)
  pointLight.position.set( 2, 3, 4 );
  scene.add(pointLight)
 

//  scene.add(pointLight);

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Debug
 */
const gui = new dat.GUI({
    // closed: true,
    width: 400
})
// gui.hide()
gui.add(material, 'metalness').min(0).max(1).step(0.0001)
gui.add(material, 'roughness').min(0).max(1).step(0.0001)

gui
    .addColor(parameters, 'color')
    .onChange(() =>
    {
        material.color.set(parameters.color)
    })

gui.add(parameters, 'spin')

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    //Bounce Animation
    sphere.position.y = Math.sin(elapsedTime) * .05

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()