"use client"

import { updateInformation } from '@lib/actions';
import { deleteInformation } from "@lib/actions";
import styles from "@components/entries/addEntry/addEntry.module.css";
import { useSession } from "next-auth/react"
import { useState } from "react";

const EditInformation = ({
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
    additionalInformation 
}) => {
    const { data: session } = useSession();
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!isOpen);
    
  return (
    <div className={styles.container}>
        <h1 className="head_text text-left"><span className="blue_gradient">Edit Strain Information</span></h1>
        <p className="desc text-left max-w-md">
          Update a strain or species with the following available fields. 
        </p>
        <br></br>
        {isOpen == false && (
          <div className={styles.buttons}>

                    <button onClick={toggleMenu}>
                      Delete
                    </button>
                </div>
        )}
        {isOpen && (
          <div className={styles.buttons}>
                  <p className="desc text-left max-w-md">
                    Are you sure you want to delete this record?
                  </p>
                  <form action={deleteInformation}>
                    <input type="hidden" name="id" value={id} />
                    <input type="hidden" name="userId" value={session?.user.id} />
                    <button>
                      Delete
                    </button>
                  </form>
                  <button onClick={toggleMenu}>
                      Cancel
                  </button>
                </div>
        )}
        <br></br>
        <form action={updateInformation} className={styles.form}>
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="userId" value={session?.user.id} />
          <label>Strain ID</label>
            <input name="strainId" rows="1" placeholder={strainId} style={{width: "100%"}} />
          <label>Accession Number</label>
            <input name="accessionNumber" rows="1" placeholder={accessionNumber} style={{width: "100%"}}/>
          <label>{`Genus and/or species`}</label>
            <input name="genusspecies" rows="1" placeholder={genusspecies} style={{width: "100%"}}/>
          <label>Description</label>
            <input name="description" rows="8" placeholder={description} style={{width: "100%"}}/>
          <label>Traits</label>
            <input name="trait" rows="6" placeholder={trait}style={{width: "100%"}}/>
          <label>Economic Use</label>
            <input name="economicUse" rows="6" placeholder={economicUse} style={{width: "100%"}}/>
          <label>Habitat Information</label>
            <input name="habitatInformation" rows="8" placeholder={habitatInformation} style={{width: "100%"}}/>
          <label>Species Author</label>
            <input name="speciesAuthor" rows="1" placeholder={speciesAuthor} style={{width: "100%"}}/>
          <label>Isolator</label>
            <input name="isolator" rows="1" placeholder={isolator} style={{width: "100%"}}/>
          <label>Provenance or History of the Strain or Species</label>
            <input name="provenance" rows="1" placeholder={provenance} style={{width: "100%"}}/>
          <label>Additional Information</label>
            <input name="additionalInformation" rows="10" placeholder={additionalInformation} style={{width: "100%"}}/>
          <button type="submit">Submit</button>
        </form>
      </div>
  )
}

export default EditInformation;