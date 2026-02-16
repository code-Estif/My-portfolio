import { FaGithub, FaLinkedin, FaXTwitter, FaTelegram } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <h2 className="contact-title">Let’s Work Together</h2>
        <p className="contact-sub">
          Available for freelance frontend projects and long-term collaborations.
        </p>

        <div className="contact-icons">
          <a href="https://github.com/code-Estif" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/estif-dev-962531375/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://x.com/EstifLegen69153" target="_blank" rel="noreferrer">
            <FaXTwitter />
          </a>

          <a href="https://t.me/@Estif5635435963541674" target="_blank" rel="noreferrer">
            <FaTelegram />
          </a>
        </div>
      </div>
    </section>
  );
}
