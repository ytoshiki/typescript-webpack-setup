import World from "./world";

const root = document.getElementById("root");
const world = new World("hello world");
world.sayHello(root);

const uk = new World("Hello from the U.K!");
uk.sayHello(root);