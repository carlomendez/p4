import AuthChecker from '@components/AuthChecker';
import { fetchInformation } from "@/lib/data";
import { updateInformation } from '@lib/actions';
import styles from "@components/entries/addEntry/addEntry.module.css";

const EditInformation = async ({ params }) => {
    const { id } = params;
    const information = await fetchInformation(id);
    
  return (
    <AuthChecker>
      <div className={styles.container}>
        <h1 className="head_text text-left"><span className="blue_gradient">Edit Strain Information</span></h1>
        <p className="desc text-left max-w-md">
          Update a strain or species with the following available fields. 
        </p>
        <br></br>
        <form action={updateInformation} className={styles.form}>
          <label>
            <input type="hidden" name="id" value={information.id} />
            <span
              className="font-satoshi font-semibold text-base text-gray-700"  
            >
              Strain Information
            </span>
          </label>
          <label>Strain ID</label>
            <input name="strainId" rows="1" placeholder={information.strainId} style={{width: "100%"}} />
          <label>Accession Number</label>
            <input name="accessionNumber" rows="1" placeholder={information.accessionNumber} style={{width: "100%"}}/>
          <label>{`Genus and/or species`}</label>
            <input name="genusspecies" rows="1" placeholder={information.genusspecies} style={{width: "100%"}}/>
          <label>Description</label>
            <input name="description" rows="8" placeholder={information.description} style={{width: "100%"}}/>
          <label>Traits</label>
            <input name="trait" rows="6" placeholder={information.trait}style={{width: "100%"}}/>
          <label>Economic Use</label>
            <input name="economicUse" rows="6" placeholder={information.economicUse} style={{width: "100%"}}/>
          <label>Habitat Information</label>
            <input name="habitatInformation" rows="8" placeholder={information.habitatInformation} style={{width: "100%"}}/>
          <label>Species Author</label>
            <input name="speciesAuthor" rows="1" placeholder={information.speciesAuthor} style={{width: "100%"}}/>
          <label>Isolator</label>
            <input name="isolator" rows="1" placeholder={information.isolator} style={{width: "100%"}}/>
          <label>Provenance or History of the Strain or Species</label>
            <input name="provenance" rows="1" placeholder={information.provenance} style={{width: "100%"}}/>
          <label>Additional Information</label>
            <input name="additionalInformation" rows="10" placeholder={information.additionalInformation} style={{width: "100%"}}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </AuthChecker>
  )
}

export default EditInformation;