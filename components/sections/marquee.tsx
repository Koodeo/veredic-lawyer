interface MarqueeProps {
  items: string[]
}

export default function Marquee({ items }: MarqueeProps) {
  const marqueeItems = [...items, ...items]

  return (
    <section className="marquee-wrap" id="marquee">
      <div className="marquee-track">
        {marqueeItems.map((item, index) => (
          <span key={index} className="m-item">
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}