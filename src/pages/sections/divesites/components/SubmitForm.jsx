import styles from './SubmitForm.module.css'
import ImageUpload from './ImageUpload'

const SubmitForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Dykkeplass-skjema sendt!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fieldGroup}>
        <label htmlFor="diveSite">* Navn på dykkeplass</label>
        <input type="text" id="diveSite" name="diveSite" required />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="address">* Adresse</label>
        <input type="text" id="address" name="address" required />
      </div>

      <div className={styles.inlineGroup}>
        <fieldset>
          <legend>Adkomst</legend>
          <label><input type="checkbox" name="access" value="Bil" /> Bil</label>
          <label><input type="checkbox" name="access" value="Båt" /> Båt</label>
        </fieldset>

        <fieldset>
          <legend>WC fasiliteter</legend>
          <label><input type="radio" name="wc" value="Ja" /> Ja</label>
          <label><input type="radio" name="wc" value="Nei" /> Nei</label>
        </fieldset>

        <fieldset>
          <legend>Skyllmuligheter</legend>
          <label><input type="radio" name="rinse" value="Ja" /> Ja</label>
          <label><input type="radio" name="rinse" value="Nei" /> Nei</label>
        </fieldset>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="description">Beskriv dykkeplassen.</label>
        <textarea id="description" name="description" rows="4" />
      </div>

      <div className={styles.inlineGroup}>
        <div className={styles.fieldGroup}>
          <label htmlFor="level">Anbefalt erfarings nivå</label>
          <select id="level" name="level">
            <option value="P1">P1</option>
            <option value="P2">P2</option>
            <option value="P3">P3</option>
          </select>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="depth">Maksdybde på dykkeplass</label>
          <input type="text" id="depth" name="depth" />
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="name">* Navn</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="email">* Epost</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="species">Hva slags arter kan man finne på denne plassen</label>
        <input type="text" id="species" name="species" />
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="images">Last opp bilder</label>
        <ImageUpload onChange={(e) => console.log(e.target.files)} />
        </div>

      <div className={styles.submitWrap}>
        <button type="submit" className={styles.submitButton}>Send</button>
      </div>

      <p className={styles.note}>
        Vi vil på vegne av Drammen sportsdykkere takke deg for at du har sendt inn informasjon om en ny dykkeplass.
        Den nye plassen vil bli satt opp så fort som mulig.
      </p>
    </form>
  )
}

export default SubmitForm
