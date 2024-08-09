const styles = {
  container: {
    minHeight: 'calc(50vh - 50px)',
    minWidth: 'calc(50vw - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#1677ff', // Blue background
    borderRadius: '10px', // Optional: Add border radius for rounded corners
    padding: '20px', // Optional: Add padding
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Optional: Add shadow for depth
  },
  title: {
    fontWeight: 700,
    fontSize: 50,
    textAlign: 'center',
    color: '#ffffff', // White text color
  },
};

const Home = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Phonebook</h1>
  </div>
);

export default Home;
