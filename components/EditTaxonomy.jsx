"use client"

import { updateTaxonomy } from '@lib/actions';
import styles from "@components/entries/addEntry/addEntry.module.css";
import { useSession } from "next-auth/react"

const EditTaxonomy = ({
    id, 
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
    const { data: session } = useSession();
    
  return (
      <div className={styles.container}>
        <h1 className="head_text text-left"><span className="blue_gradient">Edit Strain Taxonomy</span></h1>
        <p className="desc text-left max-w-md">
          Update the taxonomy of a strain or species with the following available fields.
        </p>
        <br></br>
        <form action={updateTaxonomy} className={styles.form}>
          <input type="hidden" name="userId" value={session?.user.id} />
          <input type="hidden" name="id" value={id} />
          <label>Strain</label>
            <input name="strain" placeholder={strain} style={{width: "100%"}} />
          <label>Subspecies</label>
            <input name="subspecies" placeholder={subspecies} style={{width: "100%"}} />
          <label>Species</label>
            <input name="species" placeholder={species} style={{width: "100%"}} />
          <label>Genus</label>
            <input name="genus" placeholder={genus} style={{width: "100%"}} />
          <label>Family</label>
            <input name="family" placeholder={family} style={{width: "100%"}} />
          <label>Order</label>
            <input name="order" placeholder={order} style={{width: "100%"}} />
          <label>Class</label>
            <input name="classs" placeholder={classs} style={{width: "100%"}} />
          <label>Phylum</label>
            <input name="phylum" placeholder={phylum} style={{width: "100%"}} />
          <label>Kingdom</label>
            <input name="kingdom" placeholder={kingdom} style={{width: "100%"}} />
          <label>Domain </label>
            <input name="domain" placeholder={domain} style={{width: "100%"}} />
          <button type="submit">Submit</button>
        </form>
      </div>
  )
}

export default EditTaxonomy;