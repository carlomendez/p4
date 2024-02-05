import Link from "next/link";
import { fetchReference } from '@lib/data';
import styles from "@components/entries/singleEntry/singleEntry.module.css";

const ReferencePage = async ({ params }) => {
  const { id } = params;
  const reference = await fetchReference(id);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Link href={`/update-reference/${id}`}>
                      <button >
                        Update
                      </button>
                    </Link>
        <div className={styles.form}>
          <label>{`Author/s`}</label>
          <p>{reference.author}</p>
          <label>Title of Publication or Website</label>
          <p>{reference.sourceTitle}</p>
          <label>Article Title</label>
          <p>{reference.articleTitle}</p>
          <label>Date of Publication</label>
          <p>{reference.publicationDate}</p>
          <label>Place of Publication</label>
          <p>{reference.publicationPlace}</p>
          <label>Publisher</label>
          <p>{reference.publisher}</p>
          <label>Volume number of journal, magazine, or encyclopedia</label>
          <p>{reference.volumeNumber}</p>
          <label>Website owner {`(if from web)`}</label>
          <p>{reference.website}</p>
          <label>URL</label>
          <p>{reference.url}</p>
          <label>Page numbers</label>
          <p>{reference.pages}</p>
          <label>Date of Access {`(for web access)`}</label>
          <p>{reference.accessDate}</p>
        </div>
        <Link href={`/dashboard/records/${reference.specimenId}`} className="text-gray-500 text-sm">
            Back
        </Link>
      </div>
    </div>
  );
};

export default ReferencePage;
