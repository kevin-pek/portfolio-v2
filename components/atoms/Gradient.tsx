export const Gradient = () => {
  return (
    <div
      className="pointer-events-none absolute h-1/2 w-1/2 overflow-hidden rounded-full blur-[120px]"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)"
      }}>

    </div>
  )
}