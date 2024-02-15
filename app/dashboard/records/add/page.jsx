import AuthChecker from '@components/AuthChecker';
import CreateInformation from '@components/CreateInformation';

const AddInformationPage = () => {
  return (
    <AuthChecker>
      <CreateInformation/>
    </AuthChecker>
  );
};

export default AddInformationPage;
