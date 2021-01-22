const string = `
.skin {
  min-width: 100%; 
  position: relative;
  background-color: #FFDB00;
  box-sizing: border-box;
  margin:0;
  padding: 0;
}
/* 设置三角形的鼻子 */
.nose {
  position: relative;
  border: 10px solid black;
  border-color: black transparent  transparent;
  border-bottom: none;
  width: 0px;
  height: 0px;
  left: 50%;
  top: 200px;
  transform: translateX(-50%);
  z-index: 10;
}
/* 设置关键帧 */
@keyframes wave {
 0% {
   transform: translateX(-50%) rotate(0deg);
 }
 33% {
   transform: translateX(-50%) rotate(-10deg);
 }
 66% {
   transform: translateX(-50%) rotate(0deg);;
 }
 100% {
  transform: translateX(-50%) rotate(10deg);;
}
}
.nose:hover{
  /* 设置动画以什么为基准 */
  transform-origin: center bottom;
  animation: wave 800ms infinite linear;
}
/* 设置鼻子上的圆形 */
.yuan{
  position: absolute;
  width: 20px;
  height: 10px;
  background: black;
  top: -20px;
  left: 50%;
  margin-left: -10px;
  border-radius: 8px 8px 0 0 ;
}
/* 设置眼睛 */
.eye {
  position: absolute;
  width: 64px;
  height: 64px;
  border: 3px solid black;
  background: #2D2D2D;
  left: 50%;
  top: 150px;
  margin-left: -32px;
  border-radius: 50%;
}
/* 给眼睛加上白色 */
.eye::after {
  position: relative;
  content: '';
  display: block;
  width: 28px;
  height: 28px;
  border: 3px solid black;
  background: #fff;
  border-radius: 50%;
  left: 10px;
}
.eye.left {
  transform: translateX(100px);
}
.eye.right {
  transform: translateX(-100px);
}
/* 制作嘴巴 */
.mouth {
  position: relative;
  left: 0;
  height: 200px;
  width: 200px;
  left: 50%;
  margin-left: -100px;
  margin-top: 230px;
}
.mouth .up {
  position: relative;
  top: -40px;
  z-index: 1;
}
.up .left {
  position: absolute;
  width: 100px;
  height: 30px;
  border: 5px solid black;
  border-radius: 0 0 0 50px;
  background: #FFDB00;
  border-color: transparent transparent black black;
  transform: rotate(-20deg) translateX(-53px);
  left: 50%;
  margin-left:-50px ;
}
.up .right {
  position: absolute;
  width: 100px;
  background: #FFDB00;

  height: 30px;
  border: 5px solid black;
  border-radius: 0 0 50px 0;
  border-color: transparent transparent black black;
  transform: rotate(20deg) translateX(53px);
  left: 50%;
  margin-left:-50px ;
}
.up .left::after {
  position: absolute;
  content: '';
  display: block;
  height: 30px;
  width: 7px;
  right: -6px;
  background: #FFDB00;
  bottom: 0;
}
.up .right::after {
  position: absolute;
  content: '';
  display: block;
  height: 30px;
  width: 7px;
  left:  -6px;
  background: #FFDB00;
  bottom: 0;
}
.down {
  position: absolute;
  height: 180px;
  width: 100%;
  top: -9px;
  overflow: hidden;
}
.down .yuan1 {
  position: absolute;
  height: 1000px;
  width: 150px;
  background-color: #A91008;
  left: 50%;
  bottom: 0;
  margin-left: -75px;
  border-radius: 80px / 300px;
  overflow: hidden;
}
.down .yuan2 {
  position: absolute;
  height: 300px;
  width: 200px;
  background: #FF5B5D;
  left: 50%;
  margin-left:-100px ;
  bottom: -150px;
  border-radius: 100px;
}
.face {
  position: absolute;
  height: 88px;
  width: 88px;
  border: 3px solid black;
  left: 50%;
  margin-left: -44px;
  top: 250px;
  background: #FE1800;
  border-radius: 50%;
}
.face.left {
  transform: translateX(-180px);
}
.face.left >img {
  transform: rotateY(180deg);
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
}
.face.right {
  transform: translateX(180px);
}
.face.right >img {
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
}`
let n = 1;

demo.innerText = string.substr(0,n)
style.innerHTML = string.substr(0,n)
let x = () => {
  n+=1
  demo.innerText = string.substr(0,n)
  style.innerHTML = string.substr(0,n)
  if(n === string.length) {
    clearInterval(run)
  }
  demo.scrollTop = 9999
}
let time = 300;
let player = {
  play: () => {
    return setInterval(x,time)
  },
  pause: () => {
    clearInterval(run)
  },
  slow: () => {
    player.pause()
    time = 500
    run = player.play()
  },
  normal: () => {
    player.pause()
    time = 200
    run = player.play()
  },
  fast: () => {
    player.pause()
    time = 0
    run = player.play()
  }
}
let run = player.play()
btnPause.onclick = player.pause
btnPlay.onclick = () => {
  run = player.play()
}
btnSlow.onclick = player.slow
btnNormal.onclick = player.normal
btnFast.onclick = player.fast