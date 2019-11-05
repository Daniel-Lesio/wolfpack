import anime from 'animejs';
import nav from './ui/nav';
import psi from './psi';
import io from './ui/io';
import imgLazyLoad from './ui/imgLazyLoad';
import jumps from './ui/jumps';
import scrollTo from './effects/scrollTo';
import carousel from './effects/carousel' 

const app = () => {
psi();
nav();
io();
imgLazyLoad();
scrollTo();
carousel();
}

 
export default app;