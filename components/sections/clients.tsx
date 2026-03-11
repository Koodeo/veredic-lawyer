import { siteConfig } from '@/lib/config'

export default function Clients() {
  return (
    <section className="clients" id="clients">
      <div className="clients-label">{siteConfig.clients.label}</div>
      <div className="clients-row">
        {siteConfig.clients.names.map((client) => (
          <span key={client.name} className="client-name">
            {client.name}
          </span>
        ))}
      </div>
    </section>
  )
}
