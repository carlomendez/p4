import AuthChecker from '@components/AuthChecker';
import { fetchReference } from "@/lib/data";
import EditReference from '@components/EditReference';

const EditReferencePage = async ({ params }) => {
    const { id } = params;
    const reference = await fetchReference(id);
    
  return (
    <AuthChecker>
      <EditReference
            id = {reference.id}
            specimenId = {reference.specimenId}
            author = {reference.author} 
            sourceTitle = {reference.sourceTitle}
            articleTitle = {reference.articleTitle}
            publicationDate = {reference.publicationDate}
            publicationPlace = {reference.publicationPlace}
            publisher = {reference.publisher}
            volumeNumber = {reference.volumeNumber}
            website = {reference.website}
            url = {reference.url}
            pages = {reference.pages}
            accessDate  = {reference.accessDate}
      />
    </AuthChecker>
  )
}

export default EditReferencePage;