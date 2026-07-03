"use client";

import {
  FormEvent,
  useState,
} from "react";

import { DecorativeStar } from "@/components/ui/DecorativeStar";
import { siteConfig } from "@/config/site";

type FormStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error";

export function Contact() {
  const [status, setStatus] =
    useState<FormStatus>("idle");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");

    try {
      const response = await fetch(
        siteConfig.formEndpoint,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error(
          "Não foi possível enviar a mensagem.",
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section
      id="contato"
      className="contact"
    >
      <div className="contact__intro">
        <h2>
          Uma boa ideia pode começar com uma
          conversa.
        </h2>

        <p>
          Estou disponível para projetos
          freelancer, colaborações e oportunidades
          profissionais em desenvolvimento
          front-end.
        </p>

        <div className="contact__links">
          <a href={`mailto:${siteConfig.email}`}>
            <span>E-mail</span>
            <strong>{siteConfig.email}</strong>
          </a>

          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
            <strong>@mayzaester</strong>
          </a>

          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Instagram</span>
            <strong>@mayza.dev</strong>
          </a>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>WhatsApp</span>
            <strong>
              {siteConfig.phoneLabel}
            </strong>
          </a>
        </div>
      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <div className="contact-form__heading">
          <span>Escreva uma mensagem</span>
          <span aria-hidden="true">✦</span>
        </div>

        <input
          type="hidden"
          name="_subject"
          value="Nova mensagem pelo portfólio"
        />

        <label>
          <span>Seu nome</span>

          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Como posso te chamar?"
            required
          />
        </label>

        <label>
          <span>Seu e-mail</span>

          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="voce@exemplo.com"
            required
          />
        </label>

        <label>
          <span>Assunto</span>

          <input
            name="subject"
            type="text"
            placeholder="Projeto, oportunidade ou colaboração"
            required
          />
        </label>

        <label>
          <span>Mensagem</span>

          <textarea
            name="message"
            rows={5}
            placeholder="Conte um pouco sobre o que você precisa."
            required
          />
        </label>

        <button
          className="button button--dark"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting"
            ? "Enviando..."
            : "Enviar mensagem"}

          <span aria-hidden="true">↗</span>
        </button>

        <div
          className="contact-form__feedback"
          aria-live="polite"
        >
          {status === "success" ? (
            <p className="contact-form__message contact-form__message--success">
              Mensagem enviada com sucesso. Em
              breve entrarei em contato.
            </p>
          ) : null}

          {status === "error" ? (
            <p className="contact-form__message contact-form__message--error">
              Não foi possível enviar a mensagem.
              Tente novamente ou entre em contato
              pelo WhatsApp.
            </p>
          ) : null}
        </div>
      </form>

      <DecorativeStar
        className="contact__star"
        size={180}
      />
    </section>
  );
}