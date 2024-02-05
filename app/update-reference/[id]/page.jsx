import AuthChecker from '@components/AuthChecker';
import { fetchReference } from "@/lib/data";
import { updateReference } from '@lib/actions';
import styles from "@components/entries/addEntry/addEntry.module.css";

const EditReference = async ({ params }) => {
    const { id } = params;
    const reference = await fetchReference(id);
    
  return (
    <AuthChecker>
      <div className={styles.container}>
        <h1 className="head_text text-left"><span className="blue_gradient">Edit Strain Reference</span></h1>
        <p className="desc text-left max-w-md">
          Update the Reference of a strain or species with the following available fields.
        </p>
        <br></br>
        <form action={updateReference} className={styles.form}>
          <label>
            <input type="hidden" name="id" value={reference.id} />
            <input type="hidden" name="specimenId" value={reference.specimenId} />
            <span
              className="font-satoshi font-semibold text-base text-gray-700"  
            >
              Strain Reference
            </span>
          </label>
          <label>{`Author/s`}</label>
            <textarea name="author" placeholder={reference.author} style={{width: "100%"}} />
          <label>Title of Publication or Website</label>
            <textarea name="sourceTitle" placeholder={reference.sourceTitle} style={{width: "100%"}} />
          <label>Article Title</label>
            <textarea name="articleTitle" placeholder={reference.articleTitle} style={{width: "100%"}} />
          <label>Date of Publication</label>
            <textarea name="publicationDate" placeholder={reference.publicationDate} style={{width: "100%"}} />
          <label>Place of Publication </label>
            <textarea name="publicationPlace"  placeholder={reference.publicationPlace} style={{width: "100%"}} />
          <label>Publisher </label>
            <textarea name="publisher" placeholder={reference.publisher} style={{width: "100%"}} />
          <label>Volume number of journal, magazine, or encyclopedia</label>
            <textarea name="volumeNumber" placeholder={reference.volumeNumber} style={{width: "100%"}} />
          <label>Website owner {`(if from web)`} </label>
            <textarea name="website" placeholder={reference.website} style={{width: "100%"}} />
          <label>URL </label>
            <textarea name="url" placeholder={reference.url} style={{width: "100%"}} />
          <label>Page numbers</label>
            <textarea name="pages" placeholder={reference.pages} style={{width: "100%"}} />
          <label>Date of Access {`(for web access)`}</label>
            <textarea name="accessDate" placeholder={reference.accessDate} style={{width: "100%"}} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </AuthChecker>
  )
}

export default EditReference;