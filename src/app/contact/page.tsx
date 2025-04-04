import SocialList from '@/components/SocialList/SocialList';
import css from './page.module.css';
import ContactForm from '@/components/ContactForm/ContactForm';

export default function Contact() {
  return (
    <div className="container">
      <section className={css.section}>
        <div className={css.sectionContainer}>
          <div>
            <h1 className={css.title}>
              We're here to help you every step of the way.
            </h1>
            <div className={css.onDeskWrapper}>
              <SocialList />
            </div>
            <div className={css.onMobWrapper}>
              <ContactForm />
            </div>
          </div>
          <div className={css.onMobWrapper}>
            <SocialList />
          </div>
          <div className={css.onDeskWrapper}>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
