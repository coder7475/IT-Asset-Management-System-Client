import { useParams } from "react-router-dom";

const UpdateAnAsset = () => {
  const assetId = useParams();
  console.log(assetId);

  return (
    <div>
        Update Asset
    </div>
  );
};

export default UpdateAnAsset;