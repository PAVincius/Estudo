#What's Three.Js ?

####Three.js is a 3D Javascript library that enables developers to create 3D experience for the web. It works with WebGL, but you can also make ir work with SVG and CSS but those two are quite limited.

#What's WebGL?

- Javascript API
- Render triangles really fast
- Rendered in a canvas component
- Use the GPU
- Can be used for 2D but focus on 3D

#How to start using Three.js?

####We need a scene:

```js
const scene = new THREE.Scene());
```

####A Object:

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
####A Camera:

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
####A Renderer:

```js
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
```

Set the sizes of the renderer

```js
renderer.setSize(sizes.widht, sizes.height)
```
#Congrats, it's your first step into threejs 