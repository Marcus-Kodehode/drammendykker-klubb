import styles from './Hero.module.css';
import ImageSlider from './components/ImageSlider';
import FacebookPreview from './FacebookPreview';
import CalendarPreview from './CalendarPreview';
import Button from '../../../components/base/Button';
import MembershipCard from '../../../components/base/MembershipCard';
import SupportCard from '../../../components/base/SupportCard';

const Hero = () => {
  return (
    <section id="hero" className={styles.wrapper}>
      <div className={styles.heroGrid}>
        <div className={styles.left}>
          <div className={styles.intro}>
            <h3>
              Drammen Sportsdykkerklubb er en klubb for alle som trives i vannet – 
              enten du er nybegynner eller erfaren dykker.
            </h3>
            <p>
              Vi har et aktivt miljø for både apparatdykking og fridykking, og en egen 
              junioravdeling som gir unge muligheten til å utforske dykking på en trygg og morsom måte.
              Hos oss handler det om mestring, opplevelser og fellesskap – under vann og på land.
            </p>
            <p>
              Ønsker du å være med, eller bare nysgjerrig på hva vi driver med? Ta kontakt 
              eller bli med på en av våre klubbkvelder!
            </p>
            <Button text="Bli medlem i dag" to="/medlemmer" variant="alert" size="lg" />
          </div>

          <div className={styles.cardSpacing}>
            <SupportCard />
            <MembershipCard />
          </div>
        </div>

        <div className={styles.right}>
          <ImageSlider />
          <CalendarPreview />
        </div>
      </div>

      <div className={styles.facebook}>
        <FacebookPreview />
      </div>
    </section>
  );
};

export default Hero;
