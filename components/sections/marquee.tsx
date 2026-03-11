interface MarqueeProps {
  items: string[]
}

export default function Marquee({ items }: MarqueeProps) {
  const marqueeItems = [...items, ...items]

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {marqueeItems.map((item, index) => (
          <span key={index} className="m-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}