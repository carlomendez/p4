import AuthChecker from '@components/AuthChecker';
import EditTaxonomy from '@components/EditTaxonomy';
import { fetchTaxonomy } from "@/lib/data";

const EditTaxonomyPage = async ({ params }) => {
    const { id } = params;
    const taxonomy = await fetchTaxonomy(id);
    
  return (
    <AuthChecker>
      <EditTaxonomy 
            id = {taxonomy.id}
            specimenId = {taxonomy.specimenId}
            strain = {taxonomy.strain}
            subspecies = {taxonomy.subspecies}
            species = {taxonomy.species}
            genus = {taxonomy.genus}
            family = {taxonomy.family}
            order = {taxonomy.order}
            classs = {taxonomy.classs}
            phylum = {taxonomy.phylum}
            kingdom = {taxonomy.kingdom}
            domain  = {taxonomy.domain}
      />
    </AuthChecker>
  )
}

export default EditTaxonomyPage;