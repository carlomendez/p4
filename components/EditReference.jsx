"use client"

import { updateReference } from '@lib/actions';
import { deleteReference } from "@lib/actions";
import styles from "@components/entries/addEntry/addEntry.module.css";
import { useSession } from "next-auth/react"
import { useState } from "react";

const EditReference = ({
    id, 
    specimenId,
    author, 
    sourceTitle, 
    articleTitle, 
    publicationDate, 
    publicationPlace, 
    publisher, 
    volumeNumber, 
    website, 
    url,
    pages,
    accessDate 
}) => {
    const { data: session } = useSession();
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!isOpen);
    
  return (
    <div className={styles.container}>
        <h1 className="head_text text-left"><span className="blue_gradient">Edit Strain Reference</span></h1>
        <p className="desc text-left max-w-md">
            Update the Reference of a strain or species with the following available fields.
        </p>
        <br></br>
        {isOpen == false && (
        <div className={styles.buttons}>

                    <button onClick={toggleMenu} className="black_btn mb-10">
                    Delete
                    </button>
                </div>
        )}
        {isOpen && (
        <div className={styles.buttons}>
              <p className="desc text-left max-w-md mb-5">
                Are you sure you want to delete this record?
              </p>
              <form action={deleteReference}  className="mb-5">
                <input type="hidden" name="id" value={id} />
                <input type="hidden" name="userId" value={session?.user.id} />
                <button className="black_btn">
                  Delete
                </button>
              </form>
              <button onClick={toggleMenu} className="black_btn mb-10">
                  Cancel
              </button>
            </div>
        )}
        <form action={updateReference} className={styles.form}>
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="userId" value={session?.user.id} />
        <input type="hidden" name="specimenId" value={specimenId} />
        <label>{`Author/s`}</label>
            <textarea name="author" placeholder={author} style={{width: "100%"}} />
        <label>Title of Publication or Website</label>
            <textarea name="sourceTitle" placeholder={sourceTitle} style={{width: "100%"}} />
        <label>Article Title</label>
            <textarea name="articleTitle" placeholder={articleTitle} style={{width: "100%"}} />
        <label>Date of Publication</label>
            <textarea name="publicationDate" placeholder={publicationDate} style={{width: "100%"}} />
        <label>Place of Publication </label>
            <textarea name="publicationPlace"  placeholder={publicationPlace} style={{width: "100%"}} />
        <label>Publisher </label>
            <textarea name="publisher" placeholder={publisher} style={{width: "100%"}} />
        <label>Volume number of journal, magazine, or encyclopedia</label>
            <textarea name="volumeNumber" placeholder={volumeNumber} style={{width: "100%"}} />
        <label>Website owner {`(if from web)`} </label>
            <textarea name="website" placeholder={website} style={{width: "100%"}} />
        <label>URL </label>
            <textarea name="url" placeholder={url} style={{width: "100%"}} />
        <label>Page numbers</label>
            <textarea name="pages" placeholder={pages} style={{width: "100%"}} />
        <label>Date of Access {`(for web access)`}</label>
            <textarea name="accessDate" placeholder={accessDate} style={{width: "100%"}} />
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default EditReference;