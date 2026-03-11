import { siteConfig } from '@/lib/config'

export default function Clients() {
  return (
    <section className="clients" id="clients">
      <div className="clients-label sr">{siteConfig.clients.label}</div>
      <div className="clients-row">
        {siteConfig.clients.names.map((client, index) => (
          <span key={client.name} className={`client-name sr d${(index % 4) + 1}`}>
            {client.name}
          </span>
        ))}
      </div>
    </section>
  )
}
