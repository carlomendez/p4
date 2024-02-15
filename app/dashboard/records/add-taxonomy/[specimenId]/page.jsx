"use client";

import { addTaxonomy } from "@lib/actions";
import styles from "@components/entries/addEntry/addEntry.module.css";
import { useSession } from "next-auth/react"

const AddTaxonomyPage = async ({ params }) => {
  const { data: session } = useSession();
  const { specimenId } = params;
  return (
    <div className={styles.container}>
      <form action={addTaxonomy} className={styles.form}>
          <input type="hidden" name="userId" value={session?.user.id} />
          <input type="hidden" name="specimenId" value={specimenId} />
          <label>Strain</label>
            <textarea type="text" name="strain" rows="1" />
          <label>Subspecies</label>
            <textarea type="text" name="subspecies" rows="1"/>
          <label>Species</label>
            <textarea type="text" name="species" rows="1"/>
          <label>Genus</label>
            <textarea type="text" name="genus" rows="1"/>
          <label>Family</label>
            <textarea type="text" name="family" rows="1"/>
          <label>Order</label>
            <textarea type="text" name="order" rows="1"/>
          <label>Class</label>
            <textarea type="text" name="classs" rows="1"/>
          <label>Phylum</label>
            <textarea type="text" name="phylum" rows="1"/>
          <label>Kingdom</label>
            <textarea type="text" name="kingdom" rows="1"/>
          <label>Domain </label>
            <textarea type="text" name="domain" rows="1"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTaxonomyPage;
