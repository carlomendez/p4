import RecordDashboard from "@components/RecordDashboard";
import InformationTab from "@components/InformationTab";
import TaxonomyTab from "@components/TaxonomyTab";
import ReferencesTab from "@components/ReferencesTab";
import { fetchInformation, fetchTaxonomyByStrain } from "@lib/data";

const DatabaseRecordDashboardPage = async ({ params }) => {
  const { id } = params;
  const information = await fetchInformation(id);
  const { count, taxonomy } = await fetchTaxonomyByStrain(id);

  return (
    <RecordDashboard 
      first={
        <InformationTab 
        id = {information.id}
        strainId = {information.strainId}
        accessionNumber = {information.accessionNumber}
        genusspecies= {information.genusspecies}
        description = {information.description}
        trait = {information.trait}
        economicUse = {information.economicUse}
        habitatInformation = {information.habitatInformation}
        speciesAuthor = {information.speciesAuthor}
        isolator = {information.isolator}
        provenance = {information.provenance}
        additionalInformation = {information.additionalInformation}
        />
      }
      second={
        <TaxonomyTab 
        count = {count}
        id = {taxonomy?.id}
        specimenId = {id}
        strain = {taxonomy?.strain}
        subspecies = {taxonomy?.subspecies}
        species = {taxonomy?.species}
        genus = {taxonomy?.genus}
        family = {taxonomy?.family}
        order = {taxonomy?.order}
        classs = {taxonomy?.classs}
        phylum = {taxonomy?.phylum}
        kingdom = {taxonomy?.kingdom}
        domain = {taxonomy?.domain}
        />
      }
      third={
        <ReferencesTab 
        id = {information.id}
        />
      }
    />
  )
}

export default DatabaseRecordDashboardPage;