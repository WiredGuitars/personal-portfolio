// "use client"
// import React, { useEffect, useRef } from "react";


// interface Particle {
//   x: number;
//   y: number;
//   size: number;
//   color: string;
//   speedX: number;
//   speedY: number;
// }

// const Cursor: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const particles = useRef<Particle[]>([]);
//   const maxDistance = 150;
//   const maxParticles = 300;

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const devicePixelRatio = window.devicePixelRatio || 1;

//     const setCanvasSize = () => {
//       canvas.width = window.innerWidth * devicePixelRatio;
//       canvas.height = window.innerHeight * devicePixelRatio;
//       ctx.scale(devicePixelRatio, devicePixelRatio);
//     };

//     setCanvasSize();

//     let hue = 0;

//     const createParticle = (x: number, y: number): Particle => {
//       const size = 5;
//       const color = `hsl(${hue},100%,${Math.floor(Math.random() * 30) + 20}%)`;
//       const speedX = (Math.random() - 0.5) * 0.2;
//       const speedY = (Math.random() - 0.5) * 0.2;

//       return { x, y, size, color, speedX, speedY };
//     };

//     const connectParticles = (particles: Particle[]) => {
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const distance = Math.hypot(dx, dy);// "use client"
// import React, { useEffect, useRef } from "react";


// interface Particle {
//   x: number;
//   y: number;
//   size: number;
//   color: string;
//   speedX: number;
//   speedY: number;
// }

// const Cursor: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const particles = useRef<Particle[]>([]);
//   const maxDistance = 150;
//   const maxParticles = 300;

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const devicePixelRatio = window.devicePixelRatio || 1;

//     const setCanvasSize = () => {
//       canvas.width = window.innerWidth * devicePixelRatio;
//       canvas.height = window.innerHeight * devicePixelRatio;
//       ctx.scale(devicePixelRatio, devicePixelRatio);
//     };

//     setCanvasSize();

//     let hue = 0;

//     const createParticle = (x: number, y: number): Particle => {
//       const size = 5;
//       const color = `hsl(${hue},100%,${Math.floor(Math.random() * 30) + 20}%)`;
//       const speedX = (Math.random() - 0.5) * 0.2;
//       const speedY = (Math.random() - 0.5) * 0.2;

//       return { x, y, size, color, speedX, speedY };
//     };

//     const connectParticles = (particles: Particle[]) => {
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const distance = Math.hypot(dx, dy);

//           if (distance <= maxDistance) {
//             const opacity = 1 - distance / maxDistance;
//             ctx.globalAlpha = opacity;
//             ctx.strokeStyle = particles[i].color;
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }
//     };

//     const animate = () => {
//       requestAnimationFrame(animate);

//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       hue++;
//       connectParticles(particles.current);
//       particles.current.forEach((particle, index) => {
//         particle.x += particle.speedX;
//         particle.y += particle.speedY;
//         particle.size -= 0.05;
//         if (particle.size <= 0.3) {
//           particles.current.splice(index, 1);
//         }

//         ctx.fillStyle = particle.color;
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//         ctx.fill();
//       });
//     };

//     animate();

//     const handleMouseMove = (event: MouseEvent) => {
//       const numberOfParticles = 3;
//       for (let i = 0; i < numberOfParticles; i++) {
//         if (particles.current.length < maxParticles) {
//           particles.current.push(
//             createParticle(event.clientX * devicePixelRatio, event.clientY * devicePixelRatio)
//           );
//         }
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     const handleResize = () => {
//       setCanvasSize();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="particleCanvas"
//       style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none" }}
//     />
//   );
// };

// export default Cursor;


//           if (distance <= maxDistance) {
//             const opacity = 1 - distance / maxDistance;
//             ctx.globalAlpha = opacity;
//             ctx.strokeStyle = particles[i].color;
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }
//     };

//     const animate = () => {
//       requestAnimationFrame(animate);

//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       hue++;
//       connectParticles(particles.current);
//       particles.current.forEach((particle, index) => {
//         particle.x += particle.speedX;
//         particle.y += particle.speedY;
//         particle.size -= 0.05;
//         if (particle.size <= 0.3) {
//           particles.current.splice(index, 1);
//         }

//         ctx.fillStyle = particle.color;
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//         ctx.fill();
//       });
//     };

//     animate();

//     const handleMouseMove = (event: MouseEvent) => {
//       const numberOfParticles = 3;
//       for (let i = 0; i < numberOfParticles; i++) {
//         if (particles.current.length < maxParticles) {
//           particles.current.push(
//             createParticle(event.clientX * devicePixelRatio, event.clientY * devicePixelRatio)
//           );
//         }
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     const handleResize = () => {
//       setCanvasSize();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="particleCanvas"
//       style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none" }}
//     />
//   );
// };

// export default Cursor;