const createUser = async (name, email, password) => {
	// TODO: Implement validation
	const user = await User.create({ name, email, password });
  
};