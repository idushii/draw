<template>
  <div>
    <canvas id="imageCanvas" width="500" height="500" style="background:#ccc;"></canvas>
  </div>
</template>

<script>
export default {
  name: 'Paper',
  data() {
    return {}
  },
  computed: {},
  mounted() {
    var canvasElem2 = document.getElementById('imageCanvas');
    if (canvasElem2) {

      //let paddTop = navigation_bar.offsetHeight + 30;

      let width = window.innerWidth;
      let height = window.innerHeight - 5;

      let widthCanvas = 500;
      let heightCanvas = 500;

      let step = { x: widthCanvas / width, y: heightCanvas / height }

      canvasElem2.style.height = height + 'px'

      var imageCanvas = canvasElem2.getContext('2d');
      imageCanvas.fillStyle = 'black';
      imageCanvas.strokeStyle = 'black';
      canvasElem2.addEventListener('touchmove', function(e) {
        var touches = e.changedTouches;

        for (var i = 0; i < touches.length; i++) {
          var x, y;
          x = touches[i].clientX * step.x;
          y = touches[i].clientY * step.y - 0;
          imageCanvas.lineTo(x, y)
          imageCanvas.moveTo(x, y)
          imageCanvas.stroke();
        }
      });

    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas {
  width: 100%;
}
</style>