import { updateRecord } from "@lib/actions";
import { fetchRecord } from "@lib/data";
import styles from "@components/products/singleProduct/singleProduct.module.css";

const SingleRecordPage = async ({ params }) => {
  const { id } = params;
  const record = await fetchRecord(id);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action={updateRecord} className={styles.form}>
          <input type="hidden" name="id" value={record.id} />
          <input type="hidden" placeholder={record.id} name="inputId" required/>
        <label>Input ID code</label>
        <select name="template" id="template" placeholder="Entity template" required>
          <option value="QA_sample">QA_sample</option>
          <option value="Control_sample">Control_sample</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Materia_sample">Material_sample</option>
        </select>
        <label>Entity template</label>
        <select name="location" id="location" placeholder="Location" required>
          <option value="Cartago">Cartago</option>
          <option value="Manchester">Manchester</option>
          <option value="San Ramon">San Ramon</option>
          <option value="Bengalore">Bengalore</option>
          <option value="San Pedro">San Pedro</option>
        </select>
        <label>Site Location</label>
        <input type="date" placeholder={record.sampledDate} name="sampledDate" />
        <label>Sampled Date</label>
        <input type="date" placeholder={record.recdDate} name="recdDate"/>
        <label>Recorded Date</label>
        <input type="date" placeholder={record.completedDate} name="completedDate" />
        <label>Completed Date</label>
        <input type="date" placeholder={record.AuthorizedDate} name="authorizedDate" />
        <label>Authorized Date</label>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleRecordPage;
