import { ColorRing } from 'react-loader-spinner';

export const Loader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginTop:'70px',
      position:'relative',
    }}
  >
    <ColorRing
      visible={true}
      height="70"  
      width="70"   
      colors={['#9d9dff', 'bab1ff', '#c4c4ff', '#d8d8ff', '#ebebff']}
      ariaLabel="color-ring-loading"
    />
  </div>
);
