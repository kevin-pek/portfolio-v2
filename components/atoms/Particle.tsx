import { FC, useRef, useEffect } from "react"

interface ParticleProps {
  x?: number
  y?: number
  size?: number
  speed?: number
  color?: string
  particleCount?: number
  sizeVariance?: number
}

class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number

  constructor({ x, y, size, speed, color, sizeVariance }: ParticleProps) {
    this.x = x ?? Math.random() * window.innerWidth
    this.y = y ?? Math.random() * window.innerHeight
    const aSize = size ?? 1
    this.size = Math.random() * aSize * (sizeVariance ?? 1) + aSize
    speed = speed ?? 1
    const spd = Math.random() * speed - speed / 2
    this.speedX = spd
    this.speedY = spd
    this.color = color ?? "white"
    this.opacity = 0
  }

  update(canvasWidth: number, canvasHeight: number) {
    if (this.x > canvasWidth || this.x < 0) {
      this.speedX = -this.speedX
    }
    if (this.y > canvasHeight || this.y < 0) {
      this.speedY = -this.speedY
    }
    this.x += this.speedX
    this.y += this.speedY
    this.opacity = Math.min(1, this.opacity += 0.02)
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color
    ctx.globalAlpha = this.opacity
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
  }
}

export const Particles: FC<ParticleProps> = (props: ParticleProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationFrameId: number

    // Handle window resizing
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }
    window.addEventListener("resize", handleResize)

    let particlesArray: Particle[] = []

    // Initialize particles
    const init = () => {
      particlesArray = []
      for (let i = 0; i < (props.particleCount ?? 50); i++) {
        particlesArray.push(new Particle(props))
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particlesArray.forEach((particle) => {
        particle.update(canvas.width, canvas.height)
        particle.draw(ctx)
      })
      animationFrameId = window.requestAnimationFrame(animate)
    }

    init()
    animate()

    // Cleanup function
    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [props])

  return <canvas ref={canvasRef} className="pointer-events-none fixed h-full w-full" />
}
