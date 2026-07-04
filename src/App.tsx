
import React, { useState } from "react"
import "./styles.css"

export default function App() {
  const [lang, setLang] = useState("pt")
  const [showForm, setShowForm] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [sent, setSent] = useState(false)

  const texts: Record<string, Record<string, string>> = {
    pt: {subtitle: "Template profissional de alta conversao", desc: "Crie landing pages que convertem visitantes em leads qualificados.", cta: "Comecar Agora", features: "Recursos", lang: "PT"},
    en: {subtitle: "High-conversion professional template", desc: "Create landing pages that turn visitors into qualified leads.", cta: "Get Started", features: "Features", lang: "EN"},
    es: {subtitle: "Plantilla profesional de alta conversion", desc: "Crea paginas que convierten visitantes en leads calificados.", cta: "Empezar", features: "Caracteristicas", lang: "ES"},
  }
  const t = texts[lang]

  return (
    <div className="app">
      <header className="header">
        <div className="container header-inner">
          <h1 style={{fontSize: "1.2rem"}}>Landing Kit</h1>
          <nav className="nav">
            <a href="#">{t.features}</a>
            <a href="#">Precos</a>
            <a href="#">Contato</a>
            <select value={lang} onChange={e => setLang(e.target.value)} className="lang-select">
              <option value="pt">PT</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="container hero-content">
            <h2>{t.subtitle}</h2>
            <p>{t.desc}</p>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => setShowForm(true)}>{t.cta}</button>
              <button className="btn-outline">Saiba Mais</button>
            </div>
          </div>
        </section>
        <section className="features container">
          <div className="feature-card"><i className="fa-solid fa-bolt"></i><h3>Otimizado</h3><p>Performance e SEO</p></div>
          <div className="feature-card"><i className="fa-solid fa-language"></i><h3>Multi-idioma</h3><p>3 idiomas inclusos</p></div>
          <div className="feature-card"><i className="fa-solid fa-chart-line"></i><h3>Analytics</h3><p>Eventos de conversao</p></div>
          <div className="feature-card"><i className="fa-solid fa-mobile-screen"></i><h3>Responsivo</h3><p>100% adaptado</p></div>
        </section>
        <section className="cta-section">
          <div className="container" style={{textAlign: "center"}}>
            <h3>Pronto para comecar?</h3>
            <button className="btn-primary" onClick={() => setShowForm(true)}>{t.cta}</button>
          </div>
        </section>
      </main>
      {showForm && !sent && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>{t.cta}</h3>
            <input placeholder="Seu nome" value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder="Seu email" value={email} onChange={e => setEmail(e.target.value)} />
            <button className="btn-primary" onClick={() => {if (name && email) setSent(true)}}>{t.cta}</button>
            <button className="btn-outline" style={{width: "100%"}} onClick={() => setShowForm(false)}>Fechar</button>
          </div>
        </div>
      )}
      {sent && (
        <div className="modal-overlay">
          <div className="modal" style={{textAlign: "center"}}>
            <div style={{fontSize: "3rem", marginBottom: "8px"}}>+</div>
            <h3>Recebemos seu contato!</h3>
            <button className="btn-primary" onClick={() => {setSent(false); setShowForm(false); setName(""); setEmail("")}}>OK</button>
          </div>
        </div>
      )}
    </div>
  )
}
