import css from './page.module.css';

export default function Home() {
  return (
    <div className="container">
      <section className={css.section}>
        <h1>Home Page</h1>
        <p>This is the home page.</p>
      </section>
    </div>
  );
}
