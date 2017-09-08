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

      let paddTop = navigation_bar.offsetHeight + 30;

      let width = window.innerWidth;
      let height = window.innerHeight - paddTop;

      let widthCanvas = 500;
      let heightCanvas = 500;

      let step = { x: widthCanvas/width, y: heightCanvas/height }

      canvasElem2.style.height = height + 'px'

      var imageCanvas = canvasElem2.getContext('2d');
      imageCanvas.fillStyle = 'black';
      imageCanvas.strokeStyle = 'black';
      canvasElem2.addEventListener('mousemove', function(e) {
        var x, y;
        x = e.pageX * step.x;
        y = e.pageY * step.y - 64;
        setTimeout(function() {
          //imageCanvas.lineTo(x - canvasElem2.offsetLeft, y - canvasElem2.offsetTop);
          //imageCanvas.moveTo(x - canvasElem2.offsetLeft, y - canvasElem2.offsetTop);
          imageCanvas.lineTo(x, y)
          imageCanvas.moveTo(x, y)
          imageCanvas.stroke();
        }, 1)
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