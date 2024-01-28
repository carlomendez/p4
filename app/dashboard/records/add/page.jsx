import { addRecord } from "@lib/actions";
import styles from "@components/products/addProduct/addProduct.module.css";

const AddRecordPage = () => {
  return (
    <div className={styles.container}>
      <form action={addRecord} className={styles.form}>
        <input type="text" placeholder="Input ID" name="inputId" required />
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
        <input type="date" placeholder="sampledDate" name="sampledDate" />
        <label>Sampled Date</label>
        <input type="date" placeholder="recdDate" name="recdDate"/>
        <label>Recorded Date</label>
        <input type="date" placeholder="completedDate" name="completedDate" />
        <label>Completed Date</label>
        <input type="date" placeholder="authorizedDate" name="authorizedDate" />
        <label>Authorized Date</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddRecordPage;
