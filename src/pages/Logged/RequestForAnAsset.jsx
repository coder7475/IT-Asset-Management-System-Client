import useAssets from '../../hooks/useAssets';

const RequestForAnAsset = () => {
  const [ allAssets ] = useAssets();
  console.log(allAssets);

  return (
    <div>
      Request for an asset      
    </div>
  );
};

export default RequestForAnAsset;