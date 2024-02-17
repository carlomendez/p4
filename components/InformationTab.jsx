import Link from "next/link";
import styles from "@components/entries/singleEntry/singleEntry.module.css";
import StrainMap from "./StrainMap";

const InformationTab = ({
  entrypoint = 'public', 
  id,
  strainId, 
  accessionNumber, 
  genusspecies,
  description, 
  trait, 
  economicUse, 
  habitatInformation, 
  speciesAuthor, 
  isolator, 
  provenance, 
  additionalInformation,
  latitude,
  longitude 
 }) => {

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {entrypoint === 'dashboard' && (<Link href={`/update-information/${id}`}>
                      <button >
                        Update
                      </button>
                    </Link>)}
        <div className={styles.form}>
          <label>Strain ID</label>
          <p>{strainId}</p>
          <label>Accession Number</label>
          <p>{accessionNumber}</p>
          <label>{`Genus and/or species`}</label>
          <p>{genusspecies}</p>
          <label>Description</label>
          <p>{description}</p>
          <label>Traits</label>
          <p>{trait}</p>
          <label>Economic Use</label>
          <p>{economicUse}</p>
          <label>Habitat Information</label>
          <p>{habitatInformation}</p>
          <label>Species Author</label>
          <p>{speciesAuthor}</p>
          <label>Isolator</label>
          <p>{isolator}</p>
          <label>Provenance or History of the Strain or Species</label>
          <p>{provenance}</p>
          <label>Additional Information</label>
          <p>{additionalInformation}</p>
        </div>
        {latitude && longitude &&(
          <StrainMap
                  latitude = {latitude}
                  longitude = {longitude}
          />)
        }
      </div>
    </div>
  );
};

export default InformationTab;
