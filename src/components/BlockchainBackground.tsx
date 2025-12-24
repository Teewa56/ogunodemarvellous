import { useEffect, useRef } from "react";

export default function BlockchainBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const blocks: Block[] = [];
        const particles: Particle[] = [];

        class Block {
            x: number;
            y: number;
            size: number;
            speedY: number;
            hash: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height + height; // Start below
                this.size = Math.random() * 20 + 10;
                this.speedY = Math.random() * 0.5 + 0.2;
                this.hash = Math.random().toString(16).substring(2, 8);
            }

            update() {
                this.y -= this.speedY; // Float up
                if (this.y < -50) {
                    this.y = height + 50;
                    this.x = Math.random() * width;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.strokeStyle = "rgba(100, 116, 139, 0.3)";
                ctx.lineWidth = 1;
                ctx.strokeRect(this.x, this.y, this.size, this.size);

                // Simulating data inside
                ctx.fillStyle = "rgba(147, 197, 253, 0.1)";
                ctx.fillRect(this.x, this.y, this.size, this.size);

                // Hash text
                ctx.fillStyle = "rgba(100, 116, 139, 0.5)";
                ctx.font = "8px monospace";
                ctx.fillText("0x" + this.hash, this.x + 2, this.y - 4);
            }
        }

        // Connects blocks that are close
        const drawConnections = () => {
            if (!ctx) return;
            for (let i = 0; i < blocks.length; i++) {
                for (let j = i + 1; j < blocks.length; j++) {
                    const dx = blocks[i].x - blocks[j].x;
                    const dy = blocks[i].y - blocks[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 + (100 - dist) / 500})`; // Blueish
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(blocks[i].x + blocks[i].size / 2, blocks[i].y + blocks[i].size / 2);
                        ctx.lineTo(blocks[j].x + blocks[j].size / 2, blocks[j].y + blocks[j].size / 2);
                        ctx.stroke();
                    }
                }
            }
        };

        class Particle {
            x: number;
            y: number;
            opacity: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.opacity = Math.random() * 0.5;
            }

            update() {
                this.opacity -= 0.005;
                if (this.opacity <= 0) {
                    this.opacity = Math.random() * 0.5;
                    this.x = Math.random() * width;
                    this.y = Math.random() * height;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(168, 85, 247, ${this.opacity})`; // Purple
                ctx.fillRect(this.x, this.y, 2, 2);
            }
        }


        const init = () => {
            canvas.width = width;
            canvas.height = height;

            for (let i = 0; i < 30; i++) {
                blocks.push(new Block());
            }
            for (let i = 0; i < 50; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw static grid lines for "ledger" feel
            ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
            ctx.lineWidth = 1;
            const gridSize = 50;
            for (let x = 0; x < width; x += gridSize) {
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
            }

            blocks.forEach(block => {
                block.update();
                block.draw();
            });

            drawConnections();

            particles.forEach(p => {
                p.update();
                p.draw();
            })

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            blocks.length = 0; // Reset to avoid clutter
            init();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-black" />;
}
