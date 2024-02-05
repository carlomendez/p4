import AuthChecker from '@components/AuthChecker';
import { fetchTaxonomy } from "@/lib/data";
import { updateTaxonomy } from '@lib/actions';
import styles from "@components/entries/addEntry/addEntry.module.css";

const EditTaxonomy = async ({ params }) => {
    const { id } = params;
    const taxonomy = await fetchTaxonomy(id);
    
  return (
    <AuthChecker>
      <div className={styles.container}>
        <h1 className="head_text text-left"><span className="blue_gradient">Edit Strain Taxonomy</span></h1>
        <p className="desc text-left max-w-md">
          Update the taxonomy of a strain or species with the following available fields.
        </p>
        <br></br>
        <form action={updateTaxonomy} className={styles.form}>
          <label>
            <input type="hidden" name="id" value={taxonomy.id} />
            <input type="hidden" name="specimenId" value={taxonomy.specimenId} />
            <span
              className="font-satoshi font-semibold text-base text-gray-700"  
            >
              Strain Taxonomy
            </span>
          </label>
          <label>Strain</label>
            <input name="strain" placeholder={taxonomy.strain} style={{width: "100%"}} />
          <label>Subspecies</label>
            <input name="subspecies" placeholder={taxonomy.subspecies} style={{width: "100%"}} />
          <label>Species</label>
            <input name="species" placeholder={taxonomy.species} style={{width: "100%"}} />
          <label>Genus</label>
            <input name="genus" placeholder={taxonomy.genus} style={{width: "100%"}} />
          <label>Family</label>
            <input name="family" placeholder={taxonomy.family} style={{width: "100%"}} />
          <label>Order</label>
            <input name="order" placeholder={taxonomy.order} style={{width: "100%"}} />
          <label>Class</label>
            <input name="classs" placeholder={taxonomy.classs} style={{width: "100%"}} />
          <label>Phylum</label>
            <input name="phylum" placeholder={taxonomy.phylum} style={{width: "100%"}} />
          <label>Kingdom</label>
            <input name="kingdom" placeholder={taxonomy.kingdom} style={{width: "100%"}} />
          <label>Domain </label>
            <input name="domain" placeholder={taxonomy.domain} style={{width: "100%"}} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </AuthChecker>
  )
}

export default EditTaxonomy;