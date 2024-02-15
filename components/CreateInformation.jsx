"use client";

import { addInformation } from "@lib/actions";
import styles from "@components/entries/addEntry/addEntry.module.css";
import { useSession } from "next-auth/react"

const CreateInformation = () => {
    const { data: session } = useSession();
    return (
      <div className={styles.container}>
        <form action={addInformation} className={styles.form}>
          <label>Strain ID {`(required)`}</label>
          <input type="hidden" name="userId" value={session?.user.id} />
          <textarea name="strainId" type="text" rows="1" placeholder="Input ID" required />
          <label>Accession Number</label>
          <textarea name="accessionNumber" type="text" rows="1" placeholder="Accession Number" />
          <label>{`Genus and/or species`}</label>
          <textarea name="genusspecies" type="text" rows="1" placeholder={`Genus and/or species`} />
          <label>Description {`(required)`}</label>
          <textarea name="description" rows="8" placeholder="Description"required ></textarea>
          <label>Traits</label>
          <textarea name="trait" rows="6" placeholder="Traits"></textarea>
          <label>Economic Use</label>
          <textarea name="economicUse" rows="6" placeholder="Economic Use"></textarea>
          <label>Habitat Information</label>
          <textarea name="habitatInformation" rows="8" placeholder="Habitat Information"></textarea>
          <label>Species Author</label>
          <textarea name="speciesAuthor" rows="1" type="text" placeholder="Species Author" />
          <label>Isolator</label>
          <textarea name="isolator" rows="1" type="text" placeholder="Isolator" />
          <label>Provenance or History of the Strain or Species</label>
          <textarea name="provenance" rows="1" type="text" placeholder="Provenance" />
          <label>Additional Information</label>
          <textarea name="additionalInformation" rows="10" placeholder="Additional Information"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default CreateInformation;