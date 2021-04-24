document.addEventListener( "DOMContentLoaded", () => {
   const canvas = document.getElementById("game") as HTMLCanvasElement;
   const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
   const ch: number = canvas.height
   const cw: number = canvas.width
   const wh: number = ch / 2
   const ww: number = cw / 2
   
   // testing

   // hypo lines
   ctx.beginPath();
   ctx.moveTo(0, 0);
   ctx.lineTo(cw, ch);
   ctx.stroke();
   ctx.beginPath()
   ctx.moveTo(cw, 0)
   ctx.lineTo(0, ch)
   ctx.stroke()

   // far wall square
   ctx.beginPath()
   ctx.rect( ww / 2, wh  / 2, ww, wh)
   ctx.stroke()

   // ball
   ctx.beginPath()
   ctx.moveTo( cw / 2, ch / 2) //centered
   ctx.arc(cw / 2, ch / 2, cw/8, 0, Math.PI * 2)
   ctx.fillStyle = "blue"
   ctx.fill()
})