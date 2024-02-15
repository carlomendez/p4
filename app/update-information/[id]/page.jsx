import AuthChecker from '@components/AuthChecker';
import EditInformation from '@components/EditInformation';
import { fetchInformation } from "@/lib/data";

const EditInformationPage = async ({ params }) => {
    const { id } = params;
    const information = await fetchInformation(id);
    
  return (
    <AuthChecker>
      <EditInformation
            id = {information.id}
            strainId = {information.strainId}
            accessionNumber = {information.accessionNumber}
            genusspecies = {information.genusspecies}
            description = {information.description}
            trait = {information.trait}
            economicUse = {information.economicUse}
            habitatInformation = {information.habitatInformation}
            speciesAuthor = {information.speciesAuthor}
            isolator = {information.isolator}
            provenance = {information.provenance}
            additionalInformation = {information.additionalInformation}
      />
    </AuthChecker>
  )
}

export default EditInformationPage;