import Link from "next/link";
import styles from "@components/entries/singleEntry/singleEntry.module.css";

const TaxonomyTab = ({ 
  entrypoint = 'public',
  count,
  id,
  specimenId, 
  strain, 
  subspecies, 
  species, 
  genus, 
  family, 
  order, 
  classs, 
  phylum, 
  kingdom,
  domain 
 }) => {

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
      {count < 1 && entrypoint === 'dashboard' &&  (
        <Link href={`/dashboard/records/add-taxonomy/${specimenId}`}>
          <button >
            Add Taxonomy
          </button>
        </Link>
      ) }
      {count > 0 && (
          <>
            {entrypoint === 'dashboard' && (<Link href={`/update-taxonomy/${id}`}>
              <button >
                Update
              </button>
            </Link>)}
            <div className={styles.form}>
              <label>Strain</label>
              <p>{strain}</p>
              <label>Subspecies</label>
              <p>{subspecies}</p>
              <label>Species</label>
              <p>{species}</p>
              <label>Genus</label>
              <p>{genus}</p>
              <label>Family</label>
              <p>{family}</p>
              <label>Order</label>
              <p>{order}</p>
              <label>Class</label>
              <p>{classs}</p>
              <label>Phylum</label>
              <p>{phylum}</p>
              <label>Kingdom</label>
              <p>{kingdom}</p>
              <label>Domain</label>
              <p>{domain}</p>
            </div>
          </>
      ) }
      </div>
    </div>
  );
};

export default TaxonomyTab;
