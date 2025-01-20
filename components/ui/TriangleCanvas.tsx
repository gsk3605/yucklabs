'use client';

import { useEffect, useRef } from 'react';

export default function TriangleCanvas() {
  const MAX_TRIANGLES = 3000; // Set the maximum number of triangles
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<{ x: number; y: number }[][]>([]);
  const additionalTrianglesRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Resize canvas and redraw triangles when the window is resized
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Redraw all triangles after resizing
      context.clearRect(0, 0, canvas.width, canvas.height);
      pointsRef.current.forEach((triangle) => drawTriangle(triangle, context));

      // Reset additional triangles counter
      additionalTrianglesRef.current = 0;
    };

    // Generate a random point within the canvas bounds
    const getRandomPoint = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    });

    // Draw a triangle using an array of 3 points
    const drawTriangle = (points: { x: number; y: number }[], context: CanvasRenderingContext2D) => {
      context.beginPath();
      context.moveTo(points[0].x, points[0].y);
      context.lineTo(points[1].x, points[1].y);
      context.lineTo(points[2].x, points[2].y);
      context.closePath();
      context.strokeStyle = 'black';
      context.stroke();
    };

    // Generate triangles until the maximum limit is reached
    const generateTriangles = () => {
      if (pointsRef.current.length < MAX_TRIANGLES) {
        const triangle = [getRandomPoint(), getRandomPoint(), getRandomPoint()];
        pointsRef.current.push(triangle);
        drawTriangle(triangle, context);
      }
    };

    // Draw additional triangles one by one
    const drawAdditionalTriangles = () => {
      if (additionalTrianglesRef.current < 1000) {
        const triangle = [getRandomPoint(), getRandomPoint(), getRandomPoint()];
        pointsRef.current.push(triangle); // Store the additional triangle
        drawTriangle(triangle, context);
        additionalTrianglesRef.current++;
      }
    };

    // Initialize canvas size and start generating triangles
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const interval = setInterval(() => {
      generateTriangles();
      drawAdditionalTriangles();
    }, 5); // Generate and draw triangles every 5ms

    window.addEventListener('resize', resizeCanvas);

    return () => {
      clearInterval(interval); // Stop triangle generation on unmount
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        display: 'block',
        width: '100vw',
        height: '100vh',
      }}
    />
  );
}