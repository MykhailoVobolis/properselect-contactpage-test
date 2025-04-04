import css from './page.module.css';

export default function Home() {
  return (
    <div className="container">
      <section className={css.section}>
        <h1 className={css.title}>Hello!</h1>
        <p className={css.description}>This is the home page.</p>
        <p className={css.description}>
          To contact us, click on the menu button.
        </p>
      </section>
    </div>
  );
}
