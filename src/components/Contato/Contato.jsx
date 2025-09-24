import styles from "./Contato.module.css";

export default function Contato() {
  return (
    <section className={styles.contato}>
      <h2>Entre em Contato 💌</h2>
      <p>Fico feliz em conversar sobre projetos, ideias e colaborações!</p>

      <div className={styles.info}>
        <p><strong>Email:</strong> vl7829765@gmail.com</p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/vlaraa11" target="_blank" rel="noreferrer">
            vlaraa11
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/vlaraa11/" target="_blank" rel="noreferrer">
            Vitória Lara
          </a>
        </p>
      </div>
    </section>
  );
}
