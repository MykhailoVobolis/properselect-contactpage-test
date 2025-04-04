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
            <SocialList />
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
