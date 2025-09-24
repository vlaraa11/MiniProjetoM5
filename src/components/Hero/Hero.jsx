import { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.subtitle}>OLÁ, EU SOU 👋</p>
        <h1 className={styles.title}>
          Vitória <br /> Lara
        </h1>
        <h2 className={styles.role}>
          Fundamentos de Desenvolvimento Full Stack
        </h2>
        <p className={styles.description}>
          Me chamo Vitória, tenho 17 anos e estou completando o Ensino Médio. 
          Sou muito detalhista e curiosa também, a área tecnológica me encanta 
          e me faz querer aprender cada vez mais.
        </p>

        <div className={styles.buttons}>
          <button onClick={toggleModal} className={styles.primaryBtn}>
            Fale Comigo
          </button>
          <a href="https://www.linkedin.com/in/vlaraa11/" target="_blank" rel="noreferrer" className={styles.secondaryBtn}>
            Meu LinkedIn
          </a>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="/foto.png" // 👉 coloque sua imagem na pasta public com esse nome
          alt="Foto de Vitória Lara"
          className={styles.image}
        />
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Entre em contato 💌</h3>
            <p>Email: <strong>vl7829765@gmail.com</strong></p>
            <p>GitHub: <a href="https://github.com/vlaraa11" target="_blank" rel="noreferrer">vlaraa11</a></p>
            <button onClick={toggleModal} className={styles.closeBtn}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
