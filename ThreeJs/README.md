<h1>What's Three.Js ?</h1>

<h3>Three.js is a 3D Javascript library that enables developers to create 3D experience for the web. It works with WebGL, but you can also make ir work with SVG and CSS but those two are quite limited.</h3>


<h1>What's WebGL?</h1>

- Javascript API
- Render triangles really fast
- Rendered in a canvas component
- Use the GPU
- Can be used for 2D but focus on 3D

<h1>How to start using Three.js?</h1>

<h4>We need a scene:</h4>

```js
const scene = new THREE.Scene());
```

<h4>A Object:</h4>

To creat a object we first need to create a [Mesh](https://threejs.org/docs/#api/en/objects/Mesh) which is composed by a geometry 

```js
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1) //create a cube
```
and a material

```js
const cubeMaterial = new THREE.MeshBasicMaterial({color: '#ff0000'}) //red
```

Now we can create our Mesh

```js
const mesh = new THREE.Mesh(cubeGeometry, cubeMaterial); //create a mesh
```

Last but not least, add the mesh to the scene

```js
scene.add(mesh); //add a mesh to scene
```
<h4>A Camera:</h4>

In this example we'll use a PerspectiveCamera and add ir to the scene

```js
const camera = new THREE.PerspectiveCamera()
scene.add(camera)
```

But before you can use that camera you have to provide two parameters, pov and the aspect ratio ( wight / height ). The pov stands for Point of View, a value in degrees that mean how wide a "view" is.For the sizes we'll use this values as an example.

```js
const sizes = {
    width: 800,
    height: 600
}
```
Now we can add it to our camera like this

```js
const camera = new THREE.PerspectiveCamera(75, sizes.widht / sizes.height)
camera.position.z = 3 //here we are aligned to the cube, if you want to check if it's actually a cube. uncomment the next code
//camera.position.x = 1
//camera.position.y = 1
scene.add(camera)
```
<h4>A Renderer:</h4>

```js
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
```
Set the sizes of the renderer

```js
renderer.setSize(sizes.widht, sizes.height)
```
<h1>Congrats, it's your first step into threejs</h1>

<hr/>

<h1>More about Objects</h1>

<h4>Position</h4>

We can change the position of the Object in two ways.

The first way is to change the position of every axis individually.


```js
mesh.position.x = 1
mesh.position.y = 2
mesh.position.z = 3
```

the other way is to use the `mesh.position.set`, to, as it suggest, set the values of the axis in one shot.

```js
mesh.position.set(1, 2, 3)
```
<h4>Scale</h4>

Similarly to the Position, we can change the scale of a mesh by using:

```js
mesh.scale.x = 1
mesh.scale.y = 2
mesh.scale.z = 3
```
or

```js
mesh.scale.set(1, 2, 3)
```
<h4>Rotation</h4>

To set the rotation of the object, we need to care of the constant PI multiplied by some number.

```js
mesh.rotation.x = Math_PI * 1
mesh.rotation.y = Math_PI * 2
mesh.rotation.z = Math_PI * 3
```
