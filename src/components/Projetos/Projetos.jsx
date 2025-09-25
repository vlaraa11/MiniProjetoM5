import styles from "./Projetos.module.css";

export default function Projetos() {
  return (
    <section id="projetos" className={styles.projetos}>
      <h2>Meus Projetos 🚀</h2>
      <div className={styles.card}>
        <h3>Cadastro de Desenhos</h3>
        <p>Projeto desenvolvido para cadastro e gerenciamento de desenhos animados.</p>
        <a 
          href="https://github.com/vlaraa11/MiniProjetoM3.git" 
          target="_blank" 
          rel="noreferrer"
          className={styles.btn}
        >
          Ver no GitHub
        </a>
      </div>
    </section>
  );
}
