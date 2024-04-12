const [profileData, setProfileData] = useState({
    fullname: '',
    email: '',
    username: '',
    profilePicUrl: '',
  });

useEffect(() => {
    const fetchProfile = async () => {
      try {
        const url = 'http://localhost:7000/api/v1/users/profile';
        const response = await axios.get(url, { withCredentials: true }); // Use GET for profile retrieval
        setProfileData(response.data.data); // Assuming data structure
      } catch (error) {
        console.error('Error fetching profile:', error);
        // Handle errors gracefully, e.g., display an error message to the user
      }
    };

    fetchProfile();
  }, []);