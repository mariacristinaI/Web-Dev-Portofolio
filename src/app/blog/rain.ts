import { Renderer2 } from "@angular/core";

export class RainEffect {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private readonly raindrops: Raindrop[] = [];
  private animationFrameId!: number;

  constructor(
    private readonly container: HTMLElement,
    private readonly renderer: Renderer2
  ) {
    // Create canvas using Renderer2 and append it to the container.
    if (container.hasChildNodes()) {
      container.firstChild?.remove();
    }
    this.canvas = this.renderer.createElement('canvas');
    this.renderer.appendChild(container, this.canvas);

    // Get the 2D context.
    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Failed to get 2D context for canvas.');
    this.ctx = ctx;

    // Set canvas dimensions.
    this.resizeCanvas();

    // Create raindrops.
    for (let i = 0; i < 100; i++) {
      this.raindrops.push(this.createRaindrop());
    }

    // Start the animation.
    this.animate();
  }

  private resizeCanvas() {
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;
  }

  private createRaindrop(): Raindrop {
    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      speed: 2 + Math.random() * 3,
      length: 10 + Math.random() * 10,
      opacity: 0.2 + Math.random() * 0.3,
    };
  }

  private drawRaindrop(raindrop: Raindrop): void {
    this.ctx.beginPath();
    this.ctx.moveTo(raindrop.x, raindrop.y);
    this.ctx.lineTo(raindrop.x, raindrop.y + raindrop.length);
    this.ctx.strokeStyle = `rgba(173, 216, 230, ${raindrop.opacity})`;
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
  }

  private updateRaindrop(raindrop: Raindrop): void {
    raindrop.y += raindrop.speed;
    if (raindrop.y > this.canvas.height) {
      raindrop.y = -raindrop.length;
      raindrop.x = Math.random() * this.canvas.width;
    }
  }

  private readonly animate = (): void => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.raindrops.forEach((raindrop) => {
      this.drawRaindrop(raindrop);
      this.updateRaindrop(raindrop);
    });

    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  destroy() {
    cancelAnimationFrame(this.animationFrameId); // Stop animation.
    this.renderer.removeChild(this.container, this.canvas); // Remove canvas.
  }
}

interface Raindrop {
  x: number;
  y: number;
  speed: number;
  length: number;
  opacity: number;
}