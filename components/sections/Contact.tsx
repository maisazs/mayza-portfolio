import { DecorativeStar } from "@/components/ui/DecorativeStar";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="contact__intro">
        <p className="eyebrow eyebrow--light">Contato / 07</p>
        <h2>Uma boa ideia pode começar com uma conversa.</h2>
        <p>
          Estou disponível para projetos freelancer, colaborações e oportunidades profissionais em desenvolvimento front-end.
        </p>

        <div className="contact__links">
          <a href={`mailto:${siteConfig.email}`}>
            <span>E-mail</span>
            <strong>{siteConfig.email}</strong>
          </a>
          <a href={siteConfig.linkedinUrl}>
            <span>LinkedIn</span>
            <strong>ADICIONAR LINK</strong>
          </a>
          <a href={siteConfig.githubUrl}>
            <span>GitHub</span>
            <strong>ADICIONAR LINK</strong>
          </a>
          <a href={siteConfig.whatsappUrl}>
            <span>WhatsApp</span>
            <strong>{siteConfig.phoneLabel}</strong>
          </a>
        </div>

        <a className="button button--pink" href={siteConfig.cvUrl} download>
          Baixar currículo <span aria-hidden="true">↓</span>
        </a>
      </div>

      <form className="contact-form" action={`mailto:${siteConfig.email}`} method="post" encType="text/plain">
        <div className="contact-form__heading">
          <span>Escreva uma mensagem</span>
          <span>✦</span>
        </div>

        <label>
          <span>Seu nome</span>
          <input name="name" type="text" autoComplete="name" placeholder="Como posso te chamar?" required />
        </label>

        <label>
          <span>Seu e-mail</span>
          <input name="email" type="email" autoComplete="email" placeholder="voce@exemplo.com" required />
        </label>

        <label>
          <span>Assunto</span>
          <input name="subject" type="text" placeholder="Projeto, oportunidade ou colaboração" required />
        </label>

        <label>
          <span>Mensagem</span>
          <textarea name="message" rows={5} placeholder="Conte um pouco sobre o que você precisa." required />
        </label>

        <button className="button button--dark" type="submit">
          Enviar mensagem <span aria-hidden="true">↗</span>
        </button>

        <p className="contact-form__note">
          Para produção, conecte este formulário ao Formspree, Resend ou a uma API própria.
        </p>
      </form>

      <DecorativeStar className="contact__star" size={180} />
    </section>
  );
}
