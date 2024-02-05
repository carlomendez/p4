import { addReference } from "@lib/actions";
import styles from "@components/entries/addEntry/addEntry.module.css";

const AddReferencePage = async ({ params }) => {
  const { specimenId } = params;
  return (
    <div className={styles.container}>
      <form action={addReference} className={styles.form}>
          <input type="hidden" name="specimenId" value={specimenId} />
          <label>{`Author/s`}
          </label>
            <textarea type="text" name="author" rows="1" />
          <label>Title of Publication or Website</label>
            <textarea type="text" name="sourceTitle" rows="1"/>
          <label>Article Title</label>
            <textarea type="text" name="articleTitle" rows="1"/>
          <label>Date of Publication</label>
            <textarea type="text" name="publicationDate" rows="1"/>
          <label>Place of Publication</label>
            <textarea type="text" name="publicationPlace" rows="1"/>
          <label>Publisher</label>
            <textarea type="text" name="publisher" rows="1"/>
          <label>Volume number of journal, magazine, or encyclopedia</label>
            <textarea type="text" name="volumeNumber" rows="1"/>
          <label>Website owner {`(if from web)`}</label>
            <textarea type="text" name="website" rows="1"/>
          <label>URL</label>
            <textarea type="text" name="url" rows="1"/>
          <label>Page numbers</label>
            <textarea type="text" name="pages" rows="1"/>
          <label>Date of Access {`(for web access)`}</label>
            <textarea type="text" name="accessDate" rows="1"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddReferencePage;
